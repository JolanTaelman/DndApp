/*import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})*/
export class Spell { 
  _id: string;
  _name: string;
  _description: string;
  
  constructor(name: string, descr: string){
    this._name = name;
    this._description = descr;
  }  
  
  get id(){
    return this._id;
  }

  get name(){
    return this._name;
  }

  get description(){
    return this._description;
  }

  set id(id: string){
    this._id = id;
  }

  set name(name: string){
    this._name = name;
  }

  set description(description: string){
    this.description = description;
  }

  static fromJSON(json): Spell {
    const spell = new Spell(json.name, json.description);
    spell._id = json._id;
    return spell;
  }

  toJSON(){
    return{
    _id: this._id,
    name: this._name,
    description: this._description
    };
  }
}
