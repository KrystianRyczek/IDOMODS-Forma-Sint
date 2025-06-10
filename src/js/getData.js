import {Swiper} from '../../node_modules/swiper/swiper-bundle.min.mjs'
import {
  createUpcomingSliderCard,
  createUpcomingSwiperCard,
  createProductCard,
  bannerInsertion,
  
} from './helpers';
const swiper = new Swiper(".swiper", {
slidesPerView: 1.1,
spaceBetween: 16,
loop: true,
navigation: {
nextEl: ".swiper-next-btn",
prevEl: ".swiper-prev-btn",
},
breakpoints: {
    1101: {
      slidesPerView: 4,
      spaceBetween: 24
    },
}
});  

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
        swiper.update()
      }

    } catch (error) {
      console.error(error.message);
    }
  })()


  


 

