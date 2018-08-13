import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Charsheet } from "../../domain/charsheet/charsheet.model";
import { 
   FormGroup,
   FormControl, 
   FormBuilder, 
   FormArray, 
   Validators,
   ValidatorFn,
   RequiredValidator } from "@angular/forms";
import { Spell } from "../../domain/spell/spell.model";
import { debounceTime, distinctUntilChanged, min } from "rxjs/operators";
import { SheetDataService } from "../../services/sheet-data-service/sheet-data.service";
import { HttpErrorResponse } from "@angular/common/http";
import { validateConfig } from "../../../../node_modules/@angular/router/src/config";

@Component({
  selector: "app-add-charsheet",
  templateUrl: "./add-charsheet.component.html",
  styleUrls: ["./add-charsheet.component.css"],
  providers: [SheetDataService]

})
export class AddCharsheetComponent implements OnInit {
  public errorMSG: string;
  public readonly races = ['Elf', 'Human', 'Dwarf'];
  public charsheet: FormGroup;
  public show: boolean = false;
  //@Output() public newCharSheet = new EventEmitter<Charsheet>();

  onSubmit() { 
    const newcharsheet = new Charsheet(
      this.charsheet.value.name,
      this.charsheet.value.race,
      this.charsheet.value.dndclass.classname,
      this.charsheet.value.dndclass.hitdice,
      this.charsheet.value.dndclass.spellcaster,
      this.charsheet.value.dndclass.level);
   
    for (const spl of this.charsheet.value.spells) {
      if (spl.spellname.length > 2) {
        newcharsheet.addSpell(new Spell(spl.spellname, spl.spelldescription));
      }}

    this._sheetDataService.addNewSheet(newcharsheet).subscribe(
      () => {},
      (error: HttpErrorResponse) => {
        this.errorMSG = `Error ${error.status} while adding charsheet for ${newcharsheet.name} : ${error.error}`;
      }
    )

    this.charsheet.reset();
    //this.newCharSheet.emit(newcharsheet);
  }

  constructor(private fb: FormBuilder, private _sheetDataService: SheetDataService) {}

  ngOnInit() {
    this.charsheet = this.fb.group(
      {
      name: ['', [Validators.required, Validators.minLength(1)]],
      dndclass: this.createDndClass(),
      race: ['Elf', Validators.required],
      spells: this.fb.array([this.createSpells()])
    } 
  );

    this.spells.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe(spellList => {
        const lastElement = spellList[spellList.length - 1];
        if (lastElement.spellname && lastElement.spellname.length > 2) {
          this.spells.push(this.createSpells());
        } else if (spellList.length >= 2) {
          const secondToLast = spellList[spellList.length - 2];
          if (
            !lastElement.spellname &&
            !lastElement.spelldescription &&
            (!secondToLast.spellname ||
              secondToLast.spellname.length < 2)
          ) {
            this.spells.removeAt(this.spells.length - 1);
          }
        }
      });
  }

  createSpells(): FormGroup {
    return this.fb.group({
      spellname: [""],
      spelldescription: [""]
    });
  }

  createDndClass(): FormGroup {
    return this.fb.group({
      classname: ["", Validators.required],
      hitdice: [1, [Validators.required, Validators.min(1)]],
      spellcaster: [false, Validators.required],
      level: [1, [Validators.required, Validators.min(1)]]
    });
  }

    
  get spells(): FormArray {
    return <FormArray>this.charsheet.get("spells");
  }

  showme(){
    if(this.show = true){

    }
  }
 
}
