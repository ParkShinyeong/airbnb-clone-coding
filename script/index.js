
const categoryButton = document.querySelectorAll('.category-bar-button');

categoryButton.forEach(btn => {
    btn.onclick = function () {
        document.getElementById("active-button").removeAttribute("id");
        btn.setAttribute("id", "active-button"); 
        // btn.id = "active-button";
    }
})


