import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() {}
  registerform=new FormGroup({
  fname: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
  email: new FormControl('',[Validators.required,Validators.email]),
  pwd: new FormControl('',[Validators.required,Validators.minLength(6)]),
})
registerUser()
{
  console.warn(this.registerform.value);
}
get fname()
{
  return this.registerform.get('fname');
}
get email()
{
  return this.registerform.get('email');
}
get pwd()
{
  return this.registerform.get('pwd');
}







  ngOnInit(): void {
  }

}
