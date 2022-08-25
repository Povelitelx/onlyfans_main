const burgerNav = document.getElementById('burger_nav')
const burgerIcon = document.getElementById('burger_icon')
const modalTrigger = document.getElementById('modal_trigger')
const modalContainer = document.getElementById('modalLayout');
const closeIcon = document.querySelector('.close-icon');

burgerIcon.onclick = function (){
    burgerNav.classList.toggle('burgerNavOn')
}

modalTrigger.addEventListener('click', function(){
    modalContainer.classList.add('openLayout')
})

closeIcon.addEventListener('click', function(){
    modalContainer.classList.remove('openLayout')
})