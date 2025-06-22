import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { User } from './user/user';

import { DUMMY_USER } from './dummy-user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, User],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'first-angular-app';
  users = DUMMY_USER;
}
