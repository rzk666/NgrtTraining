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

// כתוב פונקציה שמקבלת מערך ומדפיסה את כל האיברים שנמצאים במקומות זוגיים במערך

const funk = (myArray) => {
    for (i = 0; i < myArray.length; i = i + 2) {
        console.log(myArray[i]);
    }
}


// כתוב פונקציה שמקבלת מערך ומוציאה רק את המספרים הזוגיים במערך
const funk = (myArray) => {
    for (let i = 0; i < myArray.length; i++) {
        if(myArray[i] % 2 === 0) {
            console.log(myArray[i]); 
        }
        
    }
}

// כתוב פונקציה שמקבלת מערך ועושה:
// אם האיבר הנוכחי הוא לא מחרוזת תדפיס "Not a string"
// אם האיבר הנוכחי הוא כן מחרוזת היא בודקת האם עד החצי של המחרוזת קיימת התו איי אם כן היא מדפיסה היט אם לא היא מדפיסה פולס

const funk2 = (myArray) => {
    for (i = 0; i < myArray.length; i++) {
        if(typeof myArray[i] !== "string") {
            console.log("Not a string");
        } else if(myArray[i].includes("a")) {
            console.log("HIT");
            
        } else {
            console.log("false");
        }
    }
}

// תכתוב פונקציה שמקבלת מערך אם היא מוצאת בו את המספר 15 באותו רגע היא מדפיסה לי "זלדים" ומפסיקה לרוץ.

const funk3 = (myArray, number) => {
    let i = 0;
    let wasFound = false;
    while(i < myArray.length && !wasFound) {
        if(myArray[i] === number){
            console.log("ZLADIM");
            wasFound = true
        } 
            i = i + 1;
        
    } 

}

// כתוב תוכנית שקולטת מהמשתמש שני מספרים
// וקולטת ממנו קלט לתוך מערך
// הקליטה לתוך המערך תפסיק כשהשמשתמש יכניס -1

const num = [];
let x = parseInt(prompt("Enter a number"));

while(x !== -1) {
num.push(x);
x = parseInt(prompt("Enter a number"));
}
console.log(num);



// כתוב תוכנית שקולטת מהמשתמש מספרים ומכניסה אותם למערך 
// עד שהמשתמש מכניס -1 
// לאחר מכן התוכנית תקלוט שתי מספרים נוספים ותדפיס את כל האיברים במערך ששוים לסכום שתי המספרים האחרונים שנקלטו

const num = [];
let x = parseInt(prompt("Enter a Number"));

while(x !== -1) {
    num.push(x);
    x = parseInt(prompt("Enter a Number"));
}

let y = parseInt(prompt("Enter first number"));
let z = parseInt(prompt("Enter second number"));

for (let i = 0; i < num.length; i++) {
    if(num[i] === y + z) {
        console.log(num[i])
        
    }
}




// כתוב תוכנית שקולטת מספרים למערך עד שהמשתמש מכניס -1
// לאחר מכן היא קולטת שתי מספרים נוספים
// והיא בודקת האם קיים זוג מספרים עוקב במערך ששווה לשתי המספרים שנקלטו בהתאמה
// ברגע שנמצאו זוג מספרים התוכנית תדפיס טרו ותפסיק לרוץ
// אחרת התוכנית תדפיס פולס

const num = [];
let x = parseInt(prompt("enter number"));

while(x !== -1) {
    num.push(x);
    x = parseInt(prompt("Enter a number"));
}

let y = parseInt(prompt("Enter first number"));
let z = parseInt(prompt('enter second number'));
let wasFound = false

for (let i = 0; (!wasFound && (i < num.length - 1)); i++) {
    if(y === num[i] && z === num[i + 1]) {
        console.log(true);
        wasFound = true;
    } 

}

// כתוב תוכנית שמדפיסה את לוח הכפל

const numCounter = [1,2,3,4,5,6,7,8,9,10];
for (i = 0; i < numCounter.length; i++) {
    for(a = 0; a < numCounter.length; a++) {
        console.log(numCounter[i] * numCounter [a])
    }
}






// כתוב תוכנית שקולטת מספרים למערך עד שהמשתמש מכניס -1
// 