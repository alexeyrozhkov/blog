let commentLists = document.querySelector('.comments-inner');
let commentForm = document.querySelector('.comment-form');
let buttonComment = document.querySelector('.personal-data-button');
let commentSquare = document.querySelector('.feedback-text-message');
let nickname = document.querySelector('.username');
let emailUser = document.querySelector('.user-email');


commentForm.onsubmit = function(e) {
    e.preventDefault();
    if(commentSquare.value.length > 200 || commentSquare.value.length <= 10 ) {
        commentSquare.classList.add('warning');
        buttonComment.disabled = true;
        return;
    }

    const config = {};
    config.name = nickname.value;
    config.email = emailUser.value;
    config.comment = commentSquare.value;
    
    
    createComment(config);

}

commentSquare.oninput = function() {
    commentSquare.classList.remove('warning');
    buttonComment.disabled = false;
}


function createComment(config) {
    
    const divPerent = document.createElement('div');
    divPerent.classList.add('comment');
    commentLists.append(divPerent);
    const divChild = document.createElement('div');
    divChild.classList.add('comment-header');
    divPerent.append(divChild);
    const avatar = document.createElement('img');
    avatar.setAttribute('src','assets/icon-guest.png')
    divChild.append(avatar);
    const userName = document.createElement('p');
    userName.classList.add('avatar-name');
    userName.textContent = config.name;
    divChild.append(userName);
    const textComment = document.createElement('p');
    textComment.classList.add('comment-text');
    textComment.textContent = config.comment;
    divPerent.append(textComment);
    
}
