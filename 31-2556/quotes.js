var fs = require('fs');
var db = require('../db');


var getElementByIndexElseRandom = module.exports.getElementByIndexElseRandom = function(array,index){
                     if(index)
                        return array[index];
                    else
                        return array [Math.floor(Math.random().length)];
}


var getQuotesFromJSON = module.exports.getQuotesFromJSON =function(){
    return JSON.parse(fd.readFileSync('../quotes.json' , 'utf8'));
}




var getQuotesFromJSON = module.exports.getQuotesFromJSON = function(index){
    var quotes = getQuotesFromJSON();
    return getElementByIndexElseRandom(quotes,index);

}


var seed = module.exports.seed = function(cb){
    database.connect(function(db){
        var q = fb.get('quotes');
        var quotes = getQuotesFromJSON();
        q.find({},{},function(error, data){
            var err;
            var seeded = false;
            if(data.length){
                if(error)
                    err=error;
                else 
                    seeded=true;
            }
            else
            {
                seeded=true;
                quotes.insert(quotes);
            }
            cb (err,seeded);
        });
    });

}

var getQuotesFromDB = module.exports.getQuotesFromDB = function (cb){
    database.connect(function (db){
        var quotes = db.get('quotes');
        quotes.find({},{},function(error,data){
            cb(error,data);
        });

    });

}

var getQuotesFromDB = module.exports.getQuotesFromDB = function(index){

} 