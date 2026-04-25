import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styles: `
    .bg-hero {
      position: absolute;
      inset: 0;
      opacity: 0.1;
      z-index: -1;
      background-image:
        linear-gradient(to right, #808080 1px, transparent 1px),
        linear-gradient(to bottom, #808080 1px, transparent 1px);
      background-size: 40px 40px;
    }
  `,
})
export class Home {
  protected readonly themeService = inject(ThemeService);
}
