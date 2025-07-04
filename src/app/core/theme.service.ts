import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
    private currentTheme: 'light' | 'dark' = 'light';

    constructor() {
        // Optionally, initialize from localStorage or system preference
        const saved = localStorage.getItem('theme');
        if (saved === 'dark' || saved === 'light') {
            this.setTheme(saved as 'dark' | 'light');
        } else {
            this.setTheme('light');
        }
    }

    setTheme(theme: 'light' | 'dark') {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);
    }

    toggleTheme() {
        this.setTheme(this.currentTheme === 'light' ? 'dark' : 'light');
    }

    getDarkMode(): boolean {
        return this.currentTheme === 'dark';
    }
}