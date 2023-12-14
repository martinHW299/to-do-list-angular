import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';


  constructor(private router: Router) {}

  onSubmit(){
    if (this.username==='martin' && this.password==='123'){
      this.router.navigate(['/todo'])
    }else{
      this.router.navigate([''])
    }
  }

  ngOnInit(): void {
  }

}
