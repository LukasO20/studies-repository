import { Component, EventEmitter, Input, Output } from '@angular/core';

import { type UserInterface } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
  @Input({required: true}) user!: UserInterface;
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/user/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
