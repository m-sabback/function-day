function greet(name){
    return `Hello ${name} how are you `
}

function add(a, b){
    return a+b
}

function isEven(num){
    return num % 2 === 0 ? true : false
}

function square(num) {
    return num * num
}

function whoTheLonger(w){
    return `this word:{${w}} has: ${w.split(" ").join('').length} Letters } is the longer `
}

function longerWord(word1, word2) {
    if(word1.length > word2.length){
        return whoTheLonger(word1)
    }
    else if(word2 > word1){
        return whoTheLonger(word2)
    }
    else{
        return 'equal'
    }
}

let word = 'Google is Good for do researching but sometime you may to do '
function countLetters(word) {
    return `${word.split(" ").join('').length} Letters `

}


let num = [2,3,4]
function multiplyArray(arr) {
    let result = 1
    for(let i=0; i < arr.length; i++){
        result = result * arr[i]
    }
    return result
}


function reverseString(str) {
    let rev = ''
    for(let i = str.length -1 ; i >= 0 ; i--){
        rev  += str[i]
    }
    return rev
}

let names = ['n1', 'n2', 'n3', 'n4']
function getLastEl(arr) {
    return arr[arr.length-1]
}

function canVote(person, age) {
    if(age >= 18 ) return `this person: {${person} has age is:${age}} can vote`
    else{return `this person: {${person} has age is:${age}} cannot vote`}
}

console.log(greet('Muhammad'))
console.log(add(29, 44))
console.log(isEven(9))
console.log(square(10));
console.log(countLetters(word));
console.log(longerWord('Hi how are you I hope you doing greet', 'nice to see you again'));
console.log(reverseString('Hello'));
console.log(multiplyArray(num));
console.log(getLastEl(names));
console.log(canVote('Ali', 22));




