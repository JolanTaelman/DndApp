import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CharSheetComponent } from './components/char-sheet/char-sheet.component';
import { ViewCharSheetsComponent } from './components/view-char-sheets/view-char-sheets.component';
import { AddCharsheetComponent } from './components/add-charsheet/add-charsheet.component';


@NgModule({
  declarations: [
    AppComponent,
    CharSheetComponent,
    ViewCharSheetsComponent,
    AddCharsheetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
