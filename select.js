let filter = document.querySelector('.select');
let articles = document.querySelectorAll('.article');

filter.onchange = function() {
    for(let art of articles) {
        if(art.dataset.category !== filter.value && filter.value !== 'all') {
            art.classList.add('hidden');
        }else {
            art.classList.remove('hidden');
        }
    }
}