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
  //private _dndclass: DndClass;
  private _dndclass: string;
  private _hitDice: number;
  private _spellcaster: boolean;

  private _level: number;

  

  private _spells: Spell[];

  constructor(
    name: string,
    race: string,
    dndclass: string,
    hitDice: number,
    spellcaster: boolean,
    level: number,
    spells?: Spell[]
  ) {
    this._name = name;
    this._race = race;
    //this._dndclass = dndclass;
   this._dndclass = dndclass;
   this._hitDice = hitDice;
   this._spellcaster = spellcaster;
   this._level = level;
    
    this._spells = spells || new Array();
  }

  static fromJSON(json: any) {
    const charSh = new Charsheet(
      json.name,
      json.race,
      json.dndclass,
      json.hitDice,
      json.spellcaster,
      json.level,
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

      //dndclass: this._dndclass.toJSON(),
      dndclass: this._dndclass,
      hitDice: this._hitDice,
      spellcaster: this._spellcaster,
      level: this._level,

      spells: this._spells.map(spell => spell.toJSON())
    };
  }

  get id() {
    return this._id;
  }

  setid(id: string) {
    this._id = id;
  }

  get dndclass(): string {
    return this._dndclass;
  }

  get race() {
    return this._race;
  }

  get name() {
    return this._name;
  }
  get hitDice() {
    return this._hitDice;
  }
  public get level() {
    return this._level;
  }

  public get spellcaster(): boolean {
    return this._spellcaster;
  }
  public set spellcaster(value: boolean) {
    this._spellcaster = value;
  }

  get spells(): Spell[] {
    return this._spells;
  }

  addSpell(spell: Spell) {
    this._spells.push(spell);
  }

  set dndclass(dndclass: string) {
    this._dndclass = dndclass;
  }

  set race(race: string) {
    this._race = race;
  }

  set name(name: string) {
    this._name = name;
  }
 
  set hitDice(value: number) {
    this._hitDice = value;
  }

  public set level(value: number) {
    this._level = value;
  }
}
