function maxOfThree(a,b,c){
    return Math.max(...[a,b,c])
}

function repeatWord(word, times) {
    for(let i = 1; i <=times; i++){
        console.log(word, i)
    }
}

function getInitials(fullName) {
  let parts = fullName.split(" "); // ["John", "Doe"]
  let initials = "";
  for (let i = 0; i < parts.length; i++) {
    initials += parts[i][0] + ".";
  }
  return initials;
}

function countVowels(str){
    let vowels = 'aeiouAEIOU'
    let count = 0
    for(let i=0; i< str.length; i++ ){
        if(vowels.includes(str[i])){
            count++
        }}
        return count
}

function isPalindrome(str){
    let reverse = ''
    for(let i = str.length -1; i >= 0; i--){
        reverse += str[i]
    }
    return str === reverse
}

let arr = [10, 20, 30, 40]
function sumArray(arr) {
    return arr.reduce((acc, sum) => acc + sum ,0)
}

function FindSmallest(arr) {
    return Math.min(...arr)
}

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1)
}

function removeSpaces(str) {
    return str.split(' ').join('')
}

function countWords(sentence) {
    return sentence.trim().split(' ').length
}

// console.log(maxOfThree(89,33,201))
// repeatWord('no',7)
// console.log(getInitials('Muhammad Sabback'))
// console.log(countVowels('this is me and this is my brother'));
// console.log(isPalindrome('level'));
// console.log(sumArray(arr))
// console.log(FindSmallest(arr))
// console.log(capitalize('google'));
// console.log(removeSpaces('hi my name is gogo'));
// console.log(countWords('I love JavaScript')); 

