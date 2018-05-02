import { Injectable } from '@angular/core';
import { Charsheet } from '../../domain/charsheet/charsheet.module';
import { DndClass } from '../../domain/dnd-class/dnd-class.module';


@Injectable()
export class SheetDataService {

  public _charsheets = new Array<Charsheet>();

  get charsheets(): Charsheet[]{
    return this._charsheets;

  }
  
  newSheetAdded(Charsheet){
    this._charsheets.push(Charsheet);

  }

  constructor() {    
    let Charsheet1 = new Charsheet('Mark', 'Elf', new DndClass("fighter", 10, false, 1));
    let Charsheet2 = new Charsheet('Steve', 'Human', new DndClass("Rogue", 8, false));

    this._charsheets.push(Charsheet1);
    this._charsheets.push(Charsheet2);
    }
}
