import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatCardModule,MatInputModule,MatFormFieldModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PersonalComponent } from './personal/personal.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PersonalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
