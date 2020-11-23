let squares = document.querySelectorAll("span");

for(let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", (e) => {
        targetedSquare = e.target;
        let url = new URL(document.location)
        url.searchParams.set("height", targetedSquare.offsetHeight);
        url.searchParams.set("width", targetedSquare.offsetWidth);
        
        console.log(url);
        

        

    })
}


















// Square Info Page:

let SquareContainer = document.querySelector(".square");
function goBack() {
    window.history.back()
    }


let infoDiv = document.querySelector(".info_container")

function loadFunc () {
    for(let i = 0; i < 3; i++){
        let userNum = document.createTextNode(parseInt(prompt("Enter Num")));
        let createNewDiv = document.createElement("DIV");
        createNewDiv.appendChild(userNum);
        createNewDiv.classList.add("number_hide");
        infoDiv.appendChild(createNewDiv);
        
    }
}

function switchClass () {
    let numClass = document.querySelector(".number_hide")
    
        numClass.classList.remove("number_hide");
        numClass.classList.add("number_active");
    
}

setInterval(switchClass, 2000);







    


