import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordEncryptionService } from 'src/app/password-encryption.service';  // Ajusta la ruta según tu estructura de archivos

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
    private passwordEncryptionService: PasswordEncryptionService
  ) {}

  async onSubmit() {
    const hashedPassword = await this.passwordEncryptionService.encryptPassword(this.password);

    if (this.username === 'martin' && await this.passwordEncryptionService.comparePassword('123', hashedPassword)) {
      this.router.navigate(['/todo-list']);
    } else {
      this.loginError = true;
    }
  }

  ngOnInit(): void {
  }
}
