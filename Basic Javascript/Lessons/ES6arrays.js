// Arrow function \ normal function comparison
// --------------------------------
// const isValidMail = (data) => {
//     data.includes('@');
// }

// function isValidMail(data){
//     return data.includes('@');
// }

// const isValidMail = data => data.includes('@');

// Foreach
const x = [1,2,3];

for (let i = 0; i < x.length; i++) {
    console.log(x[i]);
}

x.forEach(david => console.log(david));

// Foreach example #2
const y = [1, "test", "david", 2];

for (let i = 0; i < y.length; i++) {
    if (typeof y[i] === 'string') {
        console.log(y[i]);
    }
}

y.forEach(x => {
    if(typeof x === 'string') {
        console.log(x);
    }
});

// ES6 function
const z = [1,2,3,4];

z.map(x => {
    console.log(x + 5);
    console.log(x + 10);
    if( x === 5 ) {
        console.log("test");
    }
});

// So what is the differance between forEach & map?
// forEach doesn't return anything, while map returns a new array!

const test = y.forEach(x => console.log(x));
const test2 = y.forEach(x => {
    if (x < 5 ) {
        x = x + 10;
    } else {
        x = x + 20;
    }
    return x;
});

const test3 = z.map(x => {
    if (x < 3 ) {
        return x + 10;
    }
    return x + 20;
});

// test3 = [11, 12, 23, 24];

// Example - write a function that recives an array and returns a new array where all the elemnts are multiplied by 10
const myFuncFor = (myArray) => {
    const newArray = [];
    for (let i = 0; i < myArray.length; i++) {
        newArray.push(myArray[i] * 10);
    }
    return newArray;
}

// Same with map
const myArray = [1,2,3];
const newArray = myArray.map(x => x * 10);

// Filter
const myArray2 = [1, 5, 15, 25, 23, 7, 9];
const small = myArray2.filter(x => x < 10); // small = [1, 5, 7, 9];
const big = myArray2.filter(x => x > 10); // big = [15, 25, 23];
// This will return an array only with nubmer that are lesser then 10 and doesn't equal 5
myArray2.filter(x => {
    if(x < 10 && x!== 5) {
        return true;
    }
    else false;
})

// Reduce
const myArray3 = [1,2,3,4,10,20,30];
const totalSmallNumbers = myArray3.reduce((acc, x) => {
    if(x < 10) {
        acc += 1;
    }
}, 0)

// totleSmallNumbers = 4;

const arraySum = myArray3.reduce((a, b) => a = a + b, 0); // arraySum = 70