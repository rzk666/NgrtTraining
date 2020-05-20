// Basic objects
const user = {
    username: "value",
    password: "value2",
    addresses: [{
        city: "test",
        zipcode: 1251,
    }, {
        city: "test2",
        zipcode: 125125,
    }],
    isUserValid: () => console.log("yes"),
}

user.addresses[0].city // === "test"
user.addresses[1].zipcode // === 125125

// Object.keys & Object.values
Object.keys(user) // === ["username", "password", "addresses", "isUserValid"];
Object.keys(user.addresses[0]); // === ["city", "zipcode"];

Object.values(user) // === ["value", "value2", [{city: "test", zipcode:1251}, {city:"test2", zipcode: 125125}], () => console.log("yes")];
// Get all values of the second address of user
Object.values(user.addresses[1]) // === ["test2", 125125];

// Get\Set properties & Overwritting
user.username = "test";
user.test = "test2";
const testUser = { 
    test:1,
    test2:2,
    test:15
};
// testUser = { test:15, test2:2 } -> Last property will always override existing proprty

// Deconstruction
const x = [1,2,3] // ...x === 1,2,3
// ...user === username: "value", password: "value2"
const newUser = {...user} // now newUser will look exactly like user, but will be deep cloned

const merch = {
    productOne: {
        price: 15,
        name: "KOB",
        type: "T-Shirt",
    },
    productTwo: {
        price: 20,
        name: "HBD",
        type: "T-Shirt",
    },
    productThree: {
        price: 100,
        name: "Grinder",
        type: "Misc",
    }
}

const newData = {
    price: 25,
    name: "KOB",
    type: "T-Shirt"
}

// Deep cloning example
const deepClonedMerch = {...merch};

// Updating data example
merch.productOne = {...merch.productOne, ...newData};

// Properties deconstruction
const myObject = {
    test: "test",
    test2: 124214,
    test3: () => console.log("test"),
}

const x = myObject.test; // x = "test"
const y = myObject.test2; // y = 124214
const z = myObject.test3; // z = () => console.log("test")

const { test } = myObject; // test = "test"
// The line above is equivellent to:
const test = myObject.test;
console.log(test) // will print "test"

const { test, test2, test3 } = myObject;
// test === "test"
// test2 === 124214
// test3 === () => console.log("test")
console.log(test) // will print "test"
test3();
const myNumber = test2 - 1000;