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

import { LearningGoalComponentComponent } from './components/learning-goal-component/learning-goal-component.component';
import { SourcesToolbarComponent } from './components/sources-toolbar/sources-toolbar.component';
import { ScenariodetailviewComponent } from './components/scenariodetailview/scenariodetailview.component';

@NgModule({
  declarations: [
    AppComponent,
    LearningGoalComponentComponent,
    SourcesToolbarComponent,
    ScenariodetailviewComponent
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
    MatSidenavModule
  ],
  exports:[LearningGoalComponentComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
