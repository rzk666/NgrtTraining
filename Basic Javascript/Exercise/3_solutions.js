// TARGILIM #3 //

// נתון האובייקט הבא:
const validator = {
    isValidMail: data => data.includes('@'),
    isValidUserName: data => data.length > 0,
    isValidPassword: data => data.length > 8,
}

// כתוב תוכניות הקולטת מייל, שם משתמש, וסיסמא מהמשתמש.
// התוכנה תוודא שהמייל, שם המשתמש, והסיסמא תקינים ותדפיס "הרשמה בוצעה בהצלחה"
// התוכנה תדפיס שגיאות בהתאם
// השתמש באובייקט ובמתודות שלו לוודא תקינות








// כתוב פונקציה שמקבלת מערך של מחרוזות, ומדפיסה את המחרוזות בתוך מלבן בצורה הבאה:
// ["hello", "test"]
// *********
// * hello *
// * test  *
// *********
// ["hi", "im", "rozadin"]
// ***********
// * hi      *
// * im      *
// * rozadin *
// ***********



const wtFunc = (array) => {
    let kochavCounter = "****";
    let maxlength = 0;
    let start = "* ";
    let end = " *";
    let space = "";

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i].length > array[i + 1].length) {
            maxlength = array[i].length
        }   
    }   
    for (let i = 0; i < maxlength; i++) {
        kochavCounter = kochavCounter + "*";
    }

    console.log(kochavCounter);

    for (let i = 0; i < array.length; i++) {
        for (let a = array[i].length; a < maxlength; a++) {
            space = space + " "
        }
        console.log(`${start}${array[i]}${space}${end}`);
            space = "";  
        
    }
    console.log(kochavCounter);
}



// כתוב משחק בול פגיעה
// התכנית תג'נרט מספר רנדומלי בן 4 ספרות, לאחר מכן יזין מספרים בני 4 ספרות וינסה לנחש את המספר
// על כל קלט שיזין המשתמש הוא יקבל את הפלט הבא:
// קיים: x פגיעות: y
// קיים מציין כמה מספרים מתוך המספר שהכניס המשתמש נמצאים בסדר כלשהו במספר המקורי, ופגיעות יציין כמה מספרים מהמספר שהזין המשתמש נמצאים בדיוק באותו המקום
// דוגמא: מספר נבחר 4235
// input: 3164 -> output קיים:2 פגיעות:0
// input: 4530 -> output קיים:1 פגיעות:2
// input: 9871 -> output קיים:0 פגיעות:0
// התכנית תדפיס ברכות ותסיים לרוץ כשהמשתמש ינחש את המספר בהצלחה
// עלייך לוודא תקינות קלט

// let prog = (Math.floor(Math.random() * 8999) + 1000).toString();
let prog = "1123";
let user = prompt("Enter number");
let hits = 0;
let exist = 0;
// let progThousands = progNum / 1000;
// let progHundreds = progNum % 1000 / 100;
// let progTen = progNum % 100 / 10;
// let progUnits = progNum % 10;

while (user !== prog) {

    for(let i = 0; i < user.length; i++) {
        if (user[i] === prog[i]) {
            hits = hits + 1;
        }
    }
        for (let a = 0; a < user.length - 1; a++ ) {
            if (user[i] === prog[a + 1] ) {
                exist = exist + 1;
            }    
            
    }
}
    console.log(`Hits: ${hits}, Exist: ${exist}`);




while (user !== prog) {

    if (prog !== user) {
        for(let i = 0; i < user.length; i++) {
            if (user[i] === prog[i]) {
                hits = hits + 1;
            } else if (user[i] === prog[0] || user[i] === prog[1] ||  user[i] === prog[2] ||  user[i] === prog[3]) {
                exist = exist + 1
            }
        }
        console.log(`Hits: ${hits}, Exist: ${exist}`);
    }
    
    user = prompt("Enter number");
    exist = 0;
    hits = 0;
}
    if (prog === user) {
    console.log("BRACHOT!!!");
}


// CURRENT SOLUTION //
let prog = "11231234";
let user = prompt("Enter number");
let hits = 0;
let exist = 0;
let array = prog.split("");

        
        while (user !== prog) {

            if (user.length !== prog.length || typeof parseInt(user) !== typeof 1) {
                console.log("ERROR");
            } else {
            for(let i = 0; i < user.length; i++) {
                if (user[i] === array[i]) {
                    hits = hits + 1;
                    array.splice(i, 1);
                    array.splice(i, 0, "X");
                } else {
                    let wasFound = false;
                    for (let a = 0; a < user.length && !wasFound; a++) {
                        if (user[i] === array[a]) {
                            exist = exist + 1;
                            wasFound = true;
                            array.splice(a, 1);
                            array.splice(a, 0, "X");
                        }
                    }  
                }
            }
            console.log(`Hits: ${hits}, Exist: ${exist}`);
            
            
        }
        user = prompt("Enter number");
        exist = 0;
        hits = 0;
        }
        console.log("BRACHOT!!!");
    

        
        
        
        
        




