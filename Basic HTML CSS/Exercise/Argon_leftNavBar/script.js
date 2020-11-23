// let navItemContainer = document.querySelectorAll(".nav_item_container");
    
// for(let i = 0; i < navItemContainer.length; i++) {
//     navItemContainer[i].addEventListener("click", (e) => {
//     let current = document.querySelectorAll(".nav_item_container_active");
//         if (current.length > 0) {
//           current[0].className.replace("nav_item_container_active");
//         }
    
//         // Add the active class to the current/clicked button
//         this.className += "nav_item_container_active";


//     })            
// }

function random_bg_color() {
    let square = document.querySelector(".main_page")
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    
    square.style.background = bgColor;
    
}

function create_div_main_page() {
    let mainPage = document.querySelector(".main_page_content");
    let createContainer = document.createElement("DIV");
    createContainer.classList.add("icon_container");
    let createContent = document.createElement("DIV");
    createContent.classList.add("icon_content");
    mainPage.appendChild(createContainer);    
    createContainer.appendChild(createContent);
}


let navSectionsContainer = document.querySelector(".nav_sections_container")
let navItems = document.querySelectorAll(".nav_item_container, .nav_item_container_active");

let NavSectionContainerTop = document.querySelector(".nav_sections_container_top")
let startingSection = document.querySelector(".nav_item_container_active")

    for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", (e) => {    
    navSectionsContainer.querySelector(".nav_item_container_active").classList.replace("nav_item_container_active", "nav_item_container");
    navItems[i].classList.add("nav_item_container_active");
    let textDiv = navItems[i].querySelector(".nav_item_text")
    

        if(textDiv.textContent === "Icons") {
            create_div_main_page();
            create_div_main_page();
            create_div_main_page();
            create_div_main_page();
            
        }
    })    
}
    

    
    



