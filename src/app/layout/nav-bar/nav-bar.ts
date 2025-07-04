import { Component, inject, Input } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeService } from '../../core/theme.service';

@Component({
	selector: 'nav-bar',
	imports: [NgbDropdownModule],
	templateUrl: './nav-bar.html',
	styleUrl: './nav-bar.scss'
})

export class NavBar {
	themeService = inject(ThemeService);
	@Input() userName: string = "AJ John";
}
