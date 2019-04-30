import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component'
import { MenuComponent } from './menu/menu.component'
import { HomeComponent } from './home/home.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'
const routes: Routes = [
{
	path: '', redirectTo: '/home', pathMatch: 'full'
},
{
	path: 'menu', component: MenuComponent
},
{
	path: 'signup', component: SignupComponent
},
{
	path: 'menu', component: MenuComponent
},
{
	path: 'home', component: HomeComponent
},{
	path: '**', component: PagenotfoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
