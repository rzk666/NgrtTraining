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





// תדפיס את כל המספרים שמתחלקים ב3 בלי שארית

const num = (myArray) => {
    for (i = 0; i < myArray.length; i++) {
        if(myArray[i] % 3 === 0) {
            console.log(myArray[i]);
        }
    }
}




// תדפיס פירמדה 1/3/5/7/9

let kochav = "*";
let space = " ";

    
for (i = 4; i > -1; i = i - 1) {
        console.log(" " + i)
    }




    // תוכנית שקולטת 100 מספרים ומחזירה את הסכום שלהם
    
    let sum = 0;
    for (i = 0; i < 5; i++){
        let x = parseInt(prompt("Enter number"));
        sum = sum + x;
    }
    console.log(sum);
        
        

// קלוט מספר וחשב כמה שנים חודשים וימים יש במספר


let x = parseInt(prompt("enter Number"));
let year = x / 365;
let month = x / 12;
let days = x;

console.log(`in the number you insert you have ${year} years, ${month} monthes, and ${days} days`);

// קלוט מחרוזות מהמשתמש לתוך מערך עד אשר יוזן הקלט "זין", הדפס את כל המחרוזות במערך שמתחילות ב "זלד"
// **** לא מצליח להדפיס את המילים שמתחילות בזלד ******

const strings = [];
let string = prompt("enter a string");

while(string !== "zain") {
    strings.push(string);
    string = prompt("enter a string")
}

for (i = 0; i < strings.length; i++) {
    if(strings[i].startsWith("zld")) {
        console.log(strings[i]);
    }
}




 
let strings = ["zldhello"];
if(strings[0].startswith ==="zld") {
        console.log(strings[0]);
}






// קלוט מחרוזת ותו ביקורת מהמשתמש. הדפס את כמות הפעמים בה מופיעה ספרת הביקורת במחרוזת

let x = prompt("enter a string");
let y = prompt("enter a letter");
let count = 0 

for (i = 0; i < x.length; i++) {

    if(x.charAt(i) === y) {
        count = count + 1;
    }
}

    console.log(count);



    // קלוט מספרים מהמשתמש והדפס עבור כל מספר האם הוא פולינדרום*. הקלט יעצר כשהמשתמש יזין "-1"
    
    let num = [];
    let numbers = parseInt(prompt("Enter a number"));

    while(numbers !== -1) {
        num.push(numbers);
        numbers = parseInt(prompt("enter a number"));
    }


    for(i = 0; i < num.length; i++) {

        if((num[i] / 100) === (num[i] % 10)) {        
        console.log(num[i]);
        }
    }


    // כתוב פונקציה שמקבלת מערך ומחרוזת
    // הפונקציה תיצור מערך חדש שיכלול רק את המחרוזות מהמערך המקורי שמכילות את ערך המחרוזת הנקלטת


    
    const myFunc = (array, string) => {
        let newArray = [];

        for(i = 0; i < array.length; i++) {
            if(array[i].includes(string)) {
                newArray.push(string)
            } 
        }
        return newArray;
    }
                
            

    
        


    //כתוב פונקציה הקולטת מספר ומחזירה את מספר הספרות שלו
    // 145 = 3


const digits = (num) => {
    let count = 0

    while (num !== 0) {
        num / 10; 
        count = count + 1;
    }
}

    console.log(`the number you inserted have ${count} digits`);






   
   
   
    const number = (num) => {
        let length = num.toString().length;
        console.log(length)
    }



        

const x = (num) => {
    let lastDig = num / 10
    console.log(lastDig);
}


