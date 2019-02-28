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
  MatCheckboxModule,
  MatSidenavModule } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CmObjectComponent } from './objects/cm-object/cm-object.component';
import { CmInputComponent } from './objects/cm-input/cm-input.component';
import { CmInputAutoComponent } from './objects/cm-input-auto/cm-input-auto.component';
import { CmInputSelectComponent } from './objects/cm-input-select/cm-input-select.component';
import { CmInputStandardComponent } from './objects/cm-input-standard/cm-input-standard.component';
import { CmInputCheckboxComponent } from './objects/cm-input-checkbox/cm-input-checkbox.component';
import { CmCatalogComponent } from './intervals/cm-catalog/cm-catalog.component';
import { CmSearchComponent } from './intervals/cm-search/cm-search.component';
import { CmIntervalComponent } from './intervals/cm-interval/cm-interval.component';
import { CmIntervalEditorComponent } from './intervals/cm-interval-editor/cm-interval-editor.component';
import { CmSearchResultsComponent } from './intervals/cm-search-results/cm-search-results.component';


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
import { CmObjectNodeTypeClassTestsDisplayComponent } from './tests/cm-object-nodetype-class-tests-display.component';
import { CmObjectNodeTypeInterfaceTestsDisplayComponent } from './tests/cm-object-nodetype-interface-tests-display.component';
import { CmCatalogTestsDataComponent } from './tests/cm-catalog-tests-data.component';
import {CmInputAutoTestsComponent} from './tests/cm-input-auto-tests.component';

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
    CmIntervalComponent,
    CmIntervalEditorComponent,
    CmSearchResultsComponent,

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
    CmObjectNodeTypeClassTestsDisplayComponent,
    CmObjectNodeTypeInterfaceTestsDisplayComponent,
    CmCatalogTestsDataComponent,
    CmInputAutoTestsComponent
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
    MatCheckboxModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
