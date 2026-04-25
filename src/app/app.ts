import { AfterViewInit, Component, inject, signal } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styles: [],
})
export class App implements AfterViewInit {
  protected readonly title = signal('kraiwith.github.io');

  protected readonly themeService = inject(ThemeService);

  ngAfterViewInit() {
    this.themeService.init();
  }
}
