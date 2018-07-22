var router = require('express').Router();

var Techno = require('./../models/techno'); 


router.get('/', (req, res) => {
    Techno.find({}).then(technos => {
        res.render('technos/layout.html', { technos: technos, });
    });
});

router.post('/add_techno', (req, res) => {
    new Promise((resolve, reject) => {
        if (req.params.id) {
            Techno.findById(req.params.id).then(resolve, reject);
        }
        else {
            resolve(new Techno())
        }
    }).then(techno => {
        techno.name = req.body.name;
        techno.description = req.body.description;
        techno.raritys = req.body.raritys;
        techno.type = req.body.type;
        techno.elixircost = req.body.elixircost;
        techno.damage = req.body.damage;
        techno.dps = req.body.dps;
        techno.hitpoints = req.body.hitpoints;
        techno.hitspeed = req.body.hitspeed;
        techno.crowntowerdamage = req.body.crowntowerdamage;
        techno.speed = req.body.speed;
        techno.range = req.body.range;
        techno.targets = req.body.targets;
        techno.deploy = req.body.deploy;
        techno.areadamage = req.body.areadamage;
        techno.radius = req.body.radius;
        techno.freezeduration = req.body.freezeduration;
        techno.stunduration = req.body.stunduration;
        techno.healing = req.body.healing;
        techno.duration = req.body.duration;
        techno.howmuch = req.body.howmuch;
        techno.spawnspeed = req.body.spawnspeed;
        techno.lifetime = req.body.lifetime;
        techno.boost = req.body.boost;
        techno.shieldhitpoints = req.body.shieldhitpoints;
        techno.deathdamage = req.body.deathdamage;
        techno.dashrange = req.body.dashrange;
        techno.dashdamage = req.body.dashdamage;
        techno.cmlvlcommon = req.body.cmlvlcommon;
        techno.cmlvlrare = req.body.cmlvlrare;
        techno.cmlvlepic = req.body.cmlvlepic;
        techno.cmlvllegend = req.body.cmlvllegend;

        if (req.file) techno.picture = req.file.filename;

        return techno.save();
    }).then(() => {
        res.redirect('/');
    }, err => console.log(err));
});



module.exports = router; 