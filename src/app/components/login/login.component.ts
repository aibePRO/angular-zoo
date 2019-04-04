import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authSrv: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authSrv.googleLogin();
  }

  logout() {
    this.authSrv.signOut();
  }
}
