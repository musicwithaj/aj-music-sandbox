import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveSurferSandbox } from './wave-surfer-sandbox';

describe('WavesurferSandbox', () => {
  let component: WaveSurferSandbox;
  let fixture: ComponentFixture<WaveSurferSandbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaveSurferSandbox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaveSurferSandbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
