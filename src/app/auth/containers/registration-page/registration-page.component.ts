import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
  formValue: any;
  userRegistrationForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    lastName: new FormControl(''),
    age: new FormControl('', [Validators.required, this.validateAge(/e/i)]),
  });
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.formValue = this.userRegistrationForm.value;
    console.log(this.userRegistrationForm.value);
  }

  resetForm() {
    this.formValue = {};
  }

  validateAge(ageRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      var forbidden;
      if(control.value > 0 && control.value <= 100 && !ageRe.test(control.value) && Number.isInteger(+control.value)) {
        forbidden = false;
      } else {
        forbidden = true;
      }
      return forbidden ? {'forbiddenName': {value: control.value}} : null;
    };
  }
}
