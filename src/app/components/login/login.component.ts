import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
// import {CustomValidators} from "../validators/custom.validators";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup = new FormGroup(
    {'creds': new FormGroup(

        {
          'email': new FormControl('', [Validators.email, Validators.required]),
          'password': new FormControl('', [Validators.required])
        }
      )}
  );

  get email() {
    return this.loginForm.get('email')
  }

  constructor() { }

  ngOnInit(): void {
  }

  performLogin(){
    console.log(this.loginForm);
    console.log(this.loginForm.value);
  }

}
