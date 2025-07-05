import { Component, AfterViewInit, OnDestroy } from '@angular/core';
// Import the global `nexus` namespace
// import * as nexus from 'nexusui';
// declare const nx: any;


@Component({
	selector: 'nexus-ui-sandbox',
	imports: [],
	templateUrl: './nexus-ui-sandbox.html',
	styleUrl: './nexus-ui-sandbox.scss'
})

export class NexusUiSandbox implements AfterViewInit, OnDestroy {
	knob: any;

	ngAfterViewInit(): void {
		const nx = (window as any).nx;

		this.knob = new nx.Knob('#nexus-knob-container', {
			size: [100, 100],
			min: 0,
			max: 1,
			step: 0.01
		});

		this.knob.on('change', (v: number) => {
			console.log('Knob value:', v);
			// You can emit this value, use it to control audio, etc.
		});
	}

	ngOnDestroy(): void {
		// Clean up the knob to avoid memory leaks
		if (this.knob && this.knob.destroy) {
			this.knob.destroy();
		}
	}
}
