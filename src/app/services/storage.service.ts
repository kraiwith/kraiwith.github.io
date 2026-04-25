import { Injectable } from '@angular/core';

export enum StorageKey {
  Theme = 'theme',
}

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public get(key: StorageKey) {
    const valueStr = localStorage.getItem(key);
    try {
      if (valueStr) {
        const value = JSON.parse(valueStr);
        return value;
      }
      return null;
    } catch (e) {
      console.error(`Error parsing JSON for key ${key}:`, e);
      return null;
    }
  }

  public set(key: StorageKey, value: any) {
    const valueStr = JSON.stringify(value);
    localStorage.setItem(key, valueStr);
  }

  public remove(key: StorageKey) {
    localStorage.removeItem(key);
  }

  public clear() {
    localStorage.clear();
  }
}
