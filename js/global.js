//shows the wanted popup element.
function showPopUp(popUpEle,box){
    popUpEle.classList.add(`show`);
    box.classList.add(`show`);
}

//hide the wanted popup element.
function hidePopup(popUpEle,box){
    console.log(popUpEle,box)
    popUpEle.classList.remove(`show`);
    box.classList.remove(`show`);
}



//move to the next background img on click.
function nextBtnFun() {
    for (let i = 0; i < carouselItem.length; i++) {
        if (carouselItem[i].classList.contains("active")) {
            carouselItem[i].classList.remove("active");
            let nextIndex = (i + 1) % carouselItem.length; // wrap around.
            carouselItem[nextIndex].classList.add("active");
            changeColor(nextIndex);
            changeHeaders(nextIndex);
            break; // stop the loop here.
        }
    }
}
//move to the previous background img on click.
function prevBtnFun(){
    for(let i = carouselItem.length-1 ; i >= 0 ; i--){
        if(carouselItem[i].classList.contains(`active`)){
            carouselItem[i].classList.remove(`active`);
            let nextIndex = i-1;
            carouselItem[nextIndex].classList.add(`active`);
            changeColor(nextIndex);
            changeHeaders(nextIndex);
            break; // stop the loop here.
        }
        if(carouselItem[0].classList.contains(`active`)){
            carouselItem[0].classList.remove(`active`);
            let nextIndex = carouselItem.length-1;
            carouselItem[nextIndex].classList.add(`active`);
            changeColor(nextIndex);
            changeHeaders(nextIndex);
            break; // stop the loop here.
        }
    }
}
//change the color.
function changeColor(nextIndex){
    let currentColorName = carouselItem[nextIndex].dataset.colorName;
    let currentColorValue = getComputedStyle(document.documentElement).getPropertyValue(currentColorName);
    document.documentElement.style.setProperty('--main-color', `${currentColorValue}`);
}


//show the img that was clicked on.
function showImg(imgEle){
    let imgSrc = imgEle.src;
    let mainImg = imgEle.parentElement.parentElement.nextElementSibling.firstElementChild;
    mainImg.setAttribute(`src`,imgSrc);
}

function changeHeaders(nextIndex){
    for(let header of headers){
        for(let headerImg of headersImg){
            if(!headerImg.classList.contains(`d-none`)){
                headerImg.classList.add(`d-none`);
            }
        }
    }
    let colorName = carouselItem[nextIndex].getAttribute(`data-color-name`);
    for(let headerImg of headersImg){
        if(colorName == headerImg.getAttribute(`data-color-name`)){
            headerImg.classList.remove(`d-none`);
        }
    }

}

function changeActive(size){
    for(let size1 of sizes){
        if(size1.classList.contains(`active`)){
            size1.classList.remove(`active`);
        }
    }
    size.classList.add(`active`);
}







function latestProductsFun(){
    latestProducts.innerHTML = ``;
    let hide = `ok`;
    for(let latest1 of latest){
        if(latest1.discount == 0.0){
            hide = `d-none`;
        }
        latestProducts.innerHTML +=`
        <div class="col">
            <div class="products mx-auto row row-cols-lg-3" id="${latest1.id}">
              <div class="row-of-imgs">
                <div class="imgs-in-row"><img src="imges/nike_images/products/${latest1.images[0]}" alt=""></div>
                <div class="imgs-in-row"><img src="imges/nike_images/products/${latest1.images[1]}" alt=""></div>
                <div class="imgs-in-row"><img src="imges/nike_images/products/${latest1.images[2]}" alt=""></div>
                <div class="imgs-in-row"><img src="imges/nike_images/products/${latest1.images[3]}" alt=""></div>
              </div>
              <div class="main-img">
                <img src="imges/nike_images/products/${latest1.images[0]}" alt="">
              </div>
              <div class="description">
                <h3>${latest1.name}</h3>
                <p>
                ${latest1.description}
                </p>
                <div class="price-div">
                  <span class="price">
                    Price :
                  </span>
                  <span class="before-dis">
                    ${latest1.price} <span class="dollar-sign">$</span>
                  </span>
                  <span class="after-dis ${hide}">
                    ${(latest1.price * latest1.discount).toFixed(2)} <span class="dollar-sign">$</span>
                  </span>
                </div>
                <div class="size-div">
                  <span class="size">
                    Size :
                  </span>
                  <ul type="none" class="sizes">
                    <li>${latest1.sizes[0]}</li>
                    <li>${latest1.sizes[1]}</li>
                    <li>${latest1.sizes[2]}</li>
                    <li>${latest1.sizes[3]}</li>
                  </ul>
                </div>
                <button>
                  Add To Card
                </button>
                <button class="d-none">
                  Remove from Card
                </button>
              </div>
            </div>
          </div>
    `

    hide = `ok`;
    }
}





function featuredProductsFun(){
    featuredProducts.innerHTML = ``;
    let hide = `` ;
    let mainPrice = ``
    
    for(let featured of features){
        if(featured.discount == 0){
            hide = `d-none`;
            mainPrice = `after-dis`
        }
        function keysFun(){
            let keys = ``;
            for(let i = 0 ; i < featured.images.length ; i++ ){
                keys += `<li></li>`;
            }
            return keys;
            
        }
        featuredProducts.innerHTML +=`
            <div class="col">
            <div class="products" id="${featured.id}">
              <div class="discount ${hide}">
                ${featured.discount*100}%
              </div>
              <img src="imges/nike_images/products/${featured.images[0]}" alt="">
              <h6>${featured.name}</h6>
              <div class="search"><i class="fa-solid fa-magnifying-glass"></i></div>
              <ul type="none">
                ${keysFun()}
              </ul>
              <span class="before-dis ${mainPrice}">
                    ${featured.price} <span class="dollar-sign">$</span>
              </span>
              <span class="after-dis ${hide}">
                    ${(featured.price * featured.discount).toFixed(2)} <span class="dollar-sign">$</span>
              </span>
            </div>
          </div>
        `
        hide = ``;
        mainPrice = ``;
    }
}