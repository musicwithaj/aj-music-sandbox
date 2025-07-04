import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToneJsSandbox } from './tone-js-sandbox';

describe('ToneJsSandbox', () => {
  let component: ToneJsSandbox;
  let fixture: ComponentFixture<ToneJsSandbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToneJsSandbox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToneJsSandbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
