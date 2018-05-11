import { Injectable } from '@angular/core';
import { Charsheet } from '../domain/charsheet/charsheet.model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SheetDataService } from './sheet-data-service/sheet-data.service';

@Injectable()
export class CharsheetResolver implements Resolve<Charsheet> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Charsheet> {
      return this._sheetDataService.getCharsheet(route.params['id']);
  }
  constructor(private _sheetDataService: SheetDataService) { }

  
}
