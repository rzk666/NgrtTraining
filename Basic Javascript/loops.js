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







let i = 0;
while(i < myArray.length()) {
    console.log(myArray[i]);
    i = i + 1;
}