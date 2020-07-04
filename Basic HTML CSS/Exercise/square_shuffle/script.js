// function loadFunc () {
//     let rowWrapper = document.querySelector(".rows_wrapper");
//     let rowsCount = prompt("Enter number of rows");
//     let squareCount = prompt("Enter square number");
    
//         for(let i = 0; i < rowsCount; i++){
//             let createNewRow = document.createElement("DIV");
//             for(let i = 0; i < squareCount; i++) {
//                 let userInput = document.createTextNode(prompt("Enter a word"));
//                     let userBackground = prompt("Enter Background Color");
//                     let createNewDiv = document.createElement("DIV");
//                     createNewRow.classList.add("row_container")
//                     createNewDiv.classList.add("square");
//                     createNewDiv.style.background = userBackground
//                     createNewDiv.appendChild(userInput);
//                     createNewRow.appendChild(createNewDiv);
                
//             }
       
//             rowWrapper.appendChild(createNewRow);
//         }

//     }
        

    function loadFunc () {
        let rowWrapper = document.querySelector(".rows_wrapper");
        let rowsCount = prompt("Enter number of rows");
        let squareCount = prompt("Enter square number");
        
            for(let i = 0; i < rowsCount; i++){
                let createNewRow = document.createElement("DIV");
                for(let i = 0; i < squareCount; i++) {
                    let userInput = prompt("Enter a word");
                    if(userInput === "-1") {
                        let createNewDiv = document.createElement("DIV");
                        createNewRow.classList.add("row_container")
                        createNewDiv.classList.add("square");
                        createNewDiv.style.background = "#222d3f";
                        createNewRow.appendChild(createNewDiv);
                   
                }  else if(userInput != "-1") {
                        let userBackground = prompt("Enter Background Color");
                        let userInputNode= document.createTextNode(userInput)
                        let createNewDiv = document.createElement("DIV");
                        createNewRow.classList.add("row_container")
                        createNewDiv.classList.add("square");
                        createNewDiv.style.background = userBackground
                        createNewDiv.appendChild(userInputNode);
                        createNewRow.appendChild(createNewDiv);
                    }
                }
                rowWrapper.appendChild(createNewRow);
            }
        }
           
    
    