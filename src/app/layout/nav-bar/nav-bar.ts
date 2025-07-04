import { Component, Input } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'nav-bar',
	imports: [NgbDropdownModule],
	templateUrl: './nav-bar.html',
	styleUrl: './nav-bar.scss'
})

export class NavBar {
	@Input() userName: string = "AJ John";
}
