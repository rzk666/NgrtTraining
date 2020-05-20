// TARGILIM //

// כתוב פונקציה שמקבלת 3 צלעות של משולש ומחזירה את שטח המשולש
// 100/100

const triangle = (a , b , c) => {
    let s = (a + b + c) / 2;
    let triArea = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return triArea;
}

// כתוב פונקציה שמקבלת מחרוזת ומחזירה את המחרוזת הפוך
// Example: string = "yotam" || myFunc(string) = "matoy"
// 100/100

const upSide = (string) => {
    let newString = string.split(``);
    newString =  newString.reverse().join(``);  
    
    return newString;
}

// משחק הניחושים: כתוב תוכנה שקולטת מהלקוח מספרים. בעבור כל מספר שיכניס הלקוח, יוגרל מספר רנדומלי מ1 ל 100. אם קלט הלקוח תואם למספר שהוגרל, יודפס אמת, אחרת יודפס שקר. הקלט יפסק כשהלקוח יזין -1
// * הערה: להיעזר בגוגל כדי להגריל מספר רנדומלי *
// 50/100 - if the user will enter a number that hits the random in the first time the program won't work.
// Also, there is no need for two loops
// Solution:
// ---------
// let userNum = parseInt(prompt("Enter number"));
// let randomNum = Math.floor(Math.random() * 101); 
// while (userNum !== -1) {
//       if (randomNum === userNum) {
//          console.log(true);
//       } else {
//          console.log(false);
//       }
//       randomNum = Math.floor(Math.random() * 101);
//       userNum = parseInt(prompt("Enter number"));
// }

let userNum = parseInt(prompt("Enter number"));
let randomNum = Math.floor(Math.random() * 101); 

while (userNum !== randomNum && userNum !== -1) {
    
    console.log(false);
    randomNum = Math.floor(Math.random() * 101);
    userNum = parseInt(prompt("Enter number"));
    for(userNum = userNum; userNum === randomNum; userNum = userNum + 1) {
        console.log(true);
        randomNum = Math.floor(Math.random() * 101);
        userNum = parseInt(prompt("Enter number"));
    }
}


    


// כתוב תוכניות שקולטת מהלקוח צמדים של מספרים, ומדפיסה אמת אם הסכום שלהם גדול מ50. הקלט יפסק כשהלקוח יזין -1 ו -2 לשני המספרים שנקלטו
// 100/100

let x = parseInt(prompt("Enter first number"));
let y = parseInt(prompt("Enter second number"));

while(x !== -1 && y !== -2 && y !== -1 && x !== -2) { // Nicer solution: while(x + y !== -3)
    if(x + y > 50) {

        console.log(true);
        x = parseInt(prompt("Enter first number"));
        y = parseInt(prompt("Enter second number"));

    } else {
    
        x = parseInt(prompt("Enter first number"));
        y = parseInt(prompt("Enter second number"));
    }


}





// כתוב פונקציה שמקבלת שני מספרים ומדפיסה:
// את המספר הגדול מהשניים
// את המספר הקטן מהשניים
// את הראשון בחזקת השני
// את השורש הריבועי של שני המספרים
// ! חובה להשתמש בספריה .Math() ! //
// * היעזר בגוגל לגבי הספריה * //
// 100/100

const myFunc = (num1, num2) => {
    console.log(`the bigger number is ${Math.max(num1,num2)}, the smaller number is ${Math.min(num1,num2) 
    }, the value of ${num1} with power of ${num2} is ${Math.pow(num1, num2)}, the square root of ${num1} is ${Math.sqrt(num1)}, 
    and the square root of ${num2} is ${Math.sqrt(num2)}` );    
}





// כתוב תוכנית שמדפיסה את כל התאריכים בשבוע הקרוב בפורמט הבא:
// MM/DD/YYYY
// * למד איך לעבוד עם תאריכים. חפש בגוגל * //
// 100/100 nice!

let d = new Date();
let year = d.getFullYear();
let month = d.getMonth() + 1;  
let days = d.getDate();

let weekArray= [];

for (i = 1; i < 8; i++) {
    weekArray.push(`${days + i}/${month}/${year}`);
}

console.log(weekArray);
    




//const today = new Date()
//const tomorrow = new Date(today)
//for (i = 1; i < 8; i++) {
//console.log(tomorrow)
//tomorrow.setDate(tomorrow.getDate() + i)

//let curr = new Date 
//let first = curr.getDate() - curr.getDay() + i 
//}



// כתוב פונקציה שמקבלת מחרוזת.
// הפונקציה תחזיר את המחרוזת ללא מספרים
// Example: string = "13he5ll3o" | myFunc(string) = "hello" |||| string = "test" | myFunc(string) = "test" 
// 50/100 - We have 2 problems here - first is the if condition, and second is the fact that using a method (like .splice()) on a string mutates the string.
// it is problematic here because when you change the newString using splice, newString.length also changes but the loop still increases i, which will make you skip one cell forward
// and also possibly leak out of array
// ex: string = "t2sg6a"
// after first loop run => string = "t24g6a" i = 1
// after second loop run => string = "t4g6a" i = 2
// after third loop run => string = "t4sg6a" i = 3 || NOTICE WE SKIPPED 4


const myFunc = (string) => {
    let newString = string.split(``); // Why you use .split()? why not just newString = string?
    
    for (let i = 0; i < newString.length; i++) {

        if (typeof newString[i] === "number") { 
            newString.splice(i , 1);           
        }                                       
    }
    return newString =  newString.join(``); // Why you use .join()? why not just return newString?
}

// Not a prefferable solution, always try avoid mutating variables if possible.
const myFuncSolutionOption1 = (string) => {
    let newstring = string;
    for (let i = 0; i < newString.length; i++) {

        if (typeof parseInt(newString[i]) === "number") { 
            newString.splice(i , 1);
            i--; // this decreases i by 1
        }                                       
    }
    return newString;
}

// Better option in my opinion
const myFuncSolutionOption2 = (string) => {
    let newString = '';
    for (let i = 0; i < string.length; i++) {
        if (typeof parseInt(string[i]) !== "number") {
            newString += string[i]; // equivelent to writing newString = newString + string[i]
        }
    }
    return newString;
}


