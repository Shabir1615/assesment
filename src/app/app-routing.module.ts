import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { SignupComponentComponent } from './signup-component/signup-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { AssesmentChatComponent } from './assesment-chat/assesment-chat.component';
import { UserListingComponent } from './user-listing/user-listing.component';

const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponentComponent },
  { path: 'login', component: LoginComponentComponent },
  { path: 'chat', component: AssesmentChatComponent},
  {path:'users',component:UserListingComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
