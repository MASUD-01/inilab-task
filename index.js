// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// }


// drag slider
const container = document.querySelector(".slider-container");
const cards = document.querySelector(".trending-images-slides");
// keep trak of users mouse down and up
let isPressDown = false;

//x horizontal space of cursor from inner container
let cursorXSpace;
container.addEventListener('mousedown', (e) => {
    isPressDown = true;
    cursorXSpace = e.offsetX - cards.offsetLeft;
    container.style.cursor = "grabbing"
})

container.addEventListener("mouseup", () => {
    container.style.cursor = "grab"
})
window.addEventListener("mouseup", () => {
    isPressDown = false;
})
container.addEventListener('mousemove', (e) => {
    if (!isPressDown) return;
    e.preventDefault();
    cards.style.left = `${e.offsetX - cursorXSpace}px`;
    boundCards();
})

const boundCards = () => {
    const container_rect = container.getBoundingClientRect();
    const cards_rect = cards.getBoundingClientRect();

    if (parseInt(cards.style.left) > 0) {
        cards.style.left = 0;
    } else if (cards_rect.right < container_rect.right) {
        cards.style.left = `-${cards_rect.width - container_rect.width}px`;
    }
}
// drag slider
const container1 = document.querySelector(".deals-container");
const cards1 = document.querySelector(".deals-images-slides");
// keep trak of users mouse down and up
let isPressDowns = false;

//x horizontal space of cursor from inner container
let cursorXSpaces;
container1.addEventListener('mousedown', (e) => {
    isPressDowns = true;
    cursorXSpaces = e.offsetX - cards.offsetLeft;
    container1.style.cursor = "grabbing"
})

container1.addEventListener("mouseup", () => {
    container1.style.cursor = "grab"
})
window.addEventListener("mouseup", () => {
    isPressDowns = false;
})
container1.addEventListener('mousemove', (e) => {
    if (!isPressDowns) return;
    e.preventDefault();
    cards1.style.left = `${e.offsetX - cursorXSpaces}px`;
    boundCardss();
})

const boundCardss = () => {
    const container_rect1 = container1.getBoundingClientRect();
    const cards_rect1 = cards1.getBoundingClientRect();

    if (parseInt(cards1.style.left) > 0) {
        cards1.style.left = 0;
    } else if (cards_rect1.right < container_rect1.right) {
        cards1.style.left = `-${cards_rect1.width - container_rect1.width}px`;
    }
}

// -------------------------------
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidess");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}