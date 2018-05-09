import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { DndClass } from "../../domain/dnd-class/dnd-class.model";
import { Charsheet, RaceType } from "../../domain/charsheet/charsheet.model";
import { FormGroup, FormControl, FormBuilder, FormArray } from "@angular/forms";
import { Spell } from "../../domain/spell/spell.model";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "app-add-charsheet",
  templateUrl: "./add-charsheet.component.html",
  styleUrls: ["./add-charsheet.component.css"]
})
export class AddCharsheetComponent implements OnInit {

  public readonly races = ['Elf', 'Human', 'Dwarf'];
  private charsheet: FormGroup;
  @Output() public newCharSheet = new EventEmitter<Charsheet>();
  classes: DndClass[];

  onSubmit() {
    const newcharsheet = new Charsheet(
      this.charsheet.value.name,
      this.charsheet.value.race,
      new DndClass(
        this.charsheet.value.dndclass.classname,
        this.charsheet.value.dndclass.hitdice,
        this.charsheet.value.dndclass.spellcaster,
        this.charsheet.value.dndclass.level
      )
    );
    for (const spl of this.charsheet.value.spells) {
      if (spl.spellname.length > 2) {
        newcharsheet.addSpell(new Spell(spl.spellname, spl.spelldescription));
      }
    }
    this.newCharSheet.emit(newcharsheet);
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.charsheet = this.fb.group({
      name: this.fb.control(''),
      dndclass: this.createDndClass(),
      race: this.fb.control(''),
      spells: this.fb.array([this.createSpells()])
    });

    this.spells.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe(spellList => {
        const lastElement = spellList[spellList.length - 1];
        if (lastElement.spellname && lastElement.spellname.length > 2) {
          this.spells.push(this.createSpells());
        }
      });
  }

  addSheet(name: string, race: RaceType, dndClass: DndClass): boolean {
    const characterSheet = new Charsheet(name, race, dndClass);
    this.newCharSheet.emit(characterSheet);
    return false;
  }

  createSpells(): FormGroup {
    return this.fb.group({
      spellname: [""],
      spelldescription: [""]
    });
  }

  createDndClass(): FormGroup {
    return this.fb.group({
      classname: [""],
      hitdice: [""],
      spellcaster: [""],
      level: [""]
    });
  }

  get spells(): FormArray {
    return <FormArray>this.charsheet.get("spells");
  }
}
