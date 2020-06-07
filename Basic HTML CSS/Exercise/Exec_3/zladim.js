let squares = document.querySelectorAll("span");

    squares.forEach(x => {
        while (x.textContent.length > 1){
            let tenth = Math.floor((parseInt(x.textContent) / 10));
            let units = Math.floor((parseInt(x.textContent) % 10));
            let sum = tenth + units
            x.textContent = sum;
            
            } 
            

            
        
    })


// Finding the biggest square and make him show the sum of all the other squares while
// erasing all the numbers from the other squares

let squares = document.querySelectorAll("span");
let biggestSquare = 0;
let sum = 0
squares.forEach(x => {
    if(x.offsetHeight * x.offsetWidth > biggestSquare)
        biggestSquare = x;
        sum = sum + parseInt(x.textContent);
        x.textContent = "";
})

biggestSquare.textContent = sum;



//Check if the number inside the square is one digit or two digits.
// if its two digits randomize a number between 11 - 99.
//if its one digit randomize a number between 1 - 9.

let squares = document.querySelectorAll("span");
squares.forEach(x => {
    if(x.textContent.length < 2){
        x.textContent = Math.floor(Math.random() * 9) + 1; 
         
    } else if(x.textContent.length > 1){
        x.textContent = Math.floor(Math.random() * 88) + 11; 
    }
})




let squares = document.querySelectorAll("span");
let numArray = [];
    squares.forEach(x => {
        numArray.push(x.textContent)
    })
    numArray.sort((a, b) => a - b);
    let firstRow = document.querySelectorAll(".first_row");
    let smallestNum = Math.min(...numArray);

    firstRow.forEach(x => {
        x.textContent = smallestNum;
        numArray.shift();
        smallestNum = Math.min(...numArray);
    })

    numArray.sort((a, b) => b - a);
    let secondRow = document.querySelectorAll(".second_row");
    let biggestNum = Math.max(...numArray);

    secondRow.forEach(x => {
        x.textContent = biggestNum;
        numArray.shift();
        biggestNum = Math.max(...numArray);
    })
       
     
    
    squares.forEach(x => {
        x.textContent = smallestNum;
        numArray.shift();
        smallestNum = Math.min(...numArray);
    })







