import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  // signupForm: FormGroup;
  students: any[] = [];
  constructor(StudentService: StudentService) {
    StudentService.getAll().subscribe((data: any) => {
      console.log(data);
      
    });
  }

  ngOnInit() {}

  signupForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.min(3)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    lastName: new FormControl('', [Validators.min(3)]),
  });
  onSubmit() {
    console.log(this.signupForm.value);

    //
  }
}
