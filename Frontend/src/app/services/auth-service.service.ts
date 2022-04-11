import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  authenticateUser(user: any){
    let usersArray = [];
    if(localStorage.getItem('users')){
      usersArray = JSON.parse(localStorage.getItem('users') as string);
    }
    return usersArray.find((x: any) => x.userName === user.userName && x.password === user.password);
  }
}
