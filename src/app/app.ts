import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./layout/nav-bar/nav-bar";

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, NavBar],
	templateUrl: './app.html',
	styleUrl: './app.scss'
})
export class App {
  	protected title = 'aj-music-sandbox';
}
