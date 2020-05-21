// Write a function that recives an array of object and returns a new object made of all the first properties of the objects in the array.
// * If a value is being overwritten, the function will also print "overwrite"
// ** Handle empty objects however you'd like, but make sure you address it in the code.
// Example:
const myArray = [{ test:"david" }, { rozadin:"hagever" }, { for:"allah", dudu:"farok" }];

// Mega pyramid printer
// Write a function that recives an array of objects. Each object will have the following structure:
// { direction:"reverse", rows:5 }, where rows must be an integer & direction could be either "reverse" or "normal".
// The function will print a pyramid based on each object properties
// * Make sure to handle invalid object data
// Example:
const pyramidArray = [{ direction:"reverse", rows: 3}, {direction:"normal", rows:5}, {direction:"zld", rows:5}, {direction:"reverse"}];
// myFunc(pyramidArray) should print:
//*****
// *** 
//  *
//    *
//   ***
//  *****
// *******
//*********
// ERR: Invalid direction
// ERR: Invalid rows

// ESP -> Below is an example array the holds objects for each of the signed artists in the ESP rooster:
const espArtistsRooster = [{
    id: 5152318,
    name:"Razi Elbaz",
    bands: ["SHREDHEAD"],
    customModels:[],
    prefferedModel: "Eclipse E-II",
    ownedModels: ["Eclipse E-II 2018"],
    endorsmentType: "Artist",
    totalPurchasesAmount: 5500,
    address:{
        country: "Israel",
        city: "Modi'in",
        phone: '+972524368658'
    }
}, {
    id: 1420465,
    name:"Yotam Nagor",
    bands: ["SHREDHEAD"],
    customModels:[],
    prefferedModel: "Eclipse",
    ownedModels: ["Eclipse", "LTD-EC1000", "LTD-TELE"],
    endorsmentType: "Artist",
    totalPurchasesAmount: 14500,
    address:{
        country: "Israel",
        city: "Modi'in",
        phone: '+972524653625'
    }
}, {
    id: 1428759,
    name:"Willie Adler",
    bands: ["Lamb of God", "Burn the Priest"],
    customModels:["Warbird"],
    prefferedModel: "Eclipse",
    ownedModels: ["Eclipse", "LTD-EC1000", "WE-Warbird", "Eclipse E-II"],
    endorsmentType: "Fully endorsed",
    totalPurchasesAmount: 34999,
    address:{
        country: "USA",
        state: "Virginia",
        city: "Richmond",
        phone: '+19705551424'
    }
}, {
    id: 4499567,
    name:"Richard RZK",
    bands: ["RAMMSTEIN"],
    customModels:["RZK"],
    prefferedModel: "RZK",
    ownedModels: ["Eclipse", "RZK"],
    endorsmentType: "Fully Endorsed",
    totalPurchasesAmount: 49000,
    address:{
        country: "Germany",
        state: "HITLERSHTAZEN",
        city: "HEILCITY",
        phone: '+4915125124'
    }
}]
// Write function to perfrom the following:
// Print all the artists (print only the names) that have spent more then 10,000 purchasing from ESP
// Print all the artists that are active in more then one band
// Print all the artists that are fully endorsed
// Print all the artists from Israel
// Print all the artists that own more then 2 ESP guitars
// Print all the artists that have a custom model
// BONUS: Write a function that recives the rooster array, an artist id, and an object with updated data(could be any data, no need to check its ok), and updates the rooster.
// * Notice the function does not return a new array, but actually updates (mutates) the array it recives.
// ** Ofcourse its a big nono, but its just for practice
// Example (bonus):
// const idToUpdate = 4499567, updatedData = { address: { state: "SHTRAZENPLATZ", city:"HITLERTOWN" }}
// myBonusFunc(espArtistsRooster, idToUpdate, updatedData) => This will return nothing, but after its ran the new artists rooster will look like this:
[{
  // Razi blablabla
}, {
    // Yotam blabla
}, {
    // Willie bla bla
}, {
    id: 4499567,
    name:"Richard RZK",
    bands: ["RAMMSTEIN"],
    customModels:["RZK"],
    prefferedModel: "RZK",
    ownedModels: ["Eclipse", "RZK"],
    endorsmentType: "Fully Endorsed",
    totalPurchasesAmount: 49000,
    address:{
        country: "Germany",
        state: "SHTRAZENPLATZ", // THIS UPDATED
        city: "HITLERTOWN", // THIS UPDATED
        phone: '+4915125124'
    }
}]