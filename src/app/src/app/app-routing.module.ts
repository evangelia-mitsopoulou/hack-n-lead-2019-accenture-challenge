import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScenariodetailviewComponent } from './components/scenariodetailview/scenariodetailview.component';
import { LearningGoalComponentComponent } from './components/learning-goal-component/learning-goal-component.component';



const routes: Routes = [
  {path: '', component: LearningGoalComponentComponent},
  { path: 'scenario-view', component: ScenariodetailviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
