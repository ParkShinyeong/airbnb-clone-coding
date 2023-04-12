document.querySelectorAll(".category-button").forEach(button => {
    button.addEventListener("click", event => {
        document.querySelector("#active-category-button").removeAttribute("id")
        button.setAttribute('id', 'active-category-button')
    })
});


// 하트 아이콘 클릭 시 하트 색 변경
document.querySelectorAll(".place-image-wrapper").forEach(heartButton => {
    heartButton.addEventListener("click", event => {
        if (heartButton.classList.contains("active-heart-button")) {
            heartButton.classList.remove("active-heart-button")            
        }
        else {
            heartButton.classList.add("active-heart-button")
        }
    })
})