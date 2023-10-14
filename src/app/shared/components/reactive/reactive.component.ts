import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
  genderArray : Array<string> = ["male" , "femail", "other"]
  signInForm !: FormGroup
  constructor() { }

  ngOnInit(): void {
   this.createForm();
   console.log(this.signInForm)
  }

  createForm(){
    this.signInForm= new FormGroup({
      username : new  FormControl (null, [Validators.required, Validators.minLength(7),Validators.maxLength(9)]),
      email : new FormControl (null, [Validators.required]),
      gender : new FormControl(null, [Validators.required]),
      password : new FormControl(null, [Validators.required]),
      confirmpassword :new FormControl(null, [Validators.required])
    })
  }

  signIn(){
    console.log('submitted')
    console.log(this.signInForm.value)
  }

}
