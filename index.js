var inq = require("inquirer");
var wordd = require("./word");

var abc = ["a", "b", "c", "d", 'e', 'f', 'g', "h", 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var list = ["disney land", "six flags", "castles and coasters", "knotts berry farm", "raging water", "skydiving", "surfing", "hiking", "road trip", "paragliding", "bungee jumping", "skiing", "snowboarding", "roller skating", "windsurfing", "theme park"];
var count = 10;

var wordhere2;

function first(){
    if (list.length == 0){
        console.log("\n There are no more words left \n");
    } else {
    var num = Math.floor(Math.random() * list.length);
    wordhere2 = list[num];
    list.splice(num, 1);
    var wordhere = wordhere2.split("")
    var conv = new wordd(wordhere);
    console.log("\n The words are related to fun things to do \n");
    startGame(conv, wordhere);
    }
}

function startGame(word, wordhere){
    inq.prompt([
        {
            name: "choice",
            message: "Guess a letter"
        }
    ]).then((res) => {

        var strx = res.choice.toLowerCase();
        var cont = false;

        for (let i = 0; i < abc.length; i++) {
            if (strx.includes(abc[i]) && strx.length == 1) { cont = true; }
        }

        if(!cont){ console.log("\nPlease enter a single valid letter\n"); startGame(word, wordhere); } else {

            var wrong = true;

            for ( let i = 0; i < wordhere.length; i++ ){
                if ( wordhere[i] == strx ){
                    wordhere[i] += "1";
                    wrong = false;
                }
            }

            var comparex = word.start();
            console.log("\n"+comparex+"\n");

            var run = word.compare(comparex);

            if (wrong){
                count--;
            }
            console.log(count + ' Guesses remaining');
            

            if (run){
                youwon();
            } else if (count == 0) {
                youlost();
            } else {
                word = new wordd(wordhere);
                startGame(word, wordhere);
            }
        }
    })
}

first();

function youwon() {
    console.log("\n You Won! \n")
    inq.prompt([
        {
            type: "confirm",
            message: "Want to play again",
            name: "again",
            default: true
        }
    ]).then((res)=>{
        if (res.again){
            first();
        } else {
            null;
        }
    })
}

function youlost() {
    console.log("\n you lost \n");
    inq.prompt([
        {
            type: "confirm",
            message: "Want to play again",
            name: "again",
            default: true
        }
    ]).then((res)=>{
        if (res.again){
            first();
        } else {
            null;
        }
    })
}