// console.log("Hello");

const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
// console.log(arrows);
// console.log(movieLists);

arrows.forEach((arrow,i) => {
    // console.log(arrow);
    // console.log(i);

        let clickCounter = 0;

    arrow.addEventListener("click" , () => {
        // console.log("You clicked to: " + i);
        // console.log(movieLists[i]);
        const itemNumber = movieLists[i].querySelectorAll("img").length;
        clickCounter++;
        if(itemNumber - (5+clickCounter) >= 0) {
        movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value -300}px)`;
        } else {
            movieLists[i].style.transform = `translateX(0)`;
            clickCounter = 0;
        }
    })
})

// TOGGLE BUTTON

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container , .movie-list-title , .navbar-container , .sidebar , .left-menu-icon , .toggle , .toggle-ball , .fa-caret-down");

ball.addEventListener("click" , () => {
    items.forEach(item => {
        item.classList.toggle("active")
    })
    // ball.classList.toggle("active")
})