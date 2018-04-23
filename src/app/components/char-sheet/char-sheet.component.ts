import { Component, OnInit } from '@angular/core';
import {Charsheet} from '../../domain/charsheet/charsheet.module'
import{DndClass} from '../../domain/dnd-class/dnd-class.module'
import { Spell } from '../../domain/spell/spell.module';


@Component({
  selector: 'app-char-sheet',
  templateUrl: './char-sheet.component.html',
  styleUrls: ['./char-sheet.component.css']
})
export class CharSheetComponent implements OnInit {
  private _charsheet:Charsheet;

  constructor() {    

  }

  ngOnInit() {
    this._charsheet = new Charsheet("Bob", 'Human', new DndClass('Cleric', 10, false));
    this._charsheet.spells = [new Spell("Fireball", "Deal 10d6 damage to everthing in range"), new Spell("Magic Missile", "Fire 3 1d4 bolts of magic.")];
    
  }

}
