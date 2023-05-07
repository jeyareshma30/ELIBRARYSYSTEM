import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  public userId: any;
  public firstName: any;
  public lastName:any;
  public email:any;
  public mobile: any;
  usr:any;
  user:any;
  users:any;
  constructor(private routes:ActivatedRoute,private usrServ:UserService){}
  ngOnInit(): void {
    this.usr=this.usrServ.user;
    this.user=this.usr;
const routeParams=this.routes.snapshot.paramMap;
  const userIdFromRoute=Number(routeParams.get('id'));
this.users=this.user.find((users: { userId: number; })=>users.userId==userIdFromRoute);
}
}
