import {
    upcomingProduct,
    product,
    banner,
    upcomingSwiper,
  } from './htmlFragment';

export const createUpcomingSliderCard = data => {
  const upcomingSection = document.querySelector('#slider');  
  let sliderHtml=""
  for (let i = 0; i < 14; i++) {
    sliderHtml=sliderHtml.concat(" ", upcomingProduct(data[i].id, data[i].image, data[i].text))
  }
  upcomingSection.innerHTML = sliderHtml
};

export const createUpcomingSwiperCard = data => {
  const upcomingSection = document.querySelector('#swiperWrapper');  
  let swiperHtml=""
  for (let i = 0; i < 14; i++) {
    swiperHtml=swiperHtml.concat(" ", upcomingSwiper(data[i].id, data[i].image, data[i].text))
  }
  upcomingSection.innerHTML = swiperHtml
};

export const createProductCard = data => {
  const productSection = document.querySelector('#product-list');
  let productCardHtml=""
  for (let i = 0; i < data.length; i++) {
    productCardHtml=productCardHtml.concat(" ", product(i, data[i].id, data[i].image))
  }
  productSection.innerHTML = productCardHtml
};

export const bannerInsertion = ()=>{
  let productItem
  window.screen.width>360
        ? productItem = document.querySelector('#product-4')
        :productItem = document.querySelector('#product-3')
  productItem.insertAdjacentHTML("afterend", banner())
}