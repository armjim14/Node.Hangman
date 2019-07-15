var letter = function(lett){
    this.change = function(){
        if (lett == " "){
            return " " +lett+" ";
        } else if (lett[1] == "1") {
            return lett[0];
        } else {
            return " _";
        }
    }
}

module.exports = letter;