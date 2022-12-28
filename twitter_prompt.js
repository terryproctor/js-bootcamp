const max_length = 140;
let tweet = prompt('Please entre your tweet');
let chars_left = max_length - tweet.length;
alert(`You have ${chars_left} characters left!`)