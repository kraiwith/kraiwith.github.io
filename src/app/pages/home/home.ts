import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styles: ``,
})
export class Home {
  protected readonly themeService = inject(ThemeService);
}
