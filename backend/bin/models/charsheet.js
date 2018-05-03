var mongoose = require('mongoose');

var CharsheetSchema = new mongoose.Schema({
  name:string,
  race:string,
  dndclass: DndClass,
  spells:[Spell],
  created: Date
});	
mongoose.model('Charsheet', RecipeSchema);