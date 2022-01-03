const prompt = require('prompt-sync')();

const myName = 'David Garza';

console.log(`~ Hello, my name is ${myName}!`);

const yourName = prompt('? What is your name? ');
console.log(`~ Nice to meet you, ${yourName}!`);

const yourSiblings = prompt('? Do you have any siblings? ');
if(yourSiblings > 3) {
    console.log('~ Wow! You had a full house with that many siblings');
} else if(yourSiblings > 0) {
    console.log(`I have 2 brothers! I hope the ${Number(yourSiblings) + 1} of you got a long!`);
} else if(yourSiblings == 0) {
    console.log(`Aww, that's too bad. They can be fun, but also sometimes annoying. More dessert for you!`);
}

prompt(`~ Well, let me tell you a story! Once upon a time in a distant land called Florida`);
prompt(`~ there was a boy named David. As a baby, he loved the sun! But as he grew older`);
prompt(`~ he quickly learned his fair complexion was a curse not a gift! The sun was unusually`);
prompt(`~ cruel and never left him golden brown, but more lobster red. Perhaps a cruel irony of`)
prompt(`~ living in such a state as Florida.`);

const shallIContinue = prompt('? Still interested? [y/n]');

if(shallIContinue.toLowerCase() == 'n') {
    console.log('~ How rude! Well, sit tight because I\'m not done!');
} else {
    console.log(`~ Thanks, ${yourName}! This is the start of a beautiful friendship.`);
}
