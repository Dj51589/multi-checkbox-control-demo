# Multi checkbox Form control- Angular7
Reactive form is very useful and powerful feature of Angular to build forms. It has built-in methods to manage form state and to validate form inputs as well. Form has following building blocks:

FormControl: Individual form Item, maintain status and validation rules.

FormGroup: Collections of FormControl, maintain status for collection of formControl.

FormArray: Array of FormControls.

## Live Demo

https://stackblitz.com/edit/multi-checkbox-form-control-angular7

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Form Element Creation
Include “ReactiveFormsModule” in application to use form element and add “ReactiveFormsModule” in module’s import array. I used it in app.module file.

`import { ReactiveFormsModule } from '@angular/forms'; `

## Create Form Element

First, Create a FormGroup and add properties in FormGroup known as Form control. Each Form control item is known by it’s name. Include FormGroup, FormArray and FormControl form classes in component. We will use it to create form element.

`import { FormGroup, FormControl, FormArray } from "@angular/forms";`

FormControl class is used to create single form item, to create multiple checkbox we need to create FormArray of FormControl. “createHobbies” method is returning FormArray of FormControl type.

FormControl constructor takes initial value of item. Here, I am passing value of selected property of each hobby as values if available else false.

## Render Form Control

PersonForm.hobbies is a FormArray type of control. It holds array of form control that we will use to render checkboxes. But to display label of checkboxes, we will use “myhobbies” variable of component.


## Get value of Checkbox
FormControl has value property that return value of control. To get FormControl’s item value, we need to traverse to that control through formGroup.

`this.personForm.controls.hobbies` -- It will return hobbies control that we have created above.

But hobbies holds multiple form control inside, so we have to reach there and return value. I have created a function that returns values of each hobbies control. Value of checkbox return either true or false. If it is true, it returns name of hobby from “myhobbies” array.

