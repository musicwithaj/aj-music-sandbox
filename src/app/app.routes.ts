import { Routes } from '@angular/router';
import { ToneJsSandbox } from './feature/tone-js-sandbox/tone-js-sandbox';

export const toneJsRoute: string = 'tone-js';

export const routes: Routes = [
	{ path: toneJsRoute, component: ToneJsSandbox }
];
