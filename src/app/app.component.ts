import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'animales';

  constructor(private authSrv:AuthService) {}

  logout() {
    this.authSrv.signOut();
  }

}
