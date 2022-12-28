function love_calc(name1="", name2=""){
    if (name1 === "") {name1 = prompt("Name 1?")};
    if (name2 === "") {name2 = prompt("Name 2?")};
    const love_percentage = Math.floor(Math.random() * 100) + 1;
    console.log(love_percentage); 
    return love_percentage;
}

alert(`${name1} & ${name2} love score is ${love_calc('Terry', 'Michelle Pfeiffer')}%`);