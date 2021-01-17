import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    passPhrase: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(8)
    ]))
  });

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(): void {
    console.log("Username:", this.userForm.get('userName').value);
    console.log("Email:", this.userForm.get('email').value);
  }
}
