import { Component, AfterViewInit } from '@angular/core';
import wavesurfer from 'wavesurfer.js';
import WaveSurfer from 'wavesurfer.js';

@Component({
	selector: 'wave-surfer-sandbox',
	imports: [],
	templateUrl: './wave-surfer-sandbox.html',
	styleUrl: './wave-surfer-sandbox.scss'
})
export class WaveSurferSandbox implements AfterViewInit {
	private track1: WaveSurfer;
	private track2: WaveSurfer;

	ngAfterViewInit(): void {
		this.track1 = WaveSurfer.create({
			container: '#waveform1',
			waveColor: 'violet',
			progressColor: 'purple',
		});

		// this.track2 = WaveSurfer.create({
		// 	container: '#waveform2',
		// 	waveColor: 'orange',
		// 	progressColor: 'red',
		// });

		this.track1.load('/audio/why_oh_why_full.mp3');
		// this.track2.load('assets/track2.mp3');

		this.track1.on('click', () => {
			this.track1.play();
		})
	}
}
