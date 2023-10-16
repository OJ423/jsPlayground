// Variables

let openBtnPreview = document.getElementById('preview');
let openBtnAboutMe = document.getElementById('aboutme');
let openBtnPublish = document.getElementById('publish');
let modalContainerPreview = document.getElementById('modal-container-preview');
let modalContainerAboutMe = document.getElementById('modal-container-aboutme');
let modalContainerPublish = document.getElementById('modal-container-publish');
let closeBtnPreview = document.getElementById('close-btn-preview');
let closeBtnAboutMe = document.getElementById('close-btn-aboutme');
let closeBtnPublish = document.getElementById('close-btn-publish');

// Event Listeners Preview

openBtnPreview.addEventListener('click', function(){
    modalContainerPreview.style.display = 'block';
})

closeBtnPreview.addEventListener('click', function(){
    modalContainerPreview.style.display = 'none';
})

window.addEventListener('click', function(e){
    if (e.target === modalContainerPreview) {
        modalContainerPreview.style.display = 'none';
    }
})

// Event Listeners About Me

openBtnAboutMe.addEventListener('click', function(){
    modalContainerAboutMe.style.display = 'block';
})

closeBtnAboutMe.addEventListener('click', function(){
    modalContainerAboutMe.style.display = 'none';
})

window.addEventListener('click', function(e){
    if (e.target === modalContainerAboutMe) {
        modalContainerAboutMe.style.display = 'none';
    }
})


// Event Listeners Publish


openBtnPublish.addEventListener('click', function(){
    modalContainerPublish.style.display = 'block';
})

closeBtnPublish.addEventListener('click', function(){
    modalContainerPublish.style.display = 'none';
})

window.addEventListener('click', function(e){
    if (e.target === modalContainerPublish) {
        modalContainerPublish.style.display = 'none';
    }
})