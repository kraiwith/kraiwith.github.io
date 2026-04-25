import { computed, inject, Injectable, signal } from '@angular/core';
import { StorageKey, StorageService } from './storage.service';

export type ThemeMode = 'light' | 'dark' | 'auto';

export const ThemeMode = {
  light: 'light' as ThemeMode,
  dark: 'dark' as ThemeMode,
  auto: 'auto' as ThemeMode,
};

export interface ThemeItem {
  mode: ThemeMode;
  label: string;
  icon: string;
}

const THEME_MODE_LIST: ThemeItem[] = [
  { mode: ThemeMode.light, label: 'Light', icon: 'bi bi-brightness-high-fill' },
  { mode: ThemeMode.dark, label: 'Dark', icon: 'bi bi-moon-stars-fill' },
  { mode: ThemeMode.auto, label: 'Auto', icon: 'bi bi-circle-half' },
];

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  readonly themeModeList = THEME_MODE_LIST;
  public readonly currentThemeMode = signal<ThemeMode>('auto');
  public readonly currentThemeModeItem = computed(() => {
    return (
      this.themeModeList.find((themeItem) => themeItem.mode === this.currentThemeMode()) ||
      this.themeModeList[2]
    );
  });

  private readonly storageService = inject(StorageService);

  private colorSchemeDarkQuery: MediaQueryList | undefined;
  private resolveThemeMode(mode: ThemeMode) {
    if (mode === ThemeMode.auto) {
      return this.colorSchemeDarkQuery?.matches ? ThemeMode.dark : ThemeMode.light;
    }
    return mode;
  }

  public init() {
    const storedTheme = this.storageService.get(StorageKey.Theme);
    const validStoredTheme = this.themeModeList.some((themeItem) => themeItem.mode === storedTheme);

    this.colorSchemeDarkQuery = globalThis.matchMedia('(prefers-color-scheme: dark)');
    if (validStoredTheme && storedTheme === ThemeMode.dark) {
      this.applyThemeMode(ThemeMode.dark);
    } else if (validStoredTheme && storedTheme === ThemeMode.light) {
      this.applyThemeMode(ThemeMode.light);
    } else {
      this.applyThemeMode(ThemeMode.auto);
    }

    this.colorSchemeDarkQuery.addEventListener('change', (event) => {
      if (event.matches) {
        this.applyThemeMode(ThemeMode.dark);
      } else {
        this.applyThemeMode(ThemeMode.light);
      }
    });
  }

  private applyThemeMode(theme: ThemeMode) {
    this.currentThemeMode.set(theme);
    const resolvedTheme = this.resolveThemeMode(theme);
    globalThis.document.documentElement.dataset['bsTheme'] = resolvedTheme;
  }

  public setThemeModeAndStore(mode: ThemeMode) {
    this.applyThemeMode(mode);

    if (mode === ThemeMode.auto) {
      this.storageService.remove(StorageKey.Theme);
    } else {
      this.storageService.set(StorageKey.Theme, mode);
    }
  }
}
