import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  isPassVisible: boolean = false;
  isPassConfirmVisible: boolean = false;

  public togglePasswd() {
    this.isPassVisible = !this.isPassVisible;
  }

  public togglePasswdConfirm() {
    this.isPassVisible = !this.isPassVisible;
  }
}
