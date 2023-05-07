import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  public userId: any;
  public firstName: any;
  public lastName:any;
  public email:any;
  public mobile: any;
  usr:any;
  user:any;
  constructor(private routes:ActivatedRoute,private usrServ:UserService,private dialog :MatDialog){}
    ngOnInit(): void {
      this.usr=this.usrServ.user;
      this.user=this.usr;
  }
  addUser()
  {
    this.usrServ.user.push({
      userId:this.userId,
      firstName:this.firstName,
      lastName:this.lastName,
      email:this.email,
      mobile:this.mobile
    });
    
  }
  deleteUser(index: number)
  {
    const confirmDialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: 'Confirmation',
        message: 'Are you Sure to delete this item? '
      }
    });
    confirmDialog.afterClosed().subscribe((result: boolean) => {
      if (result === true) {
        this.usrServ.user.splice(index,1);
         }
         
    });
  }
    
    onSubmit(user:any){
  
    }
     searchUser='';
  }

  
  
  
  
  
  
  
  

