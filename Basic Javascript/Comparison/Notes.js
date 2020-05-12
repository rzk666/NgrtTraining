// What will the following print?
// *** False * False = TRUE
// *** True 8 False = FALSE
// *** undefined/ 0 / `   ` / 

console.log(!undefined) === true
console.log(!0) === true
console.log(!'') === true
console.log(!'Test') === false
console.log(!53) === false
console.log(!true) === false
console.log(!false) === true
