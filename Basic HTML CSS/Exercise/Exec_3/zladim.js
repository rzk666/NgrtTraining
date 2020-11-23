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


// make the numbers appear on the squers from the smallest to biggest in order. from top to bottom from right to left.

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
       
     
    //squares.forEach(x => {
        //x.textContent = smallestNum;
       // numArray.shift();
        //smallestNum = Math.min(...numArray);
    //})


// 1 - 10: RED
// 11 - 20: BLUE
// 21 - 30: YELLOW
// 31 - 40: GREY
// 41 - 50: WHITE
// 51 - 60: GREEN
// 61 - 70: PINK
// 71 - 80: TCHELET
// 81 - 90: ORANGE
// 91 - 99: PURPLE


let squares = document.querySelectorAll("span");
squares.forEach(x => {
    if(x.textContent < 11) {
        x.style.backgroundColor = "red";
    } else if(x.textContent > 10 && x.textContent < 21) {
        x.style.backgroundColor = "blue";
    } else if(x.textContent > 20 && x.textContent < 31) {
        x.style.backgroundColor = "yellow";
    } else if(x.textContent > 30 && x.textContent < 41) {
        x.style.backgroundColor = "grey";
    } else if(x.textContent > 40 && x.textContent < 51) {
        x.style.backgroundColor = "white";
    } else if(x.textContent > 50 && x.textContent < 61) {
        x.style.backgroundColor = "green";
    } else if(x.textContent > 60 && x.textContent < 71) {
        x.style.backgroundColor= "pink";
    } else if(x.textContent > 70 && x.textContent < 81) {
        x.style.backgroundColor = "lightblue";
    } else if(x.textContent > 80 && x.textContent < 91) {
        x.style.backgroundColor = "orange"
    } else {
        x.style.backgroundColor = "purple";
    }

})



