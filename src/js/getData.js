import {
  upcomingProduct,
  product,
  banner,
  upcomingSwiper,
} from './htmlFragment';

const createUpcomingSliderCard = data => {
  const upcomingSection = document.querySelector('#slider');  
  let sliderHtml=""
  for (let i = 0; i < 14; i++) {
    sliderHtml=sliderHtml.concat(" ", upcomingProduct(data[i].id, data[i].image, data[i].text))
  }
  upcomingSection.innerHTML = sliderHtml
};

const createUpcomingSwiperCard = data => {
  const upcomingSwiperSection = document.querySelector('#swiperWrapper'); 
  let swiperHtml=""
  for (let i = 0; i < 14; i++) {
    swiperHtml=swiperHtml.concat(" ", upcomingSwiper(data[i].id, data[i].image, data[i].text))
  }
  upcomingSwiperSection.innerHTML = swiperHtml
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

(async function getData() {
    const url = "https://brandstestowy.smallhost.pl/api/random?pageNumber=1&pageSize=14";
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const contentData = await response.json();

      if(contentData.data.length!==0){
        //createUpcomingSliderCard(contentData.data)
        createUpcomingSwiperCard(contentData.data)
        createProductCard(contentData.data)
        bannerInsertion()
      }

    } catch (error) {
      console.error(error.message);
    }
  })()


  


 

