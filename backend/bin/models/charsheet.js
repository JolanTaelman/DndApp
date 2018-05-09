var mongoose = require('mongoose');

var CharsheetSchema = new mongoose.Schema({
  name:String,
  race:String,
  dndclass: {type: mongoose.Schema.Types.ObjectId, ref:'DndClass'},
  spells:[{type: mongoose.Schema.Types.ObjectId, ref: 'Spell'}],
  //created: Date
});	
mongoose.model('Charsheet', CharsheetSchema);