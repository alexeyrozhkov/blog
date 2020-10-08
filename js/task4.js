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
    commentLists.append(createCommentWrapper(config));
}

function createCommentWrapper(config) {
    const divParent = document.createElement('div');
    divParent.classList.add('comment');
    divParent.append(createCommentHeader(config.name));
    divParent.append(createCommentText(config.comment));
    return divParent;
}

function createCommentHeader(name) {
    const header = document.createElement('div');
    header.classList.add('comment-header');
    header.append(createCommentAvatar());
    header.append(createCommentName(name));
    return header;
}

function createCommentAvatar() {
    const avatar = document.createElement('img');
    avatar.setAttribute('src','assets/icon-guest.png')
    return avatar;
}

function createCommentName(name) {
    const userName = document.createElement('p');
    userName.classList.add('avatar-name');
    userName.textContent = name;
    return userName;
}

function createCommentText(comment) {
    const textComment = document.createElement('p');
    textComment.classList.add('comment-text');
    textComment.textContent = comment;
    return textComment;
}