import { Routes } from '@angular/router';
import { ToneJsSandbox } from './feature/tone-js-sandbox/tone-js-sandbox';
import { HomePageComponent } from './feature/home/home';

export const toneJsRoute: string = 'tone-js';
export const homePageRoute: string = 'home';

export const routes: Routes = [
	{ path: '', redirectTo: homePageRoute, pathMatch: 'full' },
	{ path: homePageRoute, component: HomePageComponent},
	{ path: toneJsRoute, component: ToneJsSandbox },
];
