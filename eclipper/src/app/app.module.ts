import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { ServiceComponent } from './home/services/service.component';
import { NavbarComponent } from './home/navibar/navbar.component';
import { TeamMemberComponent } from './home/teammember/teammember.component';
import { CommonHeaderComponent} from './home/commonheader/commonheader.component';

import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TestComponent } from './home/test/test.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ServiceComponent,
    NavbarComponent,
    TeamMemberComponent,
    CommonHeaderComponent,
    MenuComponent,
    SignupComponent,
    HomeComponent,
    PagenotfoundComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
