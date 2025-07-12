import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { RegisterCreds } from '../../../types/user';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
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
