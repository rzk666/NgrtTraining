// TARGILIM //

// כתוב פונקציה שמקבלת 3 צלעות של משולש ומחזירה את שטח המשולש

const triangle = (a , b , c) => {
    let s = (a + b + c) / 2;
    let triArea = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return triArea;
}

// כתוב פונקציה שמקבלת מחרוזת ומחזירה את המחרוזת הפוך
// Example: string = "yotam" || myFunc(string) = "matoy"

const upSide = (string) => {
    let newString = string.split(``);
    newString =  newString.reverse().join(``);  
    
    return newString;
}

// משחק הניחושים: כתוב תוכנה שקולטת מהלקוח מספרים. בעבור כל מספר שיכניס הלקוח, יוגרל מספר רנדומלי מ1 ל 100. אם קלט הלקוח תואם למספר שהוגרל, יודפס אמת, אחרת יודפס שקר. הקלט יפסק כשהלקוח יזין -1
// * הערה: להיעזר בגוגל כדי להגריל מספר רנדומלי *

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

let x = parseInt(prompt("Enter first number"));
let y = parseInt(prompt("Enter second number"));

while(x !== -1 && y !== -2 && y !== -1 && x !== -2) {
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


const myFunc = (num1, num2) => {
    console.log(`the bigger number is ${Math.max(num1,num2)}, the smaller number is ${Math.min(num1,num2) 
    }, the value of ${num1} with power of ${num2} is ${Math.pow(num1, num2)}, the square root of ${num1} is ${Math.sqrt(num1)}, 
    and the square root of ${num2} is ${Math.sqrt(num2)}` );    
}





// כתוב תוכנית שמדפיסה את כל התאריכים בשבוע הקרוב בפורמט הבא:
// MM/DD/YYYY
// * למד איך לעבוד עם תאריכים. חפש בגוגל * //

let d = new Date();
let year = d.getFullYear();
let month = d.getMonth() + 1;  
let days = d.getDate();

let weekArray= [];

for (i = 1; i < 8; i++) {
    weekArray.push(`${days + i}/${month}/${year}`);
}

console.log(weekArray);
    




const today = new Date()
const tomorrow = new Date(today)
for (i = 1; i < 8; i++) {
console.log(tomorrow)
tomorrow.setDate(tomorrow.getDate() + i)

let curr = new Date 
let first = curr.getDate() - curr.getDay() + i 
}



// כתוב פונקציה שמקבלת מחרוזת.
// הפונקציה תחזיר את המחרוזת ללא מספרים
// Example: string = "13he5ll3o" | myFunc(string) = "hello" |||| string = "test" | myFunc(string) = "test" 
