export const upcomingProduct = (
    id,
    imgSrc,
    text,
  ) => {
    let paragraf = 'Bestseller'
    let className = 'upcoming-bestseller'
    if(id===2){
        paragraf='Limited edition'
        className = 'upcoming-limited-edition'
    }
    if(id===3){
        paragraf=''
        className = ''
    }
    return `    <div class="item" id="upcoming-${id}">

                    <div class="upcoming-product-box">
                        <div class="upcoming-product-atr" >
                                <div class="${className}">
                                    <p class="upcoming-product-label">${paragraf}</p>
                                </div>
                            <svg class="hart-svg">
                                <path d="M18.778 32.0l-1.962-1.764c-2.947-2.673-5.384-4.971-7.311-6.892s-3.454-3.632-4.581-5.13c-1.127-1.498-1.915-2.865-2.362-4.101s-0.672-2.489-0.672-3.76c0-2.523 0.851-4.635 2.552-6.337s3.814-2.552 6.337-2.552c1.552 0 3.019 0.363 4.4 1.089s2.581 1.767 3.6 3.123c1.019-1.356 2.219-2.397 3.6-3.123s2.848-1.089 4.4-1.089c2.523 0 4.635 0.851 6.337 2.552s2.552 3.814 2.552 6.337c0 1.272-0.224 2.525-0.672 3.76s-1.235 2.603-2.362 4.101c-1.127 1.499-2.651 3.209-4.573 5.13s-4.361 4.218-7.319 6.892l-1.962 1.764z"
                                 class="hart-path" style="stroke:black;stroke-width:3";/>
                            </svg>
                        </div>
                        <picture data-action="openModla">
                            <img class="upcoming-product-image" src=${imgSrc} alt="product photo" data-action="openModla" data-src="${imgSrc}" data-id="${id}" loading="lazy">
                        </picture>
                    </div>
                    <div class="upcoming-product-description-box">
                        <h1 class="upcoming-product-description">${text}</h1>
                        <p class="upcoming-product-price">€300,00 EUR</p>
                    </div>
                </div>`
  };
  export const upcomingSwiper = (
    id,
    imgSrc,
    text,
  ) => {
    let paragraf = 'Bestseller'
    let className = 'upcoming-bestseller'
    if(id===2){
        paragraf='Limited edition'
        className = 'upcoming-limited-edition'
    }
    if(id===3){
        paragraf=''
        className = ''
    }
    return `     <div class="swiper-slide" id="upcoming-${id}">
                    <div class="upcoming-product-box">
                        <div class="upcoming-product-atr" >
                                <div class="${className}">
                                    <p class="upcoming-product-label">${paragraf}</p>
                                </div>
                            <svg class="hart-svg">
                                <path d="M18.778 32.0l-1.962-1.764c-2.947-2.673-5.384-4.971-7.311-6.892s-3.454-3.632-4.581-5.13c-1.127-1.498-1.915-2.865-2.362-4.101s-0.672-2.489-0.672-3.76c0-2.523 0.851-4.635 2.552-6.337s3.814-2.552 6.337-2.552c1.552 0 3.019 0.363 4.4 1.089s2.581 1.767 3.6 3.123c1.019-1.356 2.219-2.397 3.6-3.123s2.848-1.089 4.4-1.089c2.523 0 4.635 0.851 6.337 2.552s2.552 3.814 2.552 6.337c0 1.272-0.224 2.525-0.672 3.76s-1.235 2.603-2.362 4.101c-1.127 1.499-2.651 3.209-4.573 5.13s-4.361 4.218-7.319 6.892l-1.962 1.764z"
                                class="hart-path" style="stroke:black;stroke-width:3";/>
                            </svg>
                        </div>
                        <picture data-action="openModla">
                            <img class="upcoming-product-image" src=${imgSrc} alt="product photo" data-action="openModla" data-src="${imgSrc}" data-id="${id}" loading="lazy">
                        </picture>
                    </div>
                    <div class="upcoming-product-description-box">
                        <h1 class="upcoming-product-description">${text}</h1>
                        <p class="upcoming-product-price">€300,00 EUR</p>
                    </div>

                 </div>
    
    

`
  };
  export const banner = () =>{
    return` <li class="banner" id="banner">
                <div class="banner-box" id="banner-box">
                    <div>
                        <p class="banner-logo">Forma’sint.</p>
                        <h2 class="banner-slogan">You'll look and feel like the champion.</h2>
                    </div>
                    <button type="button" class="banner-button" data-action="openBanner">
                        <p data-action="openBanner">Check this out></p>
                    </button>
                </div>
            </li> 
    `
  }


  export const product =(
    i,
    id,
    imgSrc,
  )=>{
    const itemID= ('0'+ id.toString()).slice(-2)

    return` <li class="product-list-item" id="product-${i}">
                <div class="product-item-box">
                    <h3 class="product-item-h">ID: ${itemID}</h3>
                    <picture>
                        <img class="product-item-image" src="${imgSrc}" alt="product photo" data-action="openModla" data-src="${imgSrc}" data-id="${id}" loading="lazy">
                    </picture>
                </div>
            </li>`
  }

  export const modalContent = (
    id,
    imgSrc
  )=>{

    const modalID= ('0'+ id.toString()).slice(-2)
    return`
                <h3 class="modal-id">ID:${modalID}</h3>
                <picture>
                    <img class="modla-image" src="${imgSrc}" loading="lazy">
                </picture>
    `
  }

  export const bannerModal = (
  )=>{
    return`
                <h3 class="modal-id"> Banner modal window is open !!</h3>
    `
  }