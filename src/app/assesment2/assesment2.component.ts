import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-assesment2',
  templateUrl: './assesment2.component.html',
  styleUrls: ['./assesment2.component.scss']
})
export class Assesment2Component {
  profileForm: FormGroup;
  profileImage: any; 

  constructor(private formBuilder: FormBuilder) { }
  userList:any=[]
  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      name: ['', Validators.required],
      
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      const formData = this.profileForm.value;
      
      console.log('Form Data:', formData);
      this.userList.push({...formData,profileImage:this.profileImage})
      
    } else {
      
      console.log('Form has validation errors');
    }
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.profileImage = URL.createObjectURL(file);
      
    }
  }
}
