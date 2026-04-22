import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styles: [
    `
      .bg-screen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        min-height: 100dvh;
      }
    `,
  ],
})
export class App {
  protected readonly title = signal('kraiwith.github.io');
}
