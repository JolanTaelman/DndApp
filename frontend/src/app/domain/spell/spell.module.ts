import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class Spell { 
  name: string;
  description: string;
  constructor(name: string, descr: string){
    this.description = descr;
    this.name = name;
  }  
}
