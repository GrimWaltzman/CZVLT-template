import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { AuthRequestService } from '../auth-request.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private ars: AuthRequestService,
              private router: Router) { }
 
  userData;

  ngOnInit() {
    this.userData = this.fb.group({
      userEmail: ['', Validators.required],
      userPassword: ['', Validators.required]
    });
  }

  registerUser(submittedForm){
    let newUser = {
      email: submittedForm.value.userEmail,
      password: submittedForm.value.userPassword
    }

    this.ars.registerUser(newUser)
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
