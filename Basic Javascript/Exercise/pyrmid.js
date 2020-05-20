//כתוב פונקציה שמקבלת מספר שורות ומדפיסה םירמידה של כוכביות עם ארוך שורות כמו המספר שהיא קיבלה

const myFunc = (number) => {
    let kochav = "*";
    let space = "";
    let spacesNumber = number - 1;
    
    for(let i = 0; i < number; i++) {
        for(let a = 0; a < spacesNumber; a++) {
            space = space + " ";
        }
            console.log(`${space}${kochav}`);
            kochav = kochav + "**"
            space = ""
            spacesNumber = spacesNumber - 1
        }
    }
            


