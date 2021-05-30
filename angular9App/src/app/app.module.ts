import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ShowFormControlModule } from "ngx-show-form-control";
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ShowFormControlModule.for('dev')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
