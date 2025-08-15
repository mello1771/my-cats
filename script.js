// script


//variables

const beginButton = document.getElementById('begin-button');
const secondButton = document.getElementById('second-button');
const thirdButton = document.getElementById('third-button');
const fourthButton = document.getElementById('fourth-button');
const fifthButton = document.getElementById('fifth-button');
const restart = document.getElementById('restart');

const firstPage = document.getElementById('first-page');
const secondPage = document.getElementById('second-page');
const thirdPage = document.getElementById('third-page');
const fourthPage = document.getElementById('fourth-page');
const fifthPage = document.getElementById('fifth-page');
const sixthPage = document.getElementById('sixth-page');

//event listeners

beginButton.addEventListener("click", begin);

secondButton.addEventListener('click', ()=> fadeOut(secondPage));
secondButton.addEventListener('click', ()=> fadeIn(thirdPage));

thirdButton.addEventListener('click', ()=> fadeOut(thirdPage));
thirdButton.addEventListener('click', ()=> fadeIn(fourthPage));

fourthButton.addEventListener('click', ()=> fadeOut(fourthPage));
fourthButton.addEventListener('click', ()=> fadeIn(fifthPage));

fifthButton.addEventListener('click', ()=> fadeOut(fifthPage));
fifthButton.addEventListener('click', ()=> fadeIn(sixthPage));

restart.addEventListener('click', restartFunction);




//functions

function begin() {
    firstPage.remove();
    secondPage.style.opacity = '1';
}

function fadeIn(page) {
    page.style.opacity = '1';
}

function fadeOut(page) {
    page.style.opacity = '0';
    page.remove();
}

function restartFunction() {
    location.reload();
}