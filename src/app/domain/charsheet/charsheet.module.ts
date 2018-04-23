import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Spell} from '../spell/spell.module'
import{DndClass} from '../dnd-class/dnd-class.module'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class Charsheet { 
  name:string;
  race:string;
  dndclass: DndClass;
  spells:Spell[];

  constructor(name:string, race:string, dndclass: DndClass, spells:Spell[] = null){
    this.name = name;
    this.race = race;
    this.dndclass = dndclass;
    this.spells = spells;
  }

}
