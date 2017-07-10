import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-pripara',
  templateUrl: './pripara.component.html',
  styleUrls: ['./pripara.component.css']
})
export class PriparaComponent {

  sbFG = new FormGroup({});

  formErrors = {
    name: '',
    email: ''
  };

  // Can't change the name minlength,maxlength,email
  // Since the names are from FormControl.error (Validator names)
  validationMsg = {
    name: {
      required: 'Name: no empty',
      minlength: 'Name: at least 4 chars',
      maxlength: 'Name: at most 8 chars'
    },
    email: {
      required: 'Email: no empty',
      email: 'Email: wrong format'
    }
  };

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    let nameCtrl = new FormControl('sb', [Validators.required, Validators.maxLength(8), Validators.minLength(4)]);
    let emailCtrl = new FormControl('', [Validators.required, Validators.email]);

    this.sbFG.addControl('name', nameCtrl); // My way is better than offical docs
    this.sbFG.addControl('email', emailCtrl);

    console.log('sbFG FormGroup: ', this.sbFG);
    this.sbFG.valueChanges.subscribe(data => this.checkForm(data)); //onValueChanged
    this.checkForm(); // (re)set validation messages now


    const obj1 = { h1: 'aaa', h2: 'bbb' };
    const obj2 = { h2: 'bbb', h1: 'aaa' };
    const obj3 = null;
    const obj4 = [1,2,3];
    const obj5 = [1,2,3];
    let eqr = _.isEqual(obj1, obj2);
    // let dif = _.diff(obj1, obj2);
    console.log('aaa:', _.isEqual(obj1, obj2));
    console.log('bbb:', _.isEqual(obj3, obj2));
    console.log('ccc:', _.isEqual(obj4, obj5));

  }

  checkForm(data?: any) {
    if (!this.sbFG) {
      return;
    }

    const form = this.sbFG;
    for (let field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';

      // check for new error message
      let ct = form.get(field);
      if (ct && ct.dirty && !ct.valid) {
        const msg = this.validationMsg[field];
        //console.log('msg: ', msg);
        //console.log('ct.errors', ct.errors);

        for (const key in ct.errors) {
          this.formErrors[field] += msg[key] + ' ';
        }
      }

    }
  }

  doSubmit() {
    confirm('Here we go');
  }

}



