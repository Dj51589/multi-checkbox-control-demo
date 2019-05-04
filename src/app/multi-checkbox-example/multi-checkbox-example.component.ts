import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import * as _ from "lodash";

@Component({
  selector: 'app-multi-checkbox-example',
  templateUrl: './multi-checkbox-example.component.html',
  styleUrls: ['./multi-checkbox-example.component.scss']
})
export class MultiCheckboxExampleComponent implements OnInit {

  constructor() { }
  personForm: FormGroup;
  selectedHobbiesNames: [string];
  myhobbies: any = [
    {
      name: "Sports",
      value: "sports"
    },
    {
      name: "Music",
      value: "music",
      selected: true
    },
    {
      name: "Movie",
      value: "movie",
      selected: true
    },
    {
      name: "Reading",
      value: "reading"
    },
    {
      name: "Writing",
      value: "writing"
    }
  ];

  ngOnInit() {
    this.createFormInputs();
  }

  createFormInputs() {
    this.personForm = new FormGroup({
      hobbies: this.createHobbies(this.myhobbies)
    });
    this.getSelectedHobbies();
  }

  createHobbies(hobbiesInputs) {
    const arr = hobbiesInputs.map(hobby => {
      return new FormControl(hobby.selected || false);
    });
    return new FormArray(arr);
  }

  getSelectedHobbies() {
    this.selectedHobbiesNames = _.map(
      this.personForm.controls.hobbies["controls"],
      (hobby, i) => {
        return hobby.value && this.myhobbies[i].value;
      }
    );
    this.getSelectedHobbiesName();
  }

  getSelectedHobbiesName() {
    this.selectedHobbiesNames = _.filter(
      this.selectedHobbiesNames,
      function(hobby) {
        if (hobby !== false) {
          return hobby;
        }
      }
    );
  }
}
