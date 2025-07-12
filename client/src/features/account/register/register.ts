import { Component, inject, input, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { RegisterCreds, User } from '../../../types/user';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  membersFromHome = input.required<User[]>();
  protected creds = {} as RegisterCreds;
  protected registerMode = signal(false);

  register() {
    console.log(this.creds);
  }

  cancel() {
    this.registerMode.set(false);
  }

  // protected registerForm = new FormGroup({
  //   displayName: new FormControl('', [Validators.required]),
  //   username: new FormControl('', [Validators.required]),
  //   password: new FormControl('', [Validators.required]),
  // });
}
