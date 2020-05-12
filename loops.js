// Basic while loop with counter
let i = 0;
while(i < 3) {
    console.log("TEST");
    i = i + 1;
}

// For loop has 3 sections:
// 1) Define counter
// 2) Define stopping term
// 3) Define counter increment (how it changes)
for (let david = 0; david < 3; david++) {
    console.log("test");
}

// Print all elements in an array (for)
const myFunc = (myArray) => {
    for (let i = 0; i < myArray.length(); i++) {
        console.log(myArray[i]);
    }
}

// Print all elements in an array (while)
const myFunc2 = (myArray) => {
    let i = 0;
    while(i < myArray.length()) {
        console.log(myArray[i]);
        i = i + 1;
    }
}

