import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NexusUiSandbox } from './nexus-ui-sandbox';

describe('NexusUiSandbox', () => {
	let component: NexusUiSandbox;
	let fixture: ComponentFixture<NexusUiSandbox>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [NexusUiSandbox]
		})
		.compileComponents();

		fixture = TestBed.createComponent(NexusUiSandbox);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
