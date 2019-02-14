import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
  MatInputModule, 
  MatFormFieldModule, 
  MatSelectModule, 
  MatCardModule, 
  MatIconModule,
  MatButtonModule, 
  MatDividerModule, 
  MatAutocompleteModule, 
  MatCheckboxModule } from '@angular/material';

import { CmObjectComponent } from './cm-object/cm-object.component';
import { CmInputComponent } from './cm-input/cm-input.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CmInputAutoComponent } from './cm-input-auto/cm-input-auto.component';
import { CmInputSelectComponent } from './cm-input-select/cm-input-select.component';
import { CmInputStandardComponent } from './cm-input-standard/cm-input-standard.component';
import { CmInputCheckboxComponent } from './cm-input-checkbox/cm-input-checkbox.component';



@NgModule({
  declarations: [
    AppComponent,
    CmObjectComponent,
    CmInputComponent,
    CmInputAutoComponent,
    CmInputSelectComponent,
    CmInputStandardComponent,
    CmInputCheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
