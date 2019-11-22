import { Component, OnInit } from '@angular/core';
//bottam sheet angular material import
import { MatBottomSheetRef } from '@angular/material';
//user model
import { User } from '../../models/user';
//user api service file
import { UserService } from '../../services/user.service';
//decorator
@Component({
  selector: 'nmdx-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {

  user: User;
  password: string;
  confirmPassword: string;
  isProcessing: boolean = false;
  error: string;
  hide: boolean = true;
  success:string = '';
//prepare the creation of a new instance of the class
  constructor(private bottomSheetRef: MatBottomSheetRef<ChangePassComponent>, private userService: UserService) {
    this.user = JSON.parse(localStorage.getItem('user')) as User;
  }
//changePass function update password
  changePass() {
    if (!this.password) {
      return alert('Please enter Password')
    }
    if (!this.confirmPassword) {
      return alert('Please enter confrim Password')
    }
    if (this.password != this.confirmPassword) {
      return alert('Password and confrim Password Should be same')
    }
    this.isProcessing = true;
    this.error = '';
    this.success = '';
    this.userService.api.update(this.user.id, { password: this.password } as User).then(() => {
      this.isProcessing = false;
      this.success = 'Password has been changed successfully';
      this.closeBottomSheet();

    }).catch(err => {
      this.error = err;
      this.isProcessing = false;
      this.closeBottomSheet();
    });

  }

  closeBottomSheet() {
    this.bottomSheetRef.dismiss();
  }

  ngOnInit() {
  }

}
