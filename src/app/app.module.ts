import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material'
import {MatIconModule} from '@angular/material/icon';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {MatInputModule} from '@angular/material';
import {MatDatepickerModule,MatNativeDateModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
FormsModule,
ReactiveFormsModule ,
MatFormFieldModule ,
MatAutocompleteModule,
MatInputModule,
MatChipsModule,
MatIconModule,
MatDatepickerModule,
MatNativeDateModule,
NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
