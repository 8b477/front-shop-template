import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  isPassVisible: boolean = false;

  public togglePasswd() {
    this.isPassVisible = !this.isPassVisible;
  }
}
