import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:User = { username: '',password:''};

   constructor(
    private router:Router,
    private userService :UserService
   ){}

   login(){
    this.userService.login(this.user).subscribe(()=>{
      this.router.navigateByUrl('/bookmarks')
    });
   }

}
