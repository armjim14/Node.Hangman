var inq = require("inquirer")

var list = ["pen", "paper", "desk", "marker", "eraser", "ruler", "pencil", "backpack", "stickynotes", "notebook", "planner", "textbook", "glue", "scissors", "tape", "stapler"];

var word = list[Math.floor(Math.random() * list.length)]
var chances = 7;

var guess = [];

for ( let i = 0; i < word.length; i++ ){
    guess.push("-");
}

console.log(guess.join(" "));

function game(){
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
        } else {

            var wrong = true;
            var letter = res.user.toLowerCase();

            for ( let i = 0; i < word.length; i++ ){
                if ( letter == word[i] ){
                    guess[i] = word[i];
                    wrong = false;
                }
            }
            console.log(guess.join(" "));
            console.log(`Your chances remaining ${chances}`)
            if (wrong){
                chances--;
            }

            if ( chances == 0 ){
                youlose();
            } else if ( word == guess.join(" ") ){
                youwon();
            }
            game();
        }
    })
}

game()

function youwon(){

}

function youlose(){
    
}