import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService,GoogleLoginProvider,FacebookLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:SocialAuthService) { }
public user:any=SocialUser;
public loggedin:any
 
loginForm= new FormGroup({
  users:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
  password:new FormControl('',[Validators.required,Validators.minLength(6)]),
})
loginUser(){
  console.warn(this.loginForm.value);
}
 
get users()
{
  return this.loginForm.get('users')
}
get password(){
  return this.loginForm.get('password')
}



  ngOnInit(): void {
    this.authService.authState.subscribe((user:any)=>{
      this.user=user;
      this.loggedin=(user !=null)
      console.log(user);
    })
  }
  googleloginoptions={scope:'profile email'};
  signinwithgoogle():void{
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID,this.googleloginoptions)
    
  }
  signinwithfacebook():void{
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
  }
  signout(){
    this.authService.signOut()
  }
  refreshtoken(){
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID)
  }
}

