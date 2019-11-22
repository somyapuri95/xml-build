import { Component, OnInit } from '@angular/core';
//particular component view for a given URL.
import { Router } from '@angular/router';
//angular forms requirements
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//user model
import { User } from '../models/user';
//user api service file
import { UserService } from '../services/user.service';


//decorator
@Component({
  selector: 'nmdx-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user: User = new User();
  isProcessing: boolean;
  loginForm: FormGroup
  //prepare the creation of a new instance of the class
  constructor(private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router) { 

      this.isProcessing = false;
      this.initForm();

    }

     initForm() {
      this.loginForm = this.formBuilder.group({
        password: ['', [Validators.required]],
        username: ['', [Validators.required]],
      })
    }
    //login function call sigin user account
    login() {
      this.isProcessing = true;
      this.userService.singIn(this.loginForm.value).then((data) => {
        this.isProcessing = false;
        window.localStorage.setItem('token', data.token);
        window.localStorage.setItem('user', JSON.stringify(data));
        this.router.navigate(['/pages']);
      }).catch(e => {
        this.isProcessing = false;
        alert(e);
      })
    }
  ngOnInit() {
  }

}
