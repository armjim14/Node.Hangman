var inq = require("inquirer")

var list = ["pen", "paper", "desk", "marker", "eraser", "ruler", "pencil", "backpack", "stickynotes", "notebook", "planner", "textbook", "glue", "scissors", "tape", "stapler"];

var word = list[Math.floor(Math.random() * list.length)]
var chances = 7;
var on = true;
var guess = [];
var history = [];

for ( let i = 0; i < word.length; i++ ){
    guess.push("-");
}

console.log("");
console.log(guess.join(" "));
console.log("");

function game(){
if (on){
    inq.prompt([
        {
            type: "input", 
            message: "Select a single letter",
            name: "user"
        }
    ]).then( (res) => {
        if ( res.user.length !== 1 ){
            console.log("");
            console.log("Please select a single letter")
            console.log("");
            game();
        } else if ( !history.includes(res.user.toLowerCase()) ) {

            var wrong = true;
            var letter = res.user.toLowerCase();
            history.push(letter);

            for ( let i = 0; i < word.length; i++ ){
                if ( letter == word[i] ){
                    guess[i] = word[i];
                    wrong = false;
                }
            }
            console.log("");
            console.log(guess.join(" "));
            console.log(`Your chances remaining ${chances}`)
            console.log("");
            if (wrong){
                chances--;
            }

            if ( chances == 0 ){
                youlose();
            } else if ( !guess.includes("-") ){
                youwon();
            }
            game();
        } else {
            console.log("");
            console.log("That letter was already selected");
            console.log("");
            game();
        }
    })
}
}

game()

function youwon(){
    on = false;
    console.log("");
    console.log("You Won the word was " + word);
    console.log("");
}

function youlose(){
    on = false;
    console.log("");
    console.log("You Lost the word was " + word);
    console.log("");
}