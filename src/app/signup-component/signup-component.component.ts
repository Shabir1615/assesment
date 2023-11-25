import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.scss'],
})
export class SignupComponentComponent {
  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private route:Router) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: this.passwordMatchValidator,
      }
    );
  }

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;

    return password === confirmPassword ? null : { equalTo: true };
  }

  onSignup() {
    console.log(this.signupForm)
    if (this.signupForm.valid) {
      const signupData = this.signupForm.value;
      // Perform signup logic here using signupData
      this.route.navigateByUrl("/login")
      console.log('Signup Data:', signupData);
      localStorage.setItem(signupData.email, JSON.stringify(signupData));

    } else {
      // Handle form validation errors or display messages
      console.log('Form has validation errors');
    }
  }
  
}
