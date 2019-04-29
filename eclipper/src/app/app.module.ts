import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ServiceComponent } from './services/service.component';
import { NavbarComponent } from './navibar/navbar.component';
import { TeamMemberComponent } from './teammember/teammember.component';
import { CommonHeaderComponent} from './commonheader/commonheader.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ServiceComponent,
    NavbarComponent,
    TeamMemberComponent,
    CommonHeaderComponent
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
