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

	playNote(note: string) {
		if (!note) { 
			note = 'C4';
		}
		this.synth.triggerAttack(note);
	}

	endNote() {
		this.synth.triggerRelease();
	}
}
