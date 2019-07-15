var letter = require('./letter');

function doSomething(str){
    this.start = () => {
        var arr = [];
        for ( let i = 0; i < str.length; i++ ){
            var char2 = new letter(str[i]);
            var char = char2.change();
            arr.push(char);
        }
        return arr.join("");
    }
    this.check = () => {
        return str;
    }
    this.compare = (item1) => {
        var comp = item1.split("");
        var runx = true;
        for (let i = 0; i < comp.length; i++){
            if ( comp[i] == "_" ){
                runx = false;
            }
        }
        return runx;
    }
}

module.exports = doSomething;