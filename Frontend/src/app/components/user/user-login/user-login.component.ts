import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  userLoginForm: FormGroup = this._fb.group({});
  submitted: boolean = false;
  constructor(
    private _fb: FormBuilder,
    private authService: AuthServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userLoginForm = this._fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  get userName(){
    return this.userLoginForm.controls['userName']
  }

  get password(){
    return this.userLoginForm.controls['password']
  }

  login(){
    this.submitted = true;
    const token = this.authService.authenticateUser(this.userLoginForm.value)
    if(!token){
      alert('User not present!');
    } else {
      localStorage.setItem('token', JSON.stringify(token));
      this.router.navigate(['/']);
    }
  }

}
