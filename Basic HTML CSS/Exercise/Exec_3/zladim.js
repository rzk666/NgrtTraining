let squares = document.querySelectorAll("span");

    squares.forEach(x => {
        while (x.textContent.length > 1){
            let tenth = Math.floor((parseInt(x.textContent) / 10));
            let units = Math.floor((parseInt(x.textContent) % 10));
            let sum = tenth + units
            
            
            } 
            x.textContent = sum;

            
        
    })

