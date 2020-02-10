import { Component, OnInit } from '@angular/core';
import { AuthRequestService } from '../auth/auth-request.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggleNav: boolean = false;

  constructor(private _authService: AuthRequestService) { }

  ngOnInit() {
  }

}
