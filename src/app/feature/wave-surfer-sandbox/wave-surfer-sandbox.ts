import { Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import WaveSurfer from 'wavesurfer.js';

@Component({
	selector: 'wave-surfer-sandbox',
	imports: [FormsModule],
	templateUrl: './wave-surfer-sandbox.html',
	styleUrl: './wave-surfer-sandbox.scss'
})
export class WaveSurferSandbox implements AfterViewInit {
	private track1: WaveSurfer;
	private track2: WaveSurfer;
	isPlaying: boolean = false;
	track1Volume: number = 1;

	ngAfterViewInit(): void {
		this.track1 = WaveSurfer.create({
			container: '#waveform1',
			waveColor: 'violet',
			progressColor: 'purple',
			// Set a bar width
			barWidth: 3,
			// Optionally, specify the spacing between bars
			barGap: 2,
			// And the bar radius
			barRadius: 4,
		});

		this.track1.load('/audio/why_oh_why_full.mp3');
		// this.track2.load('assets/track2.mp3');

		this.track1.on('click', () => {
			this.track1.play();
		})
	}

	ngOnDestroy(): void {
		if (this.track1) {
			this.track1.destroy();
		}
		if (this.track2) {
			this.track2.destroy();
		}
	}

	togglePlayPause() {
		if (this.track1 && this.track1.isPlaying()) {
			this.track1.pause();
			this.isPlaying = false;
		} else {
			this.track1.play();
			this.isPlaying = true;
		}
	}

	stopTrack() {
		if (this.track1) {
			this.track1.pause();
			this.isPlaying = false;
			this.track1.seekTo(0);
		}
	}

	setVolume(volume: number) {
		if (this.track1) {
			this.track1Volume = volume;
			this.track1.setVolume(volume);
		}
	}
}
