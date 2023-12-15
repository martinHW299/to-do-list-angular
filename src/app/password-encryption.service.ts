import { Injectable } from '@angular/core';
import * as bcrypt from 'bcryptjs';


@Injectable({
  providedIn: 'root'
})
export class PasswordEncryptionService {

  constructor() { }

  encryptPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }

  comparePassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }
}
