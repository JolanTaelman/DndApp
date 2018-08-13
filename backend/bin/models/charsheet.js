var mongoose = require('mongoose');

var CharsheetSchema = new mongoose.Schema({
  name:String,
  race:String,
  //dndclass: {type: mongoose.Schema.Types.ObjectId, ref:'DndClass'},
  dndclass: String,
  hitDice: Number,
  spellcaster: Boolean,
  level: Number,
  spells:[
    {type: mongoose.Schema.Types.ObjectId,
     ref: 'Spell'
    }
  ],
  //created: Date
});	
mongoose.model('Charsheet', CharsheetSchema);