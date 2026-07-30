const movieLists = Array.from(document.querySelectorAll(".movie-list"));
const movieContainers = Array.from(document.querySelectorAll(".movie-list-container"));
const contentContainer = document.querySelector(".content-container");

const existingTitles = [
    ["Sarrainodu", "DJ", "Jaya Janaki Nayaka", "Naa Peru Surya", "Inttelligent", "Kavacham"],
    ["S/O Satyamurthy", "Bheeshma", "Winner", "Middle Class Abbayi", "Hello Guru Prema Kosame", "Loukyam"],
    ["Blood Hunt", "It Follows", "The Descent", "Vacancy", "The Invitation", "1920 London"],
    ["F2: Fun and Frustration", "Bruce Lee: The Fighter", "House on Haunted Hill", "The Last Man on Earth", "The Brain That Wouldn't Die", "1920"],
];

existingTitles.forEach((titles, rowIndex) => {
    titles.forEach((title, cardIndex) => {
        const titleElement = movieLists[rowIndex]?.children[cardIndex]?.querySelector(".movie-list-item-title");
        if (titleElement) titleElement.textContent = title;
    });
});

movieContainers[0].querySelector(".movie-list-title").textContent = "ACTION";
movieContainers[1].querySelector(".movie-list-title").textContent = "ROMANTICS";
movieContainers[2].querySelector(".movie-list-title").textContent = "HORROR";
movieContainers[3].querySelector(".movie-list-title").textContent = "OLD FILMS";
movieContainers[4].querySelector(".movie-list-title").textContent = "KOREAN";
movieContainers[5].querySelector(".movie-list-title").textContent = "AVENGERS CLIPS";

function createMovieCard(title, image) {
    const card = document.createElement("div");
    card.className = "movie-list-item";
    card.innerHTML = `
        <img src="${image}" alt="${title}" class="movie-list-item-img">
        <span class="movie-list-item-title">${title}</span>
        <p class="movie-list-item-desc">Watch this free movie, official trailer, or promotional clip.</p>
        <button class="movie-list-item-button">Watch</button>
    `;
    return card;
}

function cloneCard(rowIndex, cardIndex) {
    return movieLists[rowIndex].children[cardIndex].cloneNode(true);
}

const oldFilmCards = [
    ["White Zombie", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Poster_-_White_Zombie_01_Crisco_restoration.jpg/960px-Poster_-_White_Zombie_01_Crisco_restoration.jpg"],
    ["Little Shop of Horrors", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/The_Little_Shop_of_Horrors_%281960%29_-_Half-Sheet_poster.webp/1280px-The_Little_Shop_of_Horrors_%281960%29_-_Half-Sheet_poster.webp.png"],
    ["The Terror", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/The_Terror_%281963%29_-_Poster.png/960px-The_Terror_%281963%29_-_Poster.png"],
    ["The Screaming Skull", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Poster_for_The_Screaming_Skull.jpg/960px-Poster_for_The_Screaming_Skull.jpg"],
    ["Plan 9 from Outer Space", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Plan_9_Alternative_poster.jpg/960px-Plan_9_Alternative_poster.jpg"],
    ["The Devil Bat", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/The_Devil_Bat_%281940%29_Poster.jpg/960px-The_Devil_Bat_%281940%29_Poster.jpg"],
    ["The Vampire Bat", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Vampirebat.jpg/960px-Vampirebat.jpg"],
    ["The Giant Gila Monster", "https://upload.wikimedia.org/wikipedia/commons/3/3e/Giant_Gila_Monster_poster.jpg"],
    ["The Beast of Yucca Flats", "https://upload.wikimedia.org/wikipedia/commons/5/53/The_Beast_of_Yucca_Flats_poster.webp"],
];

oldFilmCards.forEach(([title, image]) => movieLists[3].appendChild(createMovieCard(title, image)));

const koreanCards = [
    ["Oldboy", "https://upload.wikimedia.org/wikipedia/en/6/67/Oldboykoreanposter.jpg"],
    ["The Man from Nowhere", "https://upload.wikimedia.org/wikipedia/en/d/d6/The_Man_from_Nowhere_poster.jpg"],
    ["Along with the Gods", "https://upload.wikimedia.org/wikipedia/en/9/95/Along_With_the_Gods_-_The_Two_Worlds.jpg"],
    ["Extreme Job", "https://upload.wikimedia.org/wikipedia/en/d/d7/Extreme_Job_poster.jpg"],
    ["Space Sweepers", "https://upload.wikimedia.org/wikipedia/en/0/05/Space_Sweepers.jpg"],
    ["The Gangster, the Cop, the Devil", "https://upload.wikimedia.org/wikipedia/en/b/bf/The_Gangster%2C_The_Cop%2C_The_Devil.jpg"],
    ["Forgotten", "https://upload.wikimedia.org/wikipedia/en/6/6d/Recall_the_Night_%28%EA%B8%B0%EC%96%B5%EC%9D%98_%EB%B0%A4%29.jpg"],
    ["The Host", "https://upload.wikimedia.org/wikipedia/en/5/55/The_Host_film_poster.jpg"],
    ["Midnight FM", "https://upload.wikimedia.org/wikipedia/en/e/eb/200pxlatenightfmmovieposter.jpeg"],
];

koreanCards.forEach(([title, image]) => movieLists[4].appendChild(createMovieCard(title, image)));

const actionAdditions = [[5, 6], [5, 7], [5, 8], [5, 9], [5, 10], [5, 11], [5, 12], [5, 13], [5, 14]];
actionAdditions.forEach(([row, card]) => movieLists[0].appendChild(cloneCard(row, card)));

const romanceAdditions = [[3, 0], [3, 1], [4, 5], [0, 0], [0, 1], [0, 2], [4, 3], [5, 4], [5, 5]];
romanceAdditions.forEach(([row, card]) => movieLists[1].appendChild(cloneCard(row, card)));

const horrorAdditions = [[3, 2], [3, 3], [3, 4], [4, 0], [4, 2], [4, 3], [4, 4], [4, 13], [3, 8]];
horrorAdditions.forEach(([row, card]) => movieLists[2].appendChild(cloneCard(row, card)));

function createSection(title, references) {
    const container = document.createElement("div");
    container.className = "movie-list-container";
    const cards = references.map(([row, card]) => cloneCard(row, card));
    container.innerHTML = `
        <h1 class="movie-list-title">${title}</h1>
        <div class="movie-list-wrapper">
            <div class="movie-list"></div>
            <i class="fa-solid fa-angle-right arrow"></i>
        </div>
    `;
    const list = container.querySelector(".movie-list");
    cards.forEach(card => list.appendChild(card));
    contentContainer.appendChild(container);
}

createSection("NEW RELEASES", [
    [0, 0], [0, 1], [0, 2], [0, 3], [0, 4],
    [1, 1], [1, 2], [1, 3], [1, 4], [4, 3],
    [4, 4], [4, 8], [5, 3], [5, 4], [5, 5],
]);

createSection("DRAMAS", [
    [1, 0], [1, 1], [1, 2], [1, 3], [1, 4],
    [1, 5], [4, 1], [4, 6], [4, 7], [4, 8],
    [4, 10], [4, 11], [4, 12], [2, 4], [2, 5],
]);

createSection("COMEDY", [
    [1, 0], [1, 1], [1, 2], [1, 3], [1, 4],
    [1, 5], [3, 0], [4, 5], [4, 9], [0, 1],
    [0, 6], [0, 7], [5, 12], [5, 13], [5, 14],
]);

createSection("SCIENCE FICTION", [
    [4, 10], [4, 13], [5, 0], [5, 1], [5, 2],
    [5, 3], [5, 4], [5, 5], [5, 6], [5, 10],
    [5, 11], [5, 12], [5, 13], [5, 14], [3, 14],
]);

createSection("AVATAR & FANTASY CLIPS", [
    [5, 4], [5, 5], [4, 2], [4, 10], [4, 13],
    [5, 1], [5, 2], [5, 3], [5, 10], [5, 11],
    [5, 12], [5, 13], [5, 14], [0, 7], [0, 8],
]);

createSection("FAMILY & ADVENTURE", [
    [0, 0], [0, 1], [0, 2], [0, 6], [0, 7],
    [1, 0], [1, 1], [1, 2], [1, 3], [1, 4],
    [3, 0], [4, 5], [5, 4], [5, 5], [5, 13],
]);

createSection("CRIME & MYSTERY", [
    [2, 0], [2, 1], [2, 3], [2, 4], [4, 1],
    [4, 4], [4, 6], [4, 7], [4, 8], [4, 11],
    [4, 12], [4, 14], [0, 4], [0, 5], [5, 9],
]);

createSection("WAR & HISTORY", [
    [0, 3], [0, 4], [0, 5], [0, 6], [0, 7],
    [4, 1], [4, 2], [4, 6], [5, 0], [5, 2],
    [5, 3], [5, 7], [5, 8], [5, 9], [5, 12],
]);

createSection("ANIMATION & FUN", [
    [1, 0], [1, 1], [1, 2], [1, 3], [1, 4],
    [1, 5], [3, 0], [4, 5], [4, 9], [5, 4],
    [5, 5], [5, 10], [5, 11], [5, 13], [5, 14],
]);

createSection("SUPERNATURAL", [
    [2, 0], [2, 1], [2, 2], [2, 3], [2, 4],
    [2, 5], [3, 2], [3, 3], [3, 4], [3, 6],
    [3, 7], [4, 0], [4, 2], [4, 3], [4, 13],
]);

const featuredTemplates = Array.from(document.querySelectorAll(".featured-movies"));
const allCategoryRows = Array.from(document.querySelectorAll(".movie-list-container"));
const topFeatured = featuredTemplates[0];
const featuredBackgrounds = [
    "img/f-2.jpg",
    "https://i.ytimg.com/vi/d9MyW72ELq0/maxresdefault.jpg",
    "https://i.ytimg.com/vi/6ZfuNTqbHE8/maxresdefault.jpg",
    "https://i.ytimg.com/vi/TcMBFSGVi1c/maxresdefault.jpg",
    "https://i.ytimg.com/vi/mqqft2x_Aa4/maxresdefault.jpg",
    "https://i.ytimg.com/vi/giXco2jaZ_4/maxresdefault.jpg",
    "https://i.ytimg.com/vi/n9xhJrPXop4/maxresdefault.jpg",
    "https://i.ytimg.com/vi/zSWdZVtXT7E/maxresdefault.jpg",
];

featuredTemplates.forEach(featured => featured.remove());
allCategoryRows.forEach(row => row.remove());
contentContainer.appendChild(topFeatured);

allCategoryRows.forEach((row, index) => {
    contentContainer.appendChild(row);

    if ((index + 1) % 2 === 0) {
        const featured = topFeatured.cloneNode(true);
        const featuredContent = featured.querySelector(".featured-content");
        const background = featuredBackgrounds[Math.floor(index / 2) % featuredBackgrounds.length];
        featuredContent.style.background =
            `linear-gradient(to bottom, rgba(0,0,0,0), #151515), url('${background}') center/cover`;
        contentContainer.appendChild(featured);
    }
});

const arrows = document.querySelectorAll(".arrow");
const allMovieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, index) => {
    let clickCounter = 0;

    arrow.addEventListener("click", () => {
        const movieList = allMovieLists[index];
        const itemNumber = movieList.querySelectorAll(".movie-list-item").length;
        clickCounter++;

        if (itemNumber - (5 + clickCounter) >= 0) {
            const transform = window.getComputedStyle(movieList).transform;
            const currentX = transform === "none" ? 0 : new DOMMatrixReadOnly(transform).m41;
            movieList.style.transform = `translateX(${currentX - 300}px)`;
        } else {
            movieList.style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container, .movie-list-title, .navbar-container, .sidebar, .left-menu-icon, .toggle, .toggle-ball, .fa-caret-down");

ball.addEventListener("click", () => {
    items.forEach(item => item.classList.toggle("active"));
});
