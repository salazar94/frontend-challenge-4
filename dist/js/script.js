const prev = document.querySelector('.card-button-left');
const next = document.querySelector('.card-button-right');

const title = document.querySelectorAll('.card__title');
const quote = document.querySelectorAll('.card__quote');
const image = document.querySelectorAll('.card__image');

prev.addEventListener('click', nextTestimonail);
next.addEventListener('click', nextTestimonail);


function nextTestimonail() {
    for (let index = 0; index < 2; index++) {
        title[index].classList.toggle('none');
        quote[index].classList.toggle('none');
        image[index].classList.toggle('none');
    }
}