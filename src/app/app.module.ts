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

  import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CmObjectComponent } from './objects/cm-object/cm-object.component';
import { CmInputComponent } from './objects/cm-input/cm-input.component';
import { CmInputAutoComponent } from './objects/cm-input-auto/cm-input-auto.component';
import { CmInputSelectComponent } from './objects/cm-input-select/cm-input-select.component';
import { CmInputStandardComponent } from './objects/cm-input-standard/cm-input-standard.component';
import { CmInputCheckboxComponent } from './objects/cm-input-checkbox/cm-input-checkbox.component';

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
