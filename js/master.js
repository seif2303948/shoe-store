let carouselItem = document.querySelectorAll(`.carousel-inner .carousel-item`),
    loadingPageEle = document.querySelector(`.loading-page`),
    cardIcon = document.querySelector(`nav [data-popup-name="card"]`),
    loginIcon = document.querySelector(`nav [data-popup-name="login"]`),
    popUpEle = document.querySelectorAll(`.popup`),
    loginBox = document.querySelector(`.popup [data-popup-name="login"]`),
    cardBox = document.querySelector(`.popup [data-popup-name="card"]`),
    closeIcons = document.querySelectorAll(`.popup i`),
    navbar = document.querySelector(`nav`),
    prevBtn = document.querySelector(`#carouselExample .prev`),
    nextBtn = document.querySelector(`#carouselExample .next`),
    mainColor = getComputedStyle(document.documentElement).getPropertyValue(`--main-color`),
    headers = document.querySelectorAll(`.header`),
    headersImg = document.querySelectorAll(`.header img`),
    latestProducts = document.querySelector(`#latest .row`),
    featuredProducts = document.querySelector(`#featured .row`),
    navlinks = document.querySelectorAll(`nav .nav-link`),
    heightOfNavbar = document.querySelector(`nav`).clientHeight;

//show the loading page.
window.addEventListener(`DOMContentLoaded`,function(){
    loadingPageEle.classList.add(`hide`);
})


//show the login popup element.
loginIcon.addEventListener(`click`,function(){
    showPopUp(popUpEle[0],loginBox);
})


//show the card popup element.
cardIcon.addEventListener(`click`,function(){
    showPopUp(popUpEle[1],cardBox);
})

//hide the login popup element.
popUpEle[0].addEventListener(`click`,function(e){
    hidePopup(popUpEle[0],loginBox);
})
//hide the card popup element.
popUpEle[1].addEventListener(`click`,function(e){
    hidePopup(popUpEle[1],cardBox);
})
//hide the card popup element.
closeIcons.forEach(function(closeIcon){
    closeIcon.addEventListener(`click`,function(){
        hidePopup(popUpEle[0],loginBox);
        hidePopup(popUpEle[1],cardBox);
    })
})

loginBox.addEventListener(`click`,function(e){
    e.stopPropagation();
})
cardBox.addEventListener(`click`,function(e){
    e.stopPropagation();
})


nextBtn.addEventListener("click", nextBtnFun);//move to the next background img on click.
prevBtn.addEventListener("click",prevBtnFun);//move to the previous background img on click.


//activate links in nav upon clicking.
navlinks.forEach(function(navlink){
    navlink.addEventListener(`click`,function scrollToSection(e){
        e.preventDefault()
        let currentLink = document.querySelector(`nav .nav-item.active`),
        idOfCurrentSection = navlink.getAttribute(`href`),
        currentSection = document.querySelector(`${idOfCurrentSection}`),
        currentSectionTop = currentSection.offsetTop;
        currentSectionTop = currentSectionTop - heightOfNavbar;
        currentLink.classList.remove(`active`);
        navlink.parentElement.classList.add(`active`);
        window.scrollTo({
            top:currentSectionTop ,
        });
    })
});


window.addEventListener("scroll", function () {
    let topWindow = window.scrollY;
    let sections = [`#home`,`#latest`,`#featured`];

    for(let section2 of sections){
        let section = document.querySelector(`${section2}`);
        let currentSectionTop = section.offsetTop - heightOfNavbar; // adjust for navbar
        let currentSectionBottom = section.offsetTop + section.offsetHeight - heightOfNavbar;

        if (topWindow >= currentSectionTop && topWindow <= currentSectionBottom) {
            let currentLink = this.document.querySelector(`nav .nav-link[href = "#${section.id}"]`);
            let oldLink =  this.document.querySelector(`nav .nav-item.active`);


            oldLink.classList.remove(`active`);
            currentLink.parentElement.classList.add(`active`);

        }
    }
});

window.addEventListener(`scroll`,function(){
    let topWindow = this.scrollY;
    if(topWindow > 0){
        navbar.classList.add(`scrolled`);
    }
    if(topWindow == 0){
        navbar.classList.remove(`scrolled`);
    }
})

//shows the latest products.
latestProductsFun();
let rowOfImgs = document.querySelectorAll(`#latest .products .row-of-imgs img`);//the rows of imges inside latest products.
let sizes = document.querySelectorAll(`.sizes li`);

//shows the featured products.
featuredProductsFun();
let featuredImg = document.querySelectorAll(`#featured .products img`);




rowOfImgs.forEach(function(img){
    img.addEventListener("click",function(){
        showImg(img);
        img
    });
})


sizes.forEach(function(size){
    size.addEventListener(`click`,function(){
        changeActive(size);
    })
})

