import { Component } from '@angular/core';

@Component({
  selector: 'host-fallback',
  imports: [],
  templateUrl: './fallback.component.html',
  styleUrl: './fallback.component.css',
})
export class FallbackComponent {
  reloadPage() {
    window.location.reload();
  }
}
