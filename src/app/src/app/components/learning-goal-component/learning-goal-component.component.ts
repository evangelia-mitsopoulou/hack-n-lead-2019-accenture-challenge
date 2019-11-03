import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

export interface StateGroup {
  letter: string;
  names: string[];
}

export interface Scenarios {
  id: string;
  title: string;
  description: string;
  skills: string[]
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

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
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

  scenarios: Scenarios[] = [
    {
      "id": "1",
      "title": "Todo list application ( - web, mobile, native)",
      "description": "Everybody needs a todo list. but why use a standard - make your own and learn to code while doing it! In this scenario you'll Learn to use <learning topic> and apply your knowledge in practice by [helping to] developing a todo list application.",
      "skills": [
        "Frontend development",
        "HTML",
        "Bootstrap",
        "Javascript",
        "Backend set up",
        "nodeJS",
        "graphQL",
        "hosting on <Heroku> platform"
      ]
    },
    {
      "id": "2",
      "title": "Site for managing an association",
      "description": "Managing an association can be complex. We need to keep track of the members, payments and expenses. New members shall be able to apply for a membership, and once approved by the association's board, access private content and connect with other members. In this scenario you'll Learn to use <learning topic> and apply your knowledge in practice by [helping to] developing a todo list application.",
      "skills": [
        "Frontend development",
        "Angular",
        "Backend set up",
        "nodeJS",
        "graphQL",
        "hosting on <Heroku> platform"
      ]
    }
  ]

  ngOnInit() {
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filterGroup(value))
    );
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
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
