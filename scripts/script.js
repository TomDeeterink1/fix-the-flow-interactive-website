const articles = document.querySelectorAll('.carouselitem');
const container = document.querySelector('.timeline--articles');
const nextButton = document.querySelectorAll('.next');
const previousButton = document.querySelectorAll('.previous');

nextButton.forEach(button => button.addEventListener('click', () => scrollCarousel(-1)));
previousButton.forEach(button => button.addEventListener('click', () => scrollCarousel(1)));

function scrollCarousel(direction) {
    const articleWidth = container.clientWidth;
    const scrollAmount = direction * articleWidth;
    const currentScrollPosition = container.scrollLeft;

    let targetScrollPosition;
    if (direction === 1) {
        targetScrollPosition = currentScrollPosition + articleWidth;
    } else {
        targetScrollPosition = currentScrollPosition - articleWidth;
    }

    container.scrollTo({
        left: targetScrollPosition,
        behavior: 'smooth',
    });
}

const reviews = document.querySelectorAll('.review');
const containerr = document.querySelector('.reviews');
const nextButtons = document.querySelectorAll('.next');
const previousButtons = document.querySelectorAll('.previous');

nextButtons.forEach(button => button.addEventListener('click', () => scrollCarousel2(-1)));
previousButtons.forEach(button => button.addEventListener('click', () => scrollCarousel2(1)));

function scrollCarousel2(direction) {
    const articleWidth = containerr.clientWidth;
    const scrollAmount = direction * articleWidth;
    const currentScrollPosition = containerr.scrollLeft;

    let targetScrollPosition;
    if (direction === 1) {
        targetScrollPosition = currentScrollPosition + articleWidth;
    } else {
        targetScrollPosition = currentScrollPosition - articleWidth;
    }

    containerr.scrollTo({
        left: targetScrollPosition,
        behavior: 'smooth',
    });
}