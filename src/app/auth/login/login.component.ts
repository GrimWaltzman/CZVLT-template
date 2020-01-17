import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthRequestService } from '../auth-request.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData;
  constructor(private fb: FormBuilder,
              private ars: AuthRequestService,
              private router: Router) { }

  ngOnInit() {
    this.userData = this.fb.group({
      userEmail: ['', Validators.required],
      userPassword: ['', Validators.required]
    });
  }

  logInUser(submittedForm){
    let user = {
      email: submittedForm.value.userEmail,
      password: submittedForm.value.userPassword
    }

    this.ars.logInUser(user)
    .subscribe(
      res=>{
        res=>console.log(res)
        localStorage.setItem('token', res.token);
        this.router.navigate(['/main'])
      },
      err=>console.log(err)
    );
  }

}
