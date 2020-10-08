let buttonLike = document.querySelector('.like');
let likeIndex = document.querySelector('.like-text');
let counter = 0;

buttonLike.onclick = function() {
    
    if(buttonLike.classList.contains('added')) {
        counter--;
    } else {
        counter ++;
    }
    likeIndex.textContent = counter;
    buttonLike.classList.toggle('added');
}

