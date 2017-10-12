import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';
import { RegisterModule } from './register/register.module';
import {HomeModule} from './home/home.module';
import { RedirectService } from './shared/redirect.service';
@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    LoginModule,
    AppRoutingModule,
    RegisterModule,
    HomeModule,
  ],
  providers: [RedirectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
