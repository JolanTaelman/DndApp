/*import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})

*/
export class DndClass {
  _id: string;
  _name: string;
  _hitDice: number;
  _level: number;
  _spellcaster: boolean;

  constructor(
    name: string,
    hitdice: number,
    spellcaster: boolean,
    level: number = 1
  ) {
    this._spellcaster = spellcaster;
    this._hitDice = hitdice;
    this._name = name;
    this._level = level;
  }

  set id(id: string) {
    this._id = id;
  }

  get if() {
    return this._id;
  }
  set spellcaster(splc: boolean) {
    this._spellcaster = splc;
  }

  set name(name: string) {
    this._name = name;
  }

  set hitDice(hitDice: number) {
    this._hitDice = hitDice;
  }

  set level(level: number) {
    this._level = level;
  }

  static fromJSON(json: any): DndClass {
    const dndclass = new DndClass(
      json.name,
      json.hitDice,
      json.spellcaster,
      json.level
    );
    dndclass._id = json._id;
    return dndclass;
  }

  toJSON() {
    return {
      _id: this._id,
      name: this._name,
      hitdice: this._hitDice,
      level: this._level,
      spellcaster: this._spellcaster
    };
  }
}
