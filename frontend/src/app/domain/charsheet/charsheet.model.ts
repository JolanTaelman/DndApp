/*import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";*/
import { Spell } from "../spell/spell.model";
import { DndClass } from "../dnd-class/dnd-class.model";


/*
@NgModule({
  imports: [CommonModule],
  declarations: []
})*/

export class Charsheet {
  private _id: string;
  private _name: string;
  private _race: string;
  private _dndclass: DndClass;
  private _spells: Spell[];

  constructor(
    name: string,
    race: string,
    dndclass: DndClass,
    spells?: Spell[]
  ) {
    this._name = name;
    this._race = race;
    this._dndclass = dndclass;
    this._spells = spells || new Array();
  }

  static fromJSON(json: any) {
    const charSh = new Charsheet(
      json.name,
      json.race,
      DndClass.fromJSON(json.dndclass),
      json.spells.map(Spell.fromJSON)
    );
    charSh._id = json._id;
    return charSh;
  }

  toJSON() {
    return {
      _id: this._id,
      name: this._name,
      race: this._race,

      dndclass: this._dndclass.toJSON(),
      //hitdice: this._dndclass.hitDice,
      //spellcaster: this._dndclass.spellcaster,
      //level: this._dndclass.level,

      spells: this._spells.map(spell => spell.toJSON())
    };
  }

  get id() {
    return this._id;
  }

  setid(id: string) {
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

  set race(race: string) {
    this._race = race;
  }
  set name(name: string) {
    this._name = name;
  }
 
}
