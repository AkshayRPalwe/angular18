import { Component, computed, input, Input, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  avatar = input.required<string>(); // signal
  name = input.required<string>();

  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }

  imagePath = computed(()=>{
    return 'assets/users/' + this.avatar();
  })

  onSelectUser() {
    this.avatar.set()
  }
}
