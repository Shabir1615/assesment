import { Component } from '@angular/core';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss']
})
export class UserListingComponent {
  public userData:any = []
  public test;
  public totalItems;

  ngOnInit(){
    // this.userData.push( localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : '');
    // console.log(this.userData)

    // Get the total number of items in localStorage
// const totalItems = localStorage.length;
this.totalItems = localStorage.length;

// Loop through all items and retrieve their keys and values
// for (let i = 0; i < totalItems; i++) {
  for (let i = 0; i < this.totalItems; i++){
  const key = localStorage.key(i);
  this.userData.push( localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : '');

}

}

  onFileSelected(event: any, email:string) {
    if (event.target.files.length > 0) {
      for( var i=0;i<this.totalItems; i++){
        if(this.userData[i].email== email){
          const file = event.target.files[0];
          this.userData[i].image = URL.createObjectURL(file);
        }

      }

      
    }
  }

}
