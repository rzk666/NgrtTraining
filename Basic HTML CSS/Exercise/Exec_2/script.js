function random_bg_color_header() {
    let headerContainer = document.querySelector(".header_container");
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    headerContainer.style.background = bgColor;
    }
    


function random_bg_color_footer() {
        let fotterContainer = document.querySelector(".footer");
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        fotterContainer.style.background = bgColor;
        }
        


        function random_bg_color_site_container() {
            let mainSiteContainer = document.querySelector(".main_site_container");
            var x = Math.floor(Math.random() * 256);
            var y = Math.floor(Math.random() * 256);
            var z = Math.floor(Math.random() * 256);
            var bgColor = "rgb(" + x + "," + y + "," + z + ")";
            mainSiteContainer.style.background = bgColor;
            }
            



            function random_bg_color_main_news_container() {
                let mainNewsContainer = document.querySelectorAll(".main_news_text_container");
                var x = Math.floor(Math.random() * 256);
                var y = Math.floor(Math.random() * 256);
                var z = Math.floor(Math.random() * 256);
                var bgColor = "rgb(" + x + "," + y + "," + z + ")";
                for(let i = 0; i < mainNewsContainer.length; i++) {
                    mainNewsContainer[i].style.background = bgColor;
                }
            }
            

            function random_bg_color_news_flash_header() {
                let newsFlashHeader = document.querySelector(".news_flash_header");
                var x = Math.floor(Math.random() * 256);
                var y = Math.floor(Math.random() * 256);
                var z = Math.floor(Math.random() * 256);
                var bgColor = "rgb(" + x + "," + y + "," + z + ")";
                newsFlashHeader.style.background = bgColor;

            }
            

            
            function random_bg_color_news_flash_text() {
                let newsFlashText = document.querySelectorAll(".news_flash_text");
                var x = Math.floor(Math.random() * 256);
                var y = Math.floor(Math.random() * 256);
                var z = Math.floor(Math.random() * 256);
                var bgColor = "rgb(" + x + "," + y + "," + z + ")";
                for(let i = 0; i < newsFlashText.length; i++) {
                    newsFlashText[i].style.background = bgColor;
                }
            }

            // function random_articles_num() {
            //     let articlesArray = document.querySelectorAll(".main_news_container")
            //     randomNum = Math.floor((Math.random() * 4) + 1);
                
            //     for(let i = 0; i < randomNum; i++) {    
            //         articlesArray[i].remove();
                    
            //     }
            //     articlesArray = document.querySelectorAll(".main_news_container")
            // }

            function random_articles_num() {
                let randomNum = Math.floor((Math.random() * 4) + 1);
                let articlesArray = document.querySelectorAll(".main_news_container")

                    for(let i = 0; i < randomNum; i++) {
                        
                        let mainNewsContainer = document.querySelector(".main_news");
                        
                        let createMainNewsContainer = document.createElement("DIV");
                        createMainNewsContainer.classList.add("main_news_container");
                        let createMainNewsTextContainer = document.createElement("DIV");
                        createMainNewsTextContainer.classList.add("main_news_text_container");
                        let createMainNewsTextHeader = document.createElement("DIV");
                        createMainNewsTextHeader.classList.add("main_news_text_header");
                        let createMainNewsQuickInfo = document.createElement("DIV");
                        createMainNewsQuickInfo.classList.add("main_news_text_quick_info");
                        let createMainNewsCredit = document.createElement("DIV");
                        createMainNewsCredit.classList.add("main_news_text_credit");
                        
                        createMainNewsContainer.appendChild(createMainNewsTextContainer);
                        createMainNewsTextContainer.appendChild(createMainNewsTextHeader);
                        createMainNewsTextContainer.appendChild(createMainNewsQuickInfo);
                        createMainNewsTextContainer.appendChild(createMainNewsCredit);
                        
                        let createMainNewsImgContainer = document.createElement("DIV");
                        createMainNewsImgContainer.classList.add("main_news_image_container");
                        let createImg = document.createElement("img");
                        
                        createImg.classList.add("main_news_image");
                        createImg.src = "./images/download (1).jpg"
                        
                        createMainNewsContainer.appendChild(createMainNewsImgContainer);
                        createMainNewsImgContainer.appendChild(createImg);
                        
                        mainNewsContainer.appendChild(createMainNewsContainer);
                        random_bg_color_main_news_container();
                    }
                }
            

                function random_site_layout() {
                    random_bg_color_header();
                    random_bg_color_footer();
                    random_bg_color_site_container();
                    random_bg_color_main_news_container();
                    random_bg_color_news_flash_header();
                    random_bg_color_news_flash_text();
                    random_articles_num();
                }
                
            
let searchBar = document.querySelector("input");
searchBar.addEventListener("keyup", function(e){
    let term = e.target.value.toLowerCase();
    console.log(term);
    let newsContainer = document.querySelectorAll(".main_news_container");
    Array.from(newsContainer).forEach(function(news) {
        const newsTextContent = news.firstElementChild.textContent;
        if(newsTextContent.toLowerCase().indexOf(term) != -1) {
            news.style.display = "flex";
        } else {
            news.style.display = "none";
        }
    })

})