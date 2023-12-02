function like(buttonElement) {
    var likeElement = buttonElement.parentNode.querySelector(".like-counter");
    likeElement.textContent = +likeElement.textContent + 1;
}
