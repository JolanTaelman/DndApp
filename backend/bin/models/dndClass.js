var mongoose = require("mongoose");

var DndClassSchema = new mongoose.Schema({
  name: String,
  hitDice: { type: Number, default: 8 },
  level: { type: Number, default: 1 },
  spellcaster: Boolean
});

DndClassSchema.pre("remove", function(next) {
  this.model("Charsheet").update(
    {},
    { $pull: { dndclass: this._id } },
    { safe: true, multi: true },
    next
  );
});

mongoose.model("DndClass", DndClassSchema);
