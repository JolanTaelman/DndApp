import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";
import { ViewCharSheetsComponent } from "../components/view-char-sheets/view-char-sheets.component";
import { AddCharsheetComponent } from "../components/add-charsheet/add-charsheet.component";
import { PageNotFoundComponent } from "../components/page-not-found/page-not-found.component";
import { CharSheetComponent } from "../components/char-sheet/char-sheet.component";
import { CharsheetResolver } from "../services/charsheet-resolver.service";
import {AuthGuardService} from "../user/auth-guard.service"

const appRoutes: Routes = [
  { path: "list", component: ViewCharSheetsComponent , canActivate: [AuthGuardService] },
  { path: "add", component: AddCharsheetComponent },
  {
    path: ":id",
    component: CharSheetComponent,
    resolve: { charsheet: CharsheetResolver }
  },
  { path: "", redirectTo: "list", pathMatch: "full" },

  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  declarations: [],
  providers: [CharsheetResolver, AuthGuardService],
  exports: [RouterModule]
})
export class AppRoutingModule {}
