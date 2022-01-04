const prompt = require('prompt-sync')({
    sigint: true
});

const myName = 'David Garza';
let weAreFriends = false;

console.log(`~ Hello, my name is ${myName}!`);

let yourName = prompt('? What is your name? ');

if(yourName == '') {
    console.log(`~ Fine! Don't tell me your name. You shall be named Not-My-Friend (just so there isn't any confusion).`);
    yourName = "Not-My-Friend"
} else {
    console.log(`~ Nice to meet you, ${yourName}!`);
}

let yourSiblings = prompt('? Do you have any siblings? ');
while(yourSiblings == '' || isNaN(yourSiblings)) {
    yourSiblings = prompt(`? Gotta be a number, Try again: `)
}

if(Number(yourSiblings) > 3) {
    console.log('~ Wow! You must have had a full house with that many siblings');
} else if(Number(yourSiblings) > 0) {
    console.log(`~ I hope the ${Number(yourSiblings) + 1} of you got a long!`);
} else if(Number(yourSiblings) == 0) {
    console.log(`~ Aww, that's too bad. They can be fun, but also sometimes annoying. More dessert for you!`);
}

prompt(`~ Well, let me tell you a story! Once upon a time in a distant land called Florida`);
prompt(`~ there was a boy named David. As a baby, he loved the sun! But as he grew older`);
prompt(`~ he quickly learned his fair complexion was a curse not a gift! The sun was unusually`);
prompt(`~ cruel and never left him golden brown, but lobster red. Perhaps a cruel irony of`)
prompt(`~ living in such a state.`);

let shallIContinue = prompt('? Still interested? [y/n]');
while(['n','y'].includes(shallIContinue.toLocaleLowerCase()) == false) {
    shallIContinue = prompt(`? Sorry, that ain't right. Try again (y or n): `)
}

if(shallIContinue.toLowerCase() == 'n') {
    console.log('~ How rude! Well, sit tight because I\'m not done! And BTW, your not his friend.');
} else {
    weAreFriends = true;
    console.log(`~ Thanks, ${yourName}! This is the start of a beautiful friendship.`);
}

prompt(`~ Plot twist, David and his family moved to Michigan. Why?!`)
prompt(`~ This felt like unusual punishment but after a while he began to appreciate colder `)
prompt(`~ weather and snow! His first white Christmas was amazing! `)
prompt(`~ Snow forts, snow caves, snow ball fights, sledding, and generally always`)
prompt(`~ being cold -- he loved it! But he wanted more! One white Christmas he got the best gift ever--`)

myGiftNumber = prompt(`? What gift do you think David received?
  [1] Snow Shoes
  [2] Mobile Phone
  [3] Snow Mobile
  [4] Desktop Computer 
  [5] Sky Diving Lessons
 Enter a number: `)

 let attemptsToGuess = 1
 while(Number(myGiftNumber) != 4) {
     attemptsToGuess++;
    myGiftNumber = prompt(`? Sorry, that ain't right. Try again${weAreFriends ? ' (This should be easy for his friend!)' : ''}: `)
}

if(Number(attemptsToGuess) > 1 && weAreFriends) {
    console.log(`~ It look you ${attemptsToGuess} guesses!? Apparently he needs to be more selective with his friends.`)
}

prompt(`~ Anyways ${yourName}, there is more to the story...`);
prompt(`~ David loved his computer. He and that computer did everything together-- played online games, built`);
prompt(`~ websites, watched videos, and even ran a small business with a random stranger he met on the internet.`);
prompt(`~ Ok... I've grown weary of telling this story... long story short, he started a career in the IT field and`);
prompt(`~ is here now. Tada!`);