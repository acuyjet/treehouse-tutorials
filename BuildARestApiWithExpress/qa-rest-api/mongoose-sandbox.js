'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sandbox');

var db = mongoose.connection;

db.on('error', function(err) {
    console.error('Connection error:', err);
});

db.once('open', function(){
    console.log("DB connection successful!");
    // All database communication goes here

    var Schema = mongoose.Schema;
    var AnimalSchema = new Schema({
        type: {type: String, default: 'goldfish'},
        color: {type: String, default: 'golden'},
        size: {type: String, default: 'small'},
        mass: {type: Number, default: 0.007},
        name: {type: String, default: 'Angela'}
    });

    var Animal = mongoose.model('Animal', AnimalSchema);

    var elephant = new Animal({
        type: 'elephant',
        color: 'pink',
        size: 'big',
        mass: 6000,
        name: 'Lawrence'
    });

    var animal = new Animal({}); // Goldfish

    var whale = new Animal({
        type: 'whale',
        size: 'big',
        mass: 190500,
        name: 'Nigel'
    });

    Animal.remove({}, function(err) {
        if(err) console.error('Save failed!', err);
        elephant.save(function(err){
            if(err) console.error('Save failed!', err);
            animal.save(function(err){
                if(err) console.error('Save failed!, err');
                whale.save(function(err) {
                    if(err) console.error('Save failed!, err');
                    Animal.find({size: 'big'}, function(err, animals){
                        animals.forEach(function(animal){
                            console.log(animal.name + ' the ' + animal.color + ' ' + animal.type);
                        });
                    });
                    db.close(function() {
                        console.log('DB connection closed!');
                    });
                });
            });
        });
    });
});