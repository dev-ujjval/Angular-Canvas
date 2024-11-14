import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasAdvancedComponent } from './canvas-advanced.component';

describe('CanvasAdvancedComponent', () => {
  let component: CanvasAdvancedComponent;
  let fixture: ComponentFixture<CanvasAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanvasAdvancedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanvasAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
