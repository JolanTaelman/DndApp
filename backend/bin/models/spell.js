var mongoose = require("mongoose");

var SpellSchema = new mongoose.Schema({
  name: String,
  description: String
});

SpellSchema.pre("remove", function(next) {
  this.model("Charsheet").update(
    {},
    { $pull: { spells: this._id } },
    { safe: true, multi: true },
    next
  );
});

mongoose.model("Spell", SpellSchema);
