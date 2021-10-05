window.addEventListener('DOMContentLoaded',function(){

    const elBurger = document.querySelector('.menu-trigger');
    const elNav = document.querySelector('.menu nav');
    elBurger.addEventListener('click',function(){
        this.classList.toggle('active-7');
        elNav.classList.toggle('active');
    })

});