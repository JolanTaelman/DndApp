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

  newSheetAdded(Charsheet) {
    this._sheetDataService.addNewSheet(Charsheet)
    .subscribe(item => this._charsheets.push(item));
  }

  constructor(private _sheetDataService: SheetDataService) {
    //this._classes = [new DndClass("fighter", 10, false, 1), new DndClass("Rogue", 8, false), new DndClass("Wizard", 6, true)];
    //this._races = ["Human", "Elf", "Dwarf"];
    //let Charsheet1 = new Charsheet('Mark', 'Elf', this._classes[0]);
    //let Charsheet2 = new Charsheet('Steve', this._races[1], this._classes[1]);
    //this._charsheets.push(Charsheet1);
    //this._charsheets.push(Charsheet2);
  }

  ngOnInit() {
    this._sheetDataService.charsheets.subscribe(
      items => this._charsheets = items);  }
}
