import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { CharSheetComponent } from "./components/char-sheet/char-sheet.component";
import { ViewCharSheetsComponent } from "./components/view-char-sheets/view-char-sheets.component";
import { AddCharsheetComponent } from "./components/add-charsheet/add-charsheet.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { httpInterceptorProviders } from "./http-interceptors";
import { SheetDataService } from "./services/sheet-data-service/sheet-data.service";
import { CharsheetResolver } from "./services/charsheet-resolver.service";

import { UserModule } from './user/user.module';
import { AuthenticationService } from "./user/authentication.service";


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
    UserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    ],
  providers: [httpInterceptorProviders, SheetDataService,AuthenticationService, CharsheetResolver],
  bootstrap: [AppComponent]
})
export class AppModule {}
