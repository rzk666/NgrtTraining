function  addCommentFunc() {
    let commentsSection = document.querySelector(".comments_section");
    let createComment = document.createElement("DIV");
    let commentContent = document.querySelector("input").value
    createComment.classList.add("comment");
    createComment.textContent = commentContent;
    commentsSection.appendChild(createComment);
    document.querySelector("input").value = "";
}



