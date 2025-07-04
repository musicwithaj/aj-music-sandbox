import { Component, inject, Input, OnInit } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeService } from '../../core/theme.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
	selector: 'nav-bar',
	imports: [NgbDropdownModule],
	templateUrl: './nav-bar.html',
	styleUrl: './nav-bar.scss'
})

export class NavBar implements OnInit {
	// Injecting services
	themeService = inject(ThemeService);
	router = inject(Router);

	// Input properties
	@Input() userName: string = "AJ John";
	
	// Instance Variables
	activeRoute: string = '';
	
	ngOnInit() {
		this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd) {
				this.activeRoute = event.urlAfterRedirects.substring(1); // Remove leading slash
			}
		});
	}

	isActiveRoute(route: string) {
		return this.activeRoute === route
	}

	// Route constants
	toneJsRoute: string = 'tone-js';
}
