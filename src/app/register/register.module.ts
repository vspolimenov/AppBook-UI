import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RegisterComponent} from './register.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RegisterService} from './register.service';
@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    RegisterComponent
  ],
  providers: [RegisterService],
})
export class RegisterModule { }
