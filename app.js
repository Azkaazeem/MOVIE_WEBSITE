// console.log("Hello");
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {

    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;

    arrow.addEventListener("click", () => {
        const carouselWidth = arrow.parentElement.clientWidth;
        const ratio = Math.floor(carouselWidth / 300);
        clickCounter++;
        if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 300}px)`;
        } else {
            movieLists[i].style.transform = `translateX(0)`;
            clickCounter = 0;
        }
    })

    7 -(4+0) + (4-2) 
    console.log(Math.floor(window.innerWidth / 270));
})

// TOGGLE BUTTON

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container , .movie-list-title , .navbar-container , .sidebar , .left-menu-icon , .toggle , .toggle-ball , .fa-caret-down");

ball.addEventListener("click", () => {
    items.forEach(item => {
        item.classList.toggle("active")
    })
    // ball.classList.toggle("active")
})

document.querySelector(".back-to-top").addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});
