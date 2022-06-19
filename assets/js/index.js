
/* Первое задание */

const changeBtn = document.querySelector('.image-change-btn');
const firstChangeSecond = document.querySelector('.second-image');

function changeImage() {
    const attr = document.createAttribute('src');
    attr.value = 'https://i.pinimg.com/736x/52/e9/23/52e923c8ab27e31c89c4382961075f94.jpg';
    firstChangeSecond.setAttributeNode(attr);
}

changeBtn.addEventListener('click', changeImage);


/* Второе задание */

const btn = document.querySelector('.btn-once');

function makeButtonDisable() {
    const disAttr = document.createAttribute('disabled');
    return btn.setAttributeNode(disAttr);

}

btn.addEventListener('click', makeButtonDisable);




