const sidebar = document.querySelector('.sidebar');
const barsIcon = document.querySelector('.fa-bars');
const closeIcon = document.querySelector('.fa-xmark');

barsIcon.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
});

closeIcon.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
});

document.addEventListener('click', e => {
    if (e.target.tagName === 'HTML') {
        sidebar.classList.remove('show-sidebar');
    }
});