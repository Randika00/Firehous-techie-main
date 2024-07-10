import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
user:User = { username: '',password:''};

   constructor(
    private router:Router,
    private userService :UserService
   ){}

   register(){
    this.userService.register(this.user).subscribe(()=>{
      this.router.navigateByUrl('/')
    });
   }
}
