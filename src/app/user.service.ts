import { Injectable } from '@angular/core';
import { users } from './Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
public user:users[]=[
  {
    userId:101,
    firstName:"Jeya",
    lastName:"Reshma A",
    email:"jeyareshma30@gmail.com",
    mobile:8940047096
},
{
  userId:102,
  firstName:"Jeni",
  lastName:"Reshman A",
  email:"jeyareshman29@gmail.com",
  mobile:8940047890
},

]
  constructor() { }
}
