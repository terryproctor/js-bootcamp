let output = []
function fizzBuzz() {
    let len = output.length;
    let num = len + 1;
        
    function checkFizzBuzz(num){
        if (num%3 === 0 && num%5 === 0) {return 'fizzBuzz';}
        else if (num%3 !== 0 && num%5 === 0) {return 'buzz';}
        else if (num%3 === 0 && num%5 !== 0) {return 'fizz';}
        else {return num;}
    }
    
    output.push(checkFizzBuzz(num));
    return output;
}
;