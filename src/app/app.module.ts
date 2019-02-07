import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmTextBoxComponent } from './cm-text-box/cm-text-box.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatFormFieldModule, MatSelectModule, MatCardModule, MatIconModule,MatButtonModule, MatDividerModule, MatAutocompleteModule} from '@angular/material';
import { CmObjectComponent } from './cm-object/cm-object.component';
import { CmInputComponent } from './cm-input/cm-input.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CmInputAutoComponent } from './cm-input-auto/cm-input-auto.component';
import { CmInputTextComponent } from './cm-input-text/cm-input-text.component';



@NgModule({
  declarations: [
    AppComponent,
    CmTextBoxComponent,
    CmObjectComponent,
    CmInputComponent,
    CmInputAutoComponent,
    CmInputTextComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
