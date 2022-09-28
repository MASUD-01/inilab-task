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
//     setTimeout(showSlide, 2000); // Change image every 2 seconds
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