import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScenariodetailviewComponent } from './components/scenariodetailview/scenariodetailview.component';
import { LearningGoalComponentComponent } from './components/learning-goal-component/learning-goal-component.component';
import { StatisticsComponent } from './components/statistics/statistics.component';


const routes: Routes = [
  {path: '', component: LearningGoalComponentComponent},
  { path: 'scenario-view', component: ScenariodetailviewComponent },
  { path: 'statistics-view', component: StatisticsComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
