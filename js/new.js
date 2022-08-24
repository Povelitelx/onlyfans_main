const burgerNav = document.getElementById('burger_nav')
const burgerIcon = document.getElementById('burger_icon')


burgerIcon.onclick = function (){
    burgerNav.classList.toggle('burgerNavOn')
}