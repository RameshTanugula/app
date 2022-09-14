import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecideScaleComponent } from './decide-scale.component';

describe('DecideScaleComponent', () => {
  let component: DecideScaleComponent;
  let fixture: ComponentFixture<DecideScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecideScaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecideScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
