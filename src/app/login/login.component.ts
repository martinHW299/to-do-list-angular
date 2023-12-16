import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordEncryptionService } from 'src/app/password-encryption.service';  // Ajusta la ruta según tu estructura de archivos
import { User } from '../user.interface';
import { USERS } from '../mock-users';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(
    private router: Router,
    private passwordEncryptionService: PasswordEncryptionService,
    private authService: AuthService
  ) {}

  async onSubmit() {

    const user = USERS.find(u=>u.name===this.username);

    if (user && await this.passwordEncryptionService.comparePassword(this.password, user.pass)) {
      this.authService.login();
      this.router.navigate(['/todo-list']);
    } else {
      this.loginError = true;
    }
  }

  ngOnInit(): void {
    if (this,this.authService.isAuthenticatedUser()) {
      this.router.navigate(['/todo-list']);
    }
  }
}
