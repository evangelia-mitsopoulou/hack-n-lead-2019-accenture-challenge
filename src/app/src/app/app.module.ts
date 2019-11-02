import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { LearningGoalComponentComponent } from './components/learning-goal-component/learning-goal-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LearningGoalComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  exports:[LearningGoalComponentComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
