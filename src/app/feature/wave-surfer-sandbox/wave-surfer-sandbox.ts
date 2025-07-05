import { Component, AfterViewInit, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import WaveSurfer from 'wavesurfer.js';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'wave-surfer-sandbox',
	imports: [FormsModule, CommonModule],
	templateUrl: './wave-surfer-sandbox.html',
	styleUrl: './wave-surfer-sandbox.scss'
})
export class WaveSurferSandbox implements OnInit, AfterViewInit {
	tracks: TrackConfig[] = [];
	isPlaying: boolean = false;

	ngOnInit(): void {
		// Initialize tracks array
		const track1Config = new TrackConfig('/audio/why_oh_why_full.mp3', 'violet', 0);
		const track2Config = new TrackConfig('/audio/why_oh_why_full_old.mp3', 'orange', 1);
		this.tracks.push(track1Config, track2Config);
	}

	ngAfterViewInit(): void {
		this.tracks.forEach(track => track.loadTrack());
		console.log(this.tracks);
	}

	ngOnDestroy(): void {
		this.tracks.forEach(track => {
			if (track.track) {
				track.track.destroy();
			}
		});
		this.tracks = [];
	}

	togglePlayPause() {
		if (this.isPlaying) {
			this.tracks.forEach(track => {
				if (track?.track) {
					track.track.pause();
				}
			});
			this.isPlaying = false;
		} else {
			this.tracks.forEach(track => {
				if (track?.track) {
					track.track.play();
				}
			});
			this.isPlaying = true;
		}
	}

	stopTrack() {
		this.tracks.forEach(track => {
			if (track?.track) {
				track.track.stop();
				track.track.seekTo(0);
			}
		});
		this.isPlaying = false;
	}

	setVolume(volume: number, index: number) {
		const track = this.tracks[index];
		if (track?.track) {
			track.volume = volume;
			track.track.setVolume(volume);
		}
	}
}

export class TrackConfig {
	track: WaveSurfer;
	volume: number = 1;
	color: string;
	index: number;
	url: string;

	constructor(url: string, color: string, index: number) {
		this.url = url;
		this.color = color;
		this.index = index;
	}

	loadTrack() {
		this.track = WaveSurfer.create({
			container: `#waveform-${this.index}`,
			waveColor: this.color,
			progressColor: 'purple',
			barWidth: 3,
			barGap: 2,
			barRadius: 4,
		});
		this.track.load(this.url);
	}
}