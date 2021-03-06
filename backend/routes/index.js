let express = require("express");
let mongoose = require("mongoose");
let jwt = require('express-jwt');
let Charsheet = mongoose.model("Charsheet");
let Spell = mongoose.model("Spell");
let DndClass = mongoose.model("DndClass");


let auth = jwt({secret: process.env.CHARSHEET_SECRET});
var router = express.Router();

router.get("/API/charsheets/", auth, function(req, res, next) {
  let query = Charsheet.find()
    .populate("spells")
  query.exec(function(err, charsheets) {
    if (err) {
      return next(err);
    }
    res.json(charsheets);
  });
});

router.post("/API/charsheets/", auth, function(req, res, next) {
  Spell.create(req.body.spells, function(err, spls) {
    if (err) {
      return next(err);
    }
  let charsheet = new Charsheet({
    name: req.body.name,
    race: req.body.race,
    dndclass: req.body.dndclass,
    hitDice: req.body.hitDice,
    spellcaster: req.body.spellcaster,
    level: req.body.level,
   });

  charsheet.spells = spls;
  charsheet.save(function(err, post) {
    if (err) {
      Spell.remove({ _id: { $in: charsheet.spells } });
      return next(err);
    }
    res.json(charsheet);
  });
});
});

router.param("charsheet", function(req, res, next, id) {
  let query = Charsheet.findById(id).populate('spells');
  query.exec(function(err, charsheet) {
    if (err) {
      return next(err);
    }
    if (!charsheet) {
      return next(new Error("not found " + id));
    }
    req.charsheet = charsheet;
    return next();
  });
});


router.post("/API/charsheet/:charsheet/spells", auth, function(req, res, next) {
  let spl = new Spell(req.body);
  spl.save(function(err, spell) {
    if (err) return next(err);
    req.charsheet.spells.push(spell);
    req.charsheet.save(function(err, rec) {
      if (err) {
        Spell.remove({ _id: { $in: charsheet.spells } });
        return next(err);
      }
      res.json(spell);
    });
  });
});
/*
router.get("/API/charsheet/:id", function(req, res, next) {
  Charsheet.findById(req.params.id, function(err, charsheet) {
    if (err) return next(err);
    if (!charsheet) return new new Error("not found" + req.params.id)();
    res.json(charsheet);
  });
});
*/

router.get("/API/charsheet/:charsheet", function(req, res) {
  res.json(req.charsheet);
});

router.delete("/API/charsheet/:charsheet", auth, function(req, res) {
Spell.remove({ _id: { $in: req.body.spells } }, function(err) {
    if (err) return next(err);
    req.charsheet.remove(function(err) {
      if (err) {return next(err);}
      res.json(req.charsheet);
    });
  });
});

router.param("spell", function(req, res, next, id) {
  let query = Spell.findById(id);
  query.exec(function(err, spell) {
    if (err) {
      return next(err);
    }
    if (!spell) {
      return next(new Error("not found " + id));
    }
    req.spell = spell;
    return next();
  });
});

router.get('/API/spell/:spell', function(req, res) {
  res.json(req.spell);
});

module.exports = router;
