const buttonEl = document.querySelectorAll(".btn")
const imageEl = document.querySelectorAll(".store-item") 

buttonEl.forEach(function(button) {
    button.addEventListener("click", (e) => {
        e.preventDefault()
        const filter = e.target.dataset.filter
        imageEl.forEach((item) => {

            if (filter === "all") {
                item.style.display = "block"
            }else if (item.classList.contains(filter)) {
                item.style.display = "block"
            }else{
                item.style.display = "none"
            }
        })
    })
})