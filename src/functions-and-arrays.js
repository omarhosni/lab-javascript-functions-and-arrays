// Iteration #1: Find the maximum
function maxOfTwoNumbers(number1, number2) {
  if (number1 > number2) {
    console.log(`${number1} is greater than ${number2}`)
    return number1
  } else {
    console.log(`${number2} is greater than ${number1}`);
    return number2
  }
}
maxOfTwoNumbers(2, 1);
// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];function findLongestWord(str) {
  let longestWord = 0;
  let word=null;
 for (var i = 0; i < str.length; i++) {
if (str[i].length > longestWord) {
longestWord = str[i].length;
word = str[i];
}
  }     return word;
 }
console.log(findLongestWord(words));
// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(array) {
  let sum=0;
 for (let i = 0; i < array.length; i++) {
sum += array[i];
}
return sum;
}
console.log(sumNumbers(numbers))
// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(array) {
  let sum=null;
  if (array && array.length > 0){
    for (let i = 0; i < array.length; i++) {
   sum =sum+array[i];
   }
   let len=(array.length);
   return sum/len;
   }else return null
  }
console.log(averageNumbers(numbersAvg))
// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(array){
  let lengthOfArray = array.length;
  if (lengthOfArray == 0) {
    return null;
   }
  else {
    let sumOfLengthAllWords = 0;
 for (let i = 0; i < lengthOfArray; i++) {
      let numberCharacter = array[i].length;
      sumOfLengthAllWords += numberCharacter;
    }
    return sumOfLengthAllWords / lengthOfArray;
  }
}
console.log(averageWordLength(wordsArr));
// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];
function uniquifyArray(array) {
  if (array.length == 0) {
    return null;
  }
  else {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (i == j) { continue };
        if (array[i] === array[j]) {
         array.splice(j, 1);}
         else {
        continue;
        }
      }
    }
    return array;
  }
}
console.log(uniquifyArray(wordsUnique));
// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function doesWordExist(array, word) {
  if (array.length === 0) {
    return null;
  }
  else if(array.includes(word)){
  return true;
}else  {
     return false;
   }
  }
console.log(doesWordExist['machine'])



// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(array,word) {
  let times = 5;
  if (array.length == 0) {
    return 0;
  }
  else {
    for (let i = 0; i < array.length; i++) {
        if (word == array[i]) { times= times+1}
        else continue;
    }
    return times;
  }}
console.log(howManyTimes['matter'])