import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DndClass } from '../../domain/dnd-class/dnd-class.module';
import { Charsheet } from '../../domain/charsheet/charsheet.module';

@Component({
  selector: 'app-add-charsheet',
  templateUrl: './add-charsheet.component.html',
  styleUrls: ['./add-charsheet.component.css']
})
export class AddCharsheetComponent implements OnInit {

  @Output() public newCharSheet = new EventEmitter <Charsheet> ();

  races: string[];
  classes: DndClass[];
  

  constructor() { }

  addSheet(name: string, race: string, dndClass: DndClass): boolean {
  const characterSheet = new Charsheet(name, race, dndClass);
  this.newCharSheet.emit(characterSheet);
  return false;    
  }

  ngOnInit() {

    this.classes = [new DndClass("fighter", 10, false, 1), new DndClass("Rogue", 8, false), new DndClass("Wizard", 6, true)];
    this.races = ["Human", "Elf","Dwarf"];
  }

}
