// exercise3.js

const filterBar = document.querySelector('#filter-bar');
const cards = document.querySelectorAll('.card');
const filterBtns = document.querySelectorAll('.filter-btn');

// ONE delegated listener
filterBar.addEventListener('click', function (event) {


// 1. Guard: if event.target does not match '.filter-btn', return
    if (!event.target.matches('.filter-btn')) return;


// 2. Update active class on all buttons
    filterBtns.forEach(function (btn) {
    btn.classList.remove('active');
    });

    event.target.classList.add('active');


// 3. Read the filter value from event.target.dataset.filter
    const filter = event.target.dataset.filter;


// 4. Loop through cards
// - If filter === 'all': remove .hidden from every card
// - Otherwise: compare card.dataset.category to filter
// add .hidden if no match, remove .hidden if match

    cards.forEach(function (card) {

    if (filter === 'all') {
        card.classList.remove('hidden');
    } else {
        const shouldHide = card.dataset.category !== filter;
        card.classList.toggle('hidden', shouldHide);
    }

  });
});