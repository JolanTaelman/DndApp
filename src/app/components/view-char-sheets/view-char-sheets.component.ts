import { Component, OnInit } from '@angular/core';
import {Charsheet} from '../../domain/charsheet/charsheet.module';
import { DndClass } from '../../domain/dnd-class/dnd-class.module';


@Component({
  selector: 'app-view-char-sheets',
  templateUrl: './view-char-sheets.component.html',
  styleUrls: ['./view-char-sheets.component.css']
})
export class ViewCharSheetsComponent implements OnInit {
  private _charsheets = new Array<Charsheet>();
  private _races: ["Human", "Elf","Dwarf"];
  private _classes: DndClass[];


  constructor() { 
    this._classes = [new DndClass("fighter", 10, false, 1), new DndClass("Rogue", 8, false), new DndClass("Wizard", 6, true)];
    let Charsheet1 = new Charsheet('Mark', 'Elf', this._classes[0]);
    let Charsheet2 = new Charsheet('Steve', this._races[2], this._classes[1]);

    this._charsheets.push(Charsheet1);
    this._charsheets.push(Charsheet2);
    }

  ngOnInit() {
  }

}
