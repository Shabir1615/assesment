import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent {
  loginForm: FormGroup;
  generatedPassword:string='';
  show = false
  public userData = [];

  constructor(private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.userData.push(localStorage.getItem(this.loginForm.value.email) ? JSON.parse(localStorage.getItem(this.loginForm.value.email)) : '')    
    const login = this.userData.some(user => user.email === this.loginForm.value.email && user.password === this.loginForm.value.password)        
    if (this.loginForm.valid) {
      console.log('Login data:', this.loginForm.value);
    } else {
      console.log('Form has validation errors');
    }
    this.loginForm.controls['password'].setErrors({'incorrect':true})  
    if(login){
      this.router.navigateByUrl('/users')
    }
    else{

    }
  }

  generateRandomPassword() {
    this.show = true
    const randomPassword = Math.random().toString(36).substring(2, 17); 
    console.log('Random Password:', randomPassword);
    this.generatedPassword=randomPassword;
    
  }
}
