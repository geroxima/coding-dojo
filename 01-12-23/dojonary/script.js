function likeListener(element) {
    alert("Ninja was liked")
}

function removeElement(element) {
    element.remove();
}

function changeLog(button) {
    button.addEventListener("click", function(){
        button.textContent = "Logout"
    });
}