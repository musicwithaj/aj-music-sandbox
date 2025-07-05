import { Routes } from '@angular/router';
import { ToneJsSandbox } from './feature/tone-js-sandbox/tone-js-sandbox';
import { HomePageComponent } from './feature/home/home';
import { WaveSurferSandbox } from './feature/wave-surfer-sandbox/wave-surfer-sandbox';
import { NexusUiSandbox } from './feature/nexus-ui-sandbox/nexus-ui-sandbox';

export const toneJsRoute: string = 'tone-js';
export const homePageRoute: string = 'home';
export const waveSurferRoute: string = 'wave-surfer';
export const nexusUiRoute: string = 'nexus-ui';

export const routes: Routes = [
	{ path: '', redirectTo: homePageRoute, pathMatch: 'full' },
	{ path: homePageRoute, component: HomePageComponent},
	{ path: toneJsRoute, component: ToneJsSandbox },
	{ path: waveSurferRoute, component: WaveSurferSandbox },
	{ path: nexusUiRoute, component: NexusUiSandbox },
];
