// TARGILIM #2 //

// כתוב פונקציה שמקבלת אובייקט משתמשים ומספר שנים, הפונקציה תחזיר אובייקט עם גילאי האנשים לאחר מספר השנים
// דוגמא
// usersObject = { david: 15, razi:27, ngrt:28 } // זה המבנה של אובייקט משתמשים
// myFunc(usersObject) should return { david: 20, razi:32, ngrt:33}






// כתוב פונקציה שמקבלת מחרוזת. הפונקציה תצמצם כל רצף תווים עוקבים לתו אחד:
// דוגמא
// string = "hhhhelllllooooo"
// myFunc(string) should return "helo"

const myFunc = (string) => {
    let newString = string.split(``);
    let newArray = [];
    
    for (let i = 0; i < newString.length; i++) {

        if (newString[i] !== newString[i + 1]) {
            newArray.push(newString[i]);
        }

    }
    
    return newArray.join(``);
}





// כתוב מחשבון. המחשבון יעבוד בצורה הבאה: המשתמש יזין 2 מספרים ואת אחת מהפעולות הבאות כתו בודד:
// * / % + -
// המחשבון יעבד את הקלט בהתאם וידפיס את התוצאה
// הקלט יפסק כשהמשתמש יזין 0 0
// Note -> Learn and use switch case
// Note -> Make sure dividing by zero is handled properly


let num1 = parseInt(prompt("Enter first num"));
let num2 = parseInt(prompt("Enter second num"));
let action = prompt("Enter action")
    
switch (action) {
    case "+":
    action = "+";
    break;

    case "-":
    action = "-";
    break;

    case "*":
    action = "*";
    break;

    case "/":
    action = "/";
    break;

    default:
        console.log("This is not a mathematical action");
}



    while (num1 !== 0 && num2 !== 0) {
        let sum = eval(num1 + action + num2);
        console.log(sum);

        let num1 = parseInt(prompt("Enter first num"));
        let num2 = parseInt(prompt("Enter second num"));
        let action = prompt("Enter action");

    }

