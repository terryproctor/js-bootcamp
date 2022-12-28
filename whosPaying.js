names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {
    
/******Don't change the code above*******/
    
    let randomPer = Math.floor(Math.random() * (names.length));
    let person = names[randomPer];
    return `${person} is going to buy lunch today!`;
    
/******Don't change the code below*******/    
}