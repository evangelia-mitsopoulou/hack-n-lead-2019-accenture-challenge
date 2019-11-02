import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-learning-goal-component',
  templateUrl: './learning-goal-component.component.html',
  styleUrls: ['./learning-goal-component.component.scss']
})
export class LearningGoalComponentComponent implements OnInit {

  stateForm: FormGroup = this._formBuilder.group({
    stateGroup: '',
  });

  constructor(private _formBuilder: FormBuilder) { }

  stateGroups: StateGroup[] = [{
    letter: 'Javascript',
    names: ['Asynchronous Programming', 'Objects', 'Debugging']
  }, {
    letter: 'Css',
    names: ['ITCSS', 'Preprocessors', 'Atomic Design']
  }, {
    letter: 'Html',
    names: ['Syntax', 'Geolocation API', "Canvas API"]
  }
];

  stateGroupOptions: Observable<StateGroup[]>;

  ngOnInit() {
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filterGroup(value))
    );
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }

}
