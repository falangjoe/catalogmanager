import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmTextBoxComponent } from './cm-text-box/cm-text-box.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatFormFieldModule, MatSelectModule} from '@angular/material';
import { CmObjectComponent } from './cm-object/cm-object.component';
import { CmInputComponent } from './cm-input/cm-input.component';



@NgModule({
  declarations: [
    AppComponent,
    CmTextBoxComponent,
    CmObjectComponent,
    CmInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,

    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
