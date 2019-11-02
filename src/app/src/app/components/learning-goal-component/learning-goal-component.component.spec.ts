import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningGoalComponentComponent } from './learning-goal-component.component';

describe('LearningGoalComponentComponent', () => {
  let component: LearningGoalComponentComponent;
  let fixture: ComponentFixture<LearningGoalComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningGoalComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningGoalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
