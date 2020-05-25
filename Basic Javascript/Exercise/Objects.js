// Write a function that recives an array of object and returns a new object made of all the first properties of the objects in the array.
// * If a value is being overwritten, the function will also print "overwrite"
// ** Handle empty objects however you'd like, but make sure you address it in the code.
// Example:
const myArray = [{ test:"david" }, { rozadin:"hagever" }, { for:"allah", dudu:"farok" }];

const myFunc = (array) => {
    let newObject = {};
    
    array.map(x => {
        
        const firstKey = Object.keys(x)[0];
        if(firstKey) {
            newObject[firstKey] = x[firstKey];
            
        }
    })

    return newObject
}
       
        
     
        
     
         
           
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


const myFunc = (pyramidArray) => {
    

    pyramidArray.map(x => {
        let spacesNumber = x.rows - 1
        let kochav = "*";
        let space = "";
        

        // Faulted condition! Notice you put the rows check inside the direction check.
        // If I'll insert a pyramid object that has a valid direction (reverse \ normal) and an invalid rows number
        // The program will fail. Think how to write this properly. this isn't hard don't waste too much time on it.
        if(x.direction !== "normal" && x.direction !== "reverse") {
            console.log("ERR: Invalid direction"); 
        } if(typeof x.rows !== "number") {
            console.log("ERR: Invalid rows ");
        }

        if (x.direction === "normal") {
            for(let a = 0; a < x.rows; a++) {
                for(let i = 0; i < spacesNumber; i++) {
                    space = space + " ";
                }
                console.log(`${space}${kochav}`);
                kochav = kochav + "**"
                space = ""
                spacesNumber = spacesNumber - 1
            }
                    
            } else if(x.direction === "reverse") {
                for(let a = 0; a < x.rows; a++) {
                    for(let i = 0; i < x.rows - 1; i++) {
                        kochav = kochav + "**"
                    }
                    console.log(`${space}${kochav}`);
                    space = space + " "
                    kochav = "*"
                }
            }
        })
    }
                    
                    
                        





   
    
    



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

const espFunc = (artistRooster) => {
    const bigSpenders = []; // This array reffers to the first task.
    const hasMultipleBands = [];
    const fullyEndorsedArtists = [];
    const artistsFromIsrael = [];
    const twoGuitarsOrMore =[];
    const haveCustomModel = [];

    artistRooster.map(currentArtist => {
        const { totalPurchasesAmount, name, bands, endorsmentType, address, ownedModels, customModels } = currentArtist;
        const { country } = address;
        // Handling more then 10,000 spenders
        if (totalPurchasesAmount > 10000) {
           bigSpenders.push(name);
        }
        // Handling members with multiple bands
        if (bands.length > 1) {
            hasMultipleBands.push(name);
        }

        if (endorsmentType === "Fully Endorsed" || endorsmentType === "Fully endorsed" ) {
            fullyEndorsedArtists.push(name);
        }

        if (country === "Israel") {
            artistsFromIsrael.push(name);
        }

        if (ownedModels.length > 1) {
            twoGuitarsOrMore.push(name);
        }

        if (customModels.length > 0) {
            haveCustomModel.push(name);
        }
        
    })
        console.log(`Artists that spent more then 10000: ${bigSpenders}`);
        console.log(`artists that play in more then one band: ${hasMultipleBands}`);
        console.log(`artists that are fully endorsed: ${fullyEndorsedArtists}`);
        console.log(`artists that live in Israel: ${artistsFromIsrael}`);
        console.log(`artists that have two guitars or more: ${twoGuitarsOrMore}`);
        console.log(`artists that have custom model: ${haveCustomModel}`);
}







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


//{ address: { state: "SHTRAZENPLATZ", city:"HITLERTOWN" }}


const espUpdate = (array, id, updatedData) => {
    const idToUpdate = id
    array.map(x => {
        const keyToUpdate = Object.keys(x);
        const updatedDataKeys = Object.keys(updatedData);
        if (x.id === id) {
            for(i = 0; i < keyToUpdate.length; i++) {
                if(keyToUpdate[i] === updatedDataKeys[0] ) {
                    x[updatedDataKeys] = updatedData 
                }
            }
            }
        })
        console.log(array)
}

const updateArtist = (artistsRooster, idToUpdate, updatedData) => {
    artistsRooster.map(currentArtist => {
        // Notice how it looks better and makes more sense with proper naming
        if (idToUpdate === currentArtist.id) {
            // Using decustruction in this order will make sure we get all the
            // keys\values of the current artist, and then overwrite whatever we recived in the updatedData object
            currentArtist = {...currentArtist, ...updatedData};
        }
    })
    console.log(artistsRooster);
}






// כתוב פונקציה שקולטת 2 מספרים ומדפיסה את המכפלה המשותפת הכי קטנה שלהם
// 75/100 - This works and its a great solution, but why using an array..? makes no sense.

const RAZI_smallestMultiplier = (num1, num2) => {
    let currentMultiplier = 1;
    let currentMultiplication = num1 * multiplier;
    
    while (currentMultiplication % num2 !== 0) { // There's no need to use an index here, because eventualy this will allways happen so the loop won't be infinite
        multiplier = multiplier + 1
        currentMultiplication = num1 * multiplier;
    }
    console.log(currentMultiplication)
}

const smallestMultiplier = (num1, num2) => {
    let multiplier = 1;
    let numSum = [num1 * multiplier];
    let i = 0;
    
    while (numSum[i] % num2 !== 0) {

        multiplier = multiplier + 1
        numSum.push(num1 * multiplier);
        i = i + 1
    }
    console.log(numSum[i])
}


// כתוב פונקציה שקולטת 2 מספרים ומדפיסה את המחלק הכי גדול שלהם
// 80/100 Looking good

const biggestDivider = (num1, num2) => {
    
    let divider = 1; // Why using this divider? simply make the 'i' in the for loop start from 1 and the term to be i <= biggestNum
    let dividerSum = 0 // biggestCommonDivider \ biggestDivider would be a much better name then dividerSum. Pay attention to naming, its important!
    let biggestNum = Math.max(num1,num2)
    
    for(i = 0; i < biggestNum; i++) {
        if(Number.isInteger(num1 / divider) === true && Number.isInteger(num2 / divider) === true ) { // Remember, using === true has no meaning...
        // Should be written like this: if(Number.isInteger(num1 / divider) && Number.isIntegar(num2 / divider)) {...}
            dividerSum = divider
        }
        divider = divider + 1;
    }

    console.log(dividerSum);
}  




 


