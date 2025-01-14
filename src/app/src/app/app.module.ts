import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';

import { LearningGoalComponentComponent } from './components/learning-goal-component/learning-goal-component.component';
import { SourcesToolbarComponent } from './components/sources-toolbar/sources-toolbar.component';
import { ScenariodetailviewComponent } from './components/scenariodetailview/scenariodetailview.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    LearningGoalComponentComponent,
    SourcesToolbarComponent,
    ScenariodetailviewComponent,
    TabsComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatGridListModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule
  ],
  exports:[LearningGoalComponentComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
