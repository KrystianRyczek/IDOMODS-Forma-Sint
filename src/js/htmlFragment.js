export const upcomingProduct = (
    id,
    imgSrc,
    text,
  ) => {
    return `    <div class="item" id="upcoming-${id}">

                    <div class="upcoming-product-box">
                        <div class="upcoming-product-atr" >
                            <div class="upcoming-product-atr-p">
                                <p >Bestseller</p>
                            </div>
                            <svg class="hart-svg">
                                <path d="M17.778 30.8l-1.962-1.764c-2.947-2.673-5.384-4.971-7.311-6.892s-3.454-3.632-4.581-5.13c-1.127-1.498-1.915-2.865-2.362-4.101s-0.672-2.489-0.672-3.76c0-2.523 0.851-4.635 2.552-6.337s3.814-2.552 6.337-2.552c1.552 0 3.019 0.363 4.4 1.089s2.581 1.767 3.6 3.123c1.019-1.356 2.219-2.397 3.6-3.123s2.848-1.089 4.4-1.089c2.523 0 4.635 0.851 6.337 2.552s2.552 3.814 2.552 6.337c0 1.272-0.224 2.525-0.672 3.76s-1.235 2.603-2.362 4.101c-1.127 1.499-2.651 3.209-4.573 5.13s-4.361 4.218-7.319 6.892l-1.962 1.764zM17.778 27.197c2.844-2.559 5.185-4.753 7.022-6.581s3.289-3.416 4.356-4.764 1.807-2.545 2.222-3.592c0.415-1.046 0.622-2.082 0.622-3.108 0-1.778-0.593-3.259-1.778-4.444s-2.667-1.778-4.444-1.778c-1.404 0-2.701 0.398-3.892 1.195s-2.134 1.905-2.829 3.325h-2.557c-0.707-1.431-1.653-2.543-2.838-3.333s-2.48-1.186-3.884-1.186c-1.767 0-3.245 0.593-4.436 1.778s-1.786 2.667-1.786 4.444c0 1.026 0.207 2.062 0.622 3.108s1.156 2.243 2.222 3.592 2.519 2.933 4.356 4.756c1.837 1.822 4.178 4.019 7.022 6.59z"
                                 class="hart-svg" style="fill:black;stroke:black;stroke-width:1";/>
                            </svg>
                        </div>
                        <picture data-action="openModla">
                            <img class="upcoming-product-image" src=${imgSrc} alt="product photo" data-action="openModla" data-src="${imgSrc}" data-id="${id}">
                        </picture>
                    </div>
                    <div class="upcoming-product-description-box">
                        <h1 class="upcoming-product-description">${text}</h1>
                        <p class="upcoming-product-price">€300,00 EUR</p>
                    </div>
                </div>`
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
    id,
    imgSrc,
    text,
  )=>{
    return` <li class="product-list-item" id="product-${id}">
                <div class="product-item-box">
                    <h3 class="product-item-h">ID: ${id}</h3>
                    <picture>
                        <img class="product-item-image" src="${imgSrc}" alt="product photo" data-action="openModla" data-src="${imgSrc}" data-id="${id}">
                    </picture>
                </div>
            </li>`
  }

  export const modalContent = (
    id,
    imgSrc
  )=>{
    return`
                <h3 class="modal-id">ID:${id}</h3>
                <picture>
                    <img class="modla-image" src="${imgSrc}">
                </picture>
    `
  }

  export const bammerModal = (
  )=>{
    return`
                <h3 class="modal-id"> Banner modal window is open !!</h3>
    `
  }