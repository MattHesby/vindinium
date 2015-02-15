var Bot = require('bot');
var bot = new Bot('nwiltp4r', 'training');
var gameStart = false;
var _this = bot;
var async = require('async');
var goDir;
var request = require('request');
// bot.startGame    bot.parseTheData    bot.newRequest

async.series([
  function(callback){
    console.log("async startGame()");
    if(gameStart === false){
      gameStart = true;
      bot.startGame();

    }
    else{
      bot.newRequest(goDir);
    }
    callback();
  },
  function(callback){
    console.log("async parseTheData");
    bot.parseTheData();
    callback();
  },
  function(callback){
    console.log("async botBrai");
    botBrain();
    callback();
  }
]);

function botBrain(){
  //console.log("botBrain!");
  var rand = Math.floor(Math.random() * 3);
  var dirs = ["north", "south", "east", "west"];
  goDir = dirs[rand];

}
  





////VERSION THAT CALLS ITSELF TOO MANY TIMES/////
/*
var goDir;
//console.log(bot);
// bot test code
function botStart(callback){
 // console.log("going to run bot!");
    bot.startGame(function(){
     // console.log("going to run afterPostRequest!");
      bot.parseTheData(function(){
      //  console.log("going to run botBrain!");
        botBrain(function(){
          bot.requestAgain(goDir, botContinue());      
        });
      });
    });
}

function botContinue(callback){
  //console.log("bot Continiue!");
  bot.parseTheData(function(){
    botBrain(function(){
      bot.requestAagain(goDir, botContinue());
    });
  });
}


function botBrain(cb){
  //console.log("botBrain!");
  var rand = Math.floor(Math.random() * 3);
  var dirs = ["north", "south", "east", "west"];
  goDir = dirs[rand];

  //console.log(goDir);

  cb();
}

botStart();
*/


///// OLD VERSION /////
/*
bot.run(function(data) {
  return 'north';
});
*/
