const prompt = require('prompt-sync')();

// xify
/*
* `xify` - returns the same string, but with every character 
           replaced by an 'x'
  * Examples:
    * xify('hello') -> 'xxxxx'
    * xify('hi there') -> 'xxxxxxxx'
*/
console.log(xify("Hello"));

function xify(str){
    let strX = "";

    for (let count = 0; count < str.length; count++){
        strX += 'x';
    }

    return strX;

}

// yellingChars
/*
* `yellingChars` - returns the given string with an 
                   exclamation point after each character
  * Examples:
    * yellingChars('goodness') -> 'g!o!o!d!n!e!s!s!'
    * yellingChars('oh hello') -> 'o!h! !h!e!l!l!o!'
  * Hints:
    * We can add more than one thing to the string each time 
    * through the loop. In this case, it's the current 
    * character AND an exlamation point.
*/

// newStr += "!";
console.log(yellChar("goodness"));

function yellChar(str){
    let exl = "";
    for(var i = 0; i < str.length; i++){
        exl += str[i] + '!';
    }
    return exl
}

// indexedChars
/*
* `indexedChars` - adds the index of each character before that character in the given string
  * Examples:
    * indexedChars('hello') -> '0h1e2l3l4o'
    * indexedChars('bye') -> '0b1y2e'
  * Hints: 
    * We can add something BEFORE the current character as well!
*/

console.log(indexChar('hello'));

function indexChar(str) {
    let indxC = "";
    for (let i = 0; i < str.length; i++){
        indxC += i
        indxC += str[i];
    }
    return indxC
}


// numberedChars
/*
 `numberedChars` - adds the number of each character before that character in the given string
  * Examples:
    * numberedChars('hello') -> '(1)h(2)e(3)l(4)l(5)o'
    * numberedChars('bye') -> '(1)b(2)y(3)e'
  * Hints: 
    * there's a simple relationship between the index and the number... indices are 0-based counting and numbers are 1-based... you'll figure it out!
*/

console.log(numberedChars('Hello'));

function numberedChars(str) {
    let numC = "";
    for (let i = 0; i < str.length; i++){
        numC += str[i] + '()';
    }
    return numC
}

// exclaim
/*
* `exclaim` - returns the given sentence with every question mark or period changed to an exclamation point
  * Examples:
    * exclaim('What are you doing? Are you a fool?') -> 'What are you doing! Are you a fool!'
    * exclaim('This is fine.') -> 'This is fine!'

*/

console.log(exclaim('What are you doing? Are you a fool?'));

function exclaim(str) {
    let punct = '';
    for (const char of str) {
        punct += char === '?'? '!' : char;
    }
    return punct
}


// repeatIt
/*
* `repeatIt` - returns the given string repeated `n` times, where `n` is the second parameter
  * Examples:
    * repeatIt('beetlejuice', 3) -> 'beetlejuicebeetlejuicebeetlejuice'
    * repeatIt('oh hi!', 8) -> 'oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!'
*/

// let stringRepeat = prompt('Enter a string: ');
// let repeatAmount = prompt('How many times would you like to repeat your string? ');

// function repeatIt(str){
//     for (let i = 0; i < repeatAmount; i++) {
//     }
//     return i
// }


//truncate
/*
* `truncate` - shortens a long string to 15 characters plus an ellipsis (...)
  * Examples:
    * truncate('The fault, dear Brutus, is not in our stars, but in ourselves.') -> 'The fault, dear...'
    * truncate("Well, that's just, like, your opinion man.") -> "Well, that's ju..."
*/

console.log(truncate('The fault, dear Brutus, is not in our stars, but in ourselves.'));

function truncate(str){
    let truncStr = "";
    for (let i = 0; i < 15; i++) {
        truncStr = truncStr + str[i];
    }
    return truncStr + "..."
}
// 

// ciEmailify
/*
* `ciEmailify` - creates an email from a two-part name
  * Examples:
    * ciEmailify('colin jaffe') -> 'colin.jaffe@codeimmersives.com'
    * ciEmailify('Anthony DeRosa') -> 'anthony.derosa@codeimmersives.com'
*/

console.log(ciEmailify('colin jaffe'));

function ciEmailify(str) {
    let email = '';
    for (element of str){
    email += element;
    } return email + '@codeimmersives.com';
}

// reverse
/*
* `reverse` - reverses the given string
  * Examples:
    * reverse('colin') -> 'niloc'
    * reverse('mesuara') -> 'arausem'
*/

console.log(reverse('colin'));

function reverse(str) {
    let left = 0;
    let right = str.length-1;

    while (left < right) {

        let temp = str[left];
        
        str[left] = str[right];
        str[right] = temp;
        left++;
        right--;
    }
    return str
}

// onlyVowels
/*
* `onlyVowels` - returns only the vowels from a word
  * Examples:
    * onlyVowels('Colin Jaffe') -> 'oiae'
    * onlyVowels('quickly') -> 'ui'
    * onlyVowels('Anthony DeRosa') -> 'Aoeoa'
*/

console.log(onlyVowels('Colin Jaffe'));
function onlyVowels(input) {
    let x = "";

    for (let i = 0; i < input.length; i++) {
        input === "a";
        input === "e";
        input === "i";
        input === "o";
        input === "u";
        input === "y";
        x += input[i];
    }
    return input
}