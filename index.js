// const animals =['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin']

const pluralized = ((array) => {
   return array.map(element => element +"s") 
}
 // question 2
const uppercase = (array) => {
    return array.map(words => words[0].toUppercase() + words.substr(1)) 
 }
 
 // question 3
 const longWords = (array) => { 
     return.array.filter(el => el.length > 3)
}

console.log(longWords(animals));
 // question 4
 
 const shortWords = (array) => {
    return array.filter(el => el.length < 5) 
 }
 console.log(shortWords(animals));
 
 // question 5
 const oddlength = (array) => {
    return array.filter (el => el )
 }
 
 // question 6
 
 const longToShort = (array) => {
    return array.sort((a, b) => a.length - b.length)
 }
 // question 7
 const sum = (array) => {
    return array.reduce((accum, value) => accum += value);
}
console.log(longToShort())