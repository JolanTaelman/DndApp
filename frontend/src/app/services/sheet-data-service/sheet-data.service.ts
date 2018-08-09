import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";

import { Charsheet } from "../../domain/charsheet/charsheet.model";
import { DndClass } from "../../domain/dnd-class/dnd-class.model";
import { Spell } from "../../domain/spell/spell.model";

@Injectable()
export class SheetDataService {
  private readonly _appUrl = "/API";

  get charsheets(): Observable<Charsheet[]> {
    return this.http
      .get(`${this._appUrl}/charsheets`)
      .pipe(
        map((list: any[]): Charsheet[] =>
          list.map(
            item =>
              new Charsheet(
                item.name,
                item.race,
                new DndClass(
                  item.dndClass,
                  item.hitdice,
                  item.spellcaster,
                  item.level
                )
              )
          )
        )
      );
  }

  addNewSheet(Charsheet): Observable<Charsheet> {
    return this.http
      .post(`${this._appUrl}/charsheets/`, Charsheet)
      .pipe(
        map(
          (item: any): Charsheet =>
            new Charsheet(
              item.name,
              item.race,
              new DndClass(
                item.dndClass,
                item.hitdice,
                item.spellcaster,
                item.level
              )
            )
        )
      );
  }

  addSpellToCharsheet(spell: Spell, charsheet: Charsheet): Observable<Spell> {
    const theUrl = `${this._appUrl}/charsheet/${charsheet.id}/spells`;
    return this.http.post(theUrl, spell).pipe(map(Spell.fromJSON));
  }

  getCharsheet(id: string): Observable<Charsheet> {
    return this.http
      .get(`${this._appUrl}/charsheet/${id}`)
      .pipe(map(Charsheet.fromJSON));
  }

  constructor(private http: HttpClient) {}
}
