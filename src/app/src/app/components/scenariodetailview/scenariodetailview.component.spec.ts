import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenariodetailviewComponent } from './scenariodetailview.component';

describe('ScenariodetailviewComponent', () => {
  let component: ScenariodetailviewComponent;
  let fixture: ComponentFixture<ScenariodetailviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenariodetailviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenariodetailviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
