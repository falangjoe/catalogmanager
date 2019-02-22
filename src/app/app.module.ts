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
import { CmCatalogComponent } from './intervals/cm-catalog/cm-catalog.component';
import { CmSearchComponent } from './intervals/cm-search/cm-search.component';

import { CmInputTestsComponent } from './tests/cm-input-tests.component';
import { CmObjectNodetypeInputTestsComponent } from './tests/cm-object-nodetype-input-tests.component';
import { CmObjectNodetypeClassTestsComponent } from './tests/cm-object-nodetype-class-tests.component';
import { CmObjectNodetypeListTestsComponent } from './tests/cm-object-nodetype-list-tests.component';
import { CmObjectNodetypeListTestsDataComponent } from './tests/cm-object-nodetype-list-tests-data.component';
import { CmObjectNodetypeClassTestsDataComponent } from './tests/cm-object-nodetype-class-tests-data.component';
import { CmObjectNodetypeInterfaceTestsComponent } from './tests/cm-object-nodetype-interface-tests.component';
import { CmObjectNodetypeInterfaceTestsDataComponent } from './tests/cm-object-nodetype-interface-tests-data.component';
import { CmObjectNodetypeDictionaryTestsComponent } from './tests/cm-object-nodetype-dictionary-tests.component';
import { CmObjectNodetypeDictionaryTestsDataComponent } from './tests/cm-object-nodetype-dictionary-tests-data.component';
import { CmObjectNodeTypeClassDisplayTestsComponent } from './tests/cm-object-nodetype-class-display-tests.component';
import { CmObjectNodeTypeInterfaceDisplayTestsComponent } from './tests/cm-object-nodetype-interface-display-tests.component';
import { CmIntervalComponent } from './intervals/cm-interval/cm-interval.component';

@NgModule({
  declarations: [
    AppComponent,
    CmObjectComponent,
    CmInputComponent,
    CmInputAutoComponent,
    CmInputSelectComponent,
    CmInputStandardComponent,
    CmInputCheckboxComponent,
    CmCatalogComponent,
    CmSearchComponent,

    CmInputTestsComponent,
    CmObjectNodetypeInputTestsComponent,
    CmObjectNodetypeClassTestsComponent,
    CmObjectNodetypeListTestsComponent,
    CmObjectNodetypeListTestsDataComponent,
    CmObjectNodetypeClassTestsDataComponent,
    CmObjectNodetypeInterfaceTestsComponent,
    CmObjectNodetypeInterfaceTestsDataComponent,
    CmObjectNodetypeDictionaryTestsComponent,
    CmObjectNodetypeDictionaryTestsDataComponent,
    CmObjectNodeTypeClassDisplayTestsComponent,
    CmObjectNodeTypeInterfaceDisplayTestsComponent,
    CmIntervalComponent,
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
