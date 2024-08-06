import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  isPassVisible: boolean = false;
  isPassConfirmVisible: boolean = false;

  public togglePasswd() {
    this.isPassVisible = !this.isPassVisible;
  }

  public togglePasswdConfirm() {
    this.isPassConfirmVisible = !this.isPassConfirmVisible;
  }
}
