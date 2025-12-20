import { loadRemoteModule } from '@angular-architects/native-federation';
import { Component, EventEmitter, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FallbackComponent } from './components/fallback/fallback.component';

export type CounterComponentType = {
  title: string;
  countChange: EventEmitter<number>;
};

@Component({
  selector: 'host-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('host');

  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  async ngAfterViewInit() {
    this.container.clear();

    try {

    const Card = await loadRemoteModule({
      remoteName: 'remote',
      exposedModule: './CounterComponent',
    });

    const counterComponentRef = this.container.createComponent<CounterComponentType>(
      Card.CounterComponent
    );

    counterComponentRef.setInput('title', 'Counter from host ');
    counterComponentRef.instance.countChange.subscribe((count: number) => {
      console.log(`Counter value from Remote Component: ${count}`);
    });
    } catch (error) {
      console.error('❌ Remote component load failed:', error);
      this.container.createComponent(FallbackComponent);
    }


    // cardComponentRef.setInput('title', 'Text from Host (Native Federation)');
    // cardComponentRef.setInput('content', 'Angular 20 Microfrontend Native Federation 🚀');
  }
}
