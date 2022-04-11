import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  userRegisterForm: FormGroup = this._fb.group({});
  submitted: boolean = false;

  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.userRegisterForm = this._fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(5)]],
      mobile: ['', [Validators.required, Validators.maxLength(10)]]
    }, { validators: this.matchPassword});
  }

  matchPassword(_fg: FormGroup): ValidationErrors | null {
    return _fg.controls['password']?.value === _fg.controls['confirmPassword']?.value? null : { notMatched: true}
  }

  get userName(){
    return this.userRegisterForm.controls['userName'];
  }

  get email(){
    return this.userRegisterForm.controls['email'];
  }

  get password(){
    return this.userRegisterForm.controls['password'];
  }

  get confirmPassword(){
    return this.userRegisterForm.controls['confirmPassword'];
  }

  get mobile(){
    return this.userRegisterForm.controls['mobile'];
  }

  submit(){
    this.submitted = true;
    if(this.userRegisterForm.valid){
      this.addUser(this.userRegisterForm);
      this.userRegisterForm.reset();
      this.submitted = false;
    }
  }

  addUser(userForm: FormGroup){ //username, password
    let users = [];
    if(localStorage.getItem('users')){
      users = JSON.parse(localStorage.getItem('users') as string);
    }
    users.push(userForm.value);
    localStorage.setItem('users', JSON.stringify(users));
  }
}
