const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    const iconsButton = accordion.querySelector('.icons-button');
    iconsButton.addEventListener('click', () => {
        accordion.querySelector('.minus-icon').classList.toggle('hide');
        accordion.querySelector('.plus-icon').classList.toggle('hide');
        accordion.querySelector('.accordion-content').classList.toggle('hide');
    });
});

