import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineDiagramComponent } from './line-diagram.component';

describe('LineDiagramComponent', () => {
  let component: LineDiagramComponent;
  let fixture: ComponentFixture<LineDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineDiagramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
