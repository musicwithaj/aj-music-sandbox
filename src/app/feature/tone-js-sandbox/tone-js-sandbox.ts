import { Component } from '@angular/core';
import { Synth } from 'tone';

@Component({
	selector: 'tone-js-sandbox',
	imports: [],
	templateUrl: './tone-js-sandbox.html',
	styleUrl: './tone-js-sandbox.scss'
})

export class ToneJsSandbox {
	private synth: Synth = new Synth().toDestination();
	octave: number = 4;

	playNote(note: string) {
		if (!note) { 
			note = 'C4';
		}
		this.synth.triggerAttack(note);
	}

	shiftOctave(direction: number) {
		this.octave += direction;
		if (this.octave < 0) {
			this.octave = 0; // Prevent negative octave
		}
		if (this.octave > 8) {
			this.octave = 8; // Limit to a maximum octave
		}
	}

	endNote() {
		this.synth.triggerRelease();
	}
}
