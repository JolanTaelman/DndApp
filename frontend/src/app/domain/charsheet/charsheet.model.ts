/*import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";*/
import { Spell } from "../spell/spell.model";
import { DndClass } from "../dnd-class/dnd-class.model";

export enum RaceType {
  Human,
  Elf,
  Dwarf
}
/*
@NgModule({
  imports: [CommonModule],
  declarations: []
})*/

export class Charsheet {
  private _id: string;
  private _name: string;
  private _race: RaceType;
  private _dndclass: DndClass;
  private _spells: Spell[];

  constructor(
    name: string,
    race: RaceType,
    dndclass: DndClass,
    spells?: Spell[]
  ) {
    this._name = name;
    this._race = race;
    this._dndclass = dndclass;
    this._spells = spells || new Array();
  }

  get id(){
    return this._id;

  }

 setid(id: string){
   this._id = id;
 }

  get dndclass(): DndClass {
    return this._dndclass;
  }

  get race() {
    return this._race;
  }

  get name() {
    return this._name;
  }

  get spells(): Spell[] {
    return this._spells;
  }

  addSpell(spell: Spell) {
    this._spells.push(spell);
  }

  set dndclass(dndclass: DndClass) {
    this._dndclass = dndclass;
  }

  set race(race: RaceType) {
    this._race = race;
  }
  set name(name: string) {
    this._name = name;
  }
  toJSON() {
    return {
      _id: this._id,
      name: this._name,
      race: this._race,

      dndclass: this._dndclass.toJSON(),
      hitdice: this._dndclass.hitDice,
      spellcaster: this._dndclass.spellcaster,
      level: this._dndclass.level,

      spells: this._spells.map(spell => spell.toJSON())
    };
  }
}
