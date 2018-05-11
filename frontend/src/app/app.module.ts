import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { CharSheetComponent } from './components/char-sheet/char-sheet.component';
import { ViewCharSheetsComponent } from './components/view-char-sheets/view-char-sheets.component';
import { AddCharsheetComponent } from './components/add-charsheet/add-charsheet.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing/app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    CharSheetComponent,
    ViewCharSheetsComponent,
    AddCharsheetComponent,
    PageNotFoundComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
        ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
