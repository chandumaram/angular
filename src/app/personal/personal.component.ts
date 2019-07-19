import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Observable, observable } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  isReadonly = true;
  allUsers: Observable<User[]>;
  userForm: any;
  isDisabled=false;
  isDis=true;

  constructor(private formbulider: FormBuilder, private service: UserService) { }

  ngOnInit() {
    this.userForm = this.formbulider.group({ 
      UserId: ['', [Validators.required]], 
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],  
      DOB: ['', [Validators.required]],  
      Email: ['', [Validators.required]],  
      Village: ['', [Validators.required]],  
      State: ['', [Validators.required]],  
      Country: ['', [Validators.required]],
      FbId: ['', [Validators.required]],
      TwitterId: ['', [Validators.required]],  
    }); 
    this.UserDetails();
  }
  onEdit() {
    this.isReadonly = !this.isReadonly;
    this.isDisabled=!this.isDisabled;
    this.isDis=!this.isDis;
  }
  UserDetails() {
    this.allUsers = this.service.getUser();
  }
  onFormSubmit() {

    const user = this.userForm.value;
    this.update(user);
    this.isReadonly=false;
    this.isDisabled=false;
    this.isDis=true;

  }
  update(user: User) {
    this.service.updateUser(user).subscribe(() => {
      this.UserDetails();
    })
  }

}
