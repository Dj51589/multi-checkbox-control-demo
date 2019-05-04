import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import * as _ from "lodash";

@Component({
  selector: 'app-multi-checkbox-example',
  templateUrl: './multi-checkbox-example.component.html',
  styleUrls: ['./multi-checkbox-example.component.scss']
})
export class MultiCheckboxExampleComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  personForm: FormGroup;
  selectedHobbies: [string];
  myhobbies: any = [
    {
      name: "Sports",
      value: "sports"
    },
    {
      name: "Music",
      value: "music"
    },
    {
      name: "Movie",
      value: "movie"
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
    this.setFormInputs();
  }

  createFormInputs() {
    this.personForm = this.fb.group({
      hobbies: this.createHobbies(this.myhobbies)
    });
    this.getSelectedHobbies();
  }

  createHobbies(hobbiesInputs) {
    const arr = hobbiesInputs.map(hobby => {
      return this.fb.control(hobby.selected || false);
    });
    return this.fb.array(arr);
  }

  getSelectedHobbies() {
    this.selectedHobbies = _.map(this.personForm.controls.hobbies['controls'], (hobby, i) => {
      return hobby.value && this.myhobbies[i].value;
    });
    this.selectedHobbies = _.filter(this.selectedHobbies, function (hobby) {
      if (hobby !== false) {
        return hobby;
      }
    });
  }

  setFormInputs() {
    const updatedHobbiesList: any = [{
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
      }];
    this.personForm.controls.hobbies = this.createHobbies(updatedHobbiesList);
    this.getSelectedHobbies();
  }
}
