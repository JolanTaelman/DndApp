import { Component, OnInit, Input } from '@angular/core';
import {Charsheet} from '../../domain/charsheet/charsheet.model'
import{DndClass} from '../../domain/dnd-class/dnd-class.model'
import { Spell } from '../../domain/spell/spell.model';
import { ActivatedRoute } from '@angular/router';
import { SheetDataService } from '../../services/sheet-data-service/sheet-data.service';


@Component({
  selector: 'app-char-sheet',
  templateUrl: './char-sheet.component.html',
  styleUrls: ['./char-sheet.component.css']
})
export class CharSheetComponent implements OnInit {
  @Input() public charsheet: Charsheet;

  constructor(private route: ActivatedRoute,  private _sheetDataService: SheetDataService) {    

  }

  ngOnInit() {
   this.route.data.subscribe(item => this.charsheet = item['Charsheet']);
  }



}
