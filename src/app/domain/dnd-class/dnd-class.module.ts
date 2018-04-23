import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class DndClass {   
  name:string;
  hitDice:number;
  level:number;
  spellcaster:boolean;
  constructor(name: string, hitdice : number, spellcaster: boolean, level: number = 1){
    this.spellcaster = spellcaster;
    this.hitDice = hitdice;
    this.name = name;
    this.level = level;
  }

   setLevel(level:number) {
    this.level = level;
  }
}
