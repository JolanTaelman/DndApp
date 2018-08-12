import { Component, OnInit } from "@angular/core";
import { Charsheet } from "../../domain/charsheet/charsheet.model";
import { DndClass } from "../../domain/dnd-class/dnd-class.model";
import { SheetDataService } from "../../services/sheet-data-service/sheet-data.service";

@Component({
  selector: "app-view-char-sheets",
  templateUrl: "./view-char-sheets.component.html",
  styleUrls: ["./view-char-sheets.component.css"],
  providers: [SheetDataService]
})
export class ViewCharSheetsComponent implements OnInit {
  public _charsheets: Charsheet[];

  get charsheets() {
    return this._charsheets;
  }

  constructor(private _sheetDataService: SheetDataService) {

  }

  ngOnInit() {
    this._sheetDataService.charsheets.subscribe(
      items => this._charsheets = items);  }

  removeSheet(charsheet: Charsheet){
        this._sheetDataService.removeSheet(charsheet).subscribe();
        location.reload();
      }
}
