// כתוב פונקציה שמקבלת שתי מערכים עם מספרים ומחזירה את סכום המספרים הגדול יותר

const myFunc = (array1, array2) => {
    const array1sum = array1.reduce((a, b) => a = a + b, 0);
    const array2sum = array2.reduce((a, b) => a = a + b, 0);

    return Math.max(array1sum, array2sum);
}

// נתון מערך של אובייקטים, תכניס למשתנה רק את האובייקטים במערך שהפרופרטי יוזרניים שלהם גדול מ8 אותיות

const myFunc = (array) => {
    const longUserName = array.filter(x => x.username.length > 8);
    return longUserName;
}

// כתוב תוכנית שיודע לקחת מערך ולהדפיס את הסוג של כל איבר במערך

const array = [1, "test", 3, 4, true, "else"];
const typeOf = array.map(x => console.log(typeof x));

// קח מערך ותחזיר מערך שעל כל איבר תעשה:
// אם הוא מספר תחזיר לי אותו פלוס 100
// אם הוא מחרוזת תחזיר אותו עם פלוס טסט
// ואם הוא לא מספר ולא סטרינג תחזיר מחרוזת שכתוב זלד

const array = [1, "test", 3, 4, true, "else"];
const newArray = array.map(x => {
    if(typeof x === typeof "number") {
        return x = x + 100
    } 
    else if(typeof x === typeof "string") {
        return x = x + "test";
    } else {
        return x = "ZLD"
    }
})

// תרגיל פחדים מחדש
let prog = "11231234";
let user = prompt("Enter number");
let hits = 0;
let exist = 0;

let progArray = prog.split("");
let userArray = user.split("");

        
        while (user !== prog) {

            if (user.length !== prog.length || typeof parseInt(user) !== typeof 1) {
                console.log("ERROR");
            } else {
            userArray.map(x => {
                if (userArray[x] === progArray[x]) {
                    hits = hits + 1;
                    progArray.splice(x, 1);
                    progArray.splice(x, 0, "X");
                } else {
                let wasFound = false;
                userArray.map(y => {
                    if (userArray[x] === progArray[y] && !wasFound) {
                        exist = exist + 1;
                        wasFound = true;
                        progArray.splice(y, 1);
                        progArray.splice(y, 0, "X");
                    }
                })
                
            }  
            
        })    
            console.log(`Hits: ${hits}, Exist: ${exist}`);   
        }
            user = prompt("Enter number");
            exist = 0;
            hits = 0;
                    
            }
            console.log("BRACHOT!!!");
        



// כתוב פונקציה שמקבלת מערך ומחזירה אותו ממויין מהקטן לגדול


//פונקציה שעובדת כל עוד אין מספרים כפולים
const myFunc = (array) => {
    let arrayClone = [...array];
    let emptyArray = [];
    let counter = 0;


    while (arrayClone.length !== 0) {
        let min = Math.min(...arrayClone);
            emptyArray.push(min);
            arrayClone = arrayClone.filter(x => x !== min);
           
        }
            console.log(emptyArray);
    }

// פונקציה שעובדת אם יש מספרים כפולים
    const myFunc = (array) => {
        let arrayClone = [...array];
        let emptyArray = [];
        let counter = 0;
    
    
        while (arrayClone.length !== 0) {
            let min = Math.min(...arrayClone);
                arrayClone = arrayClone.filter(x => x !== min);
                for(i = 0; i < array.length; i++) {
                    if(array[i] === min) {
                        emptyArray.push(min);                    
                    }
                }
            }
            console.log(emptyArray);
        }


                    
       



