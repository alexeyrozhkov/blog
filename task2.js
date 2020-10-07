let commentField = document.querySelector('.message');
let submitButton = document.querySelector('.form-button');
let form = document.querySelector('.form');


form.onsubmit = function(e) {
    if(commentField.value.length > 200 || commentField.value.length <= 3 ) {
        commentField.classList.add('warning');
        submitButton.disabled = true;
    }
        
    e.preventDefault();
}

commentField.oninput = function() {
    commentField.classList.remove('warning');
    submitButton.disabled = false;
}
