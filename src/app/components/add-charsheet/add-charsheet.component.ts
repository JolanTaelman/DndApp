import { Component, OnInit } from '@angular/core';
import { DndClass } from '../../domain/dnd-class/dnd-class.module';

@Component({
  selector: 'app-add-charsheet',
  templateUrl: './add-charsheet.component.html',
  styleUrls: ['./add-charsheet.component.css']
})
export class AddCharsheetComponent implements OnInit {
  races: string[];
  classes: DndClass[];
  

  constructor() { }

  addSheet(name: String, race: String, dndClass: DndClass){

    
  }

  ngOnInit() {

    this.classes = [new DndClass("fighter", 10, false, 1), new DndClass("Rogue", 8, false), new DndClass("Wizard", 6, true)];
    this.races = ["Human", "Elf","Dwarf"];
  }

}
