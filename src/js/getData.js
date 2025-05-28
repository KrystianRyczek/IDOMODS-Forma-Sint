import {
  upcomingProduct,
  product,
  banner,
  upcomingSwiper,
} from './htmlFragment';



const createUpcomingProductCard = data => {
  const upcomingSection = document.querySelector('#slider'); 
  const upcomingSwiperSection = document.querySelector('#swiperWrapper'); 
  let htmlFragment=""
  let htmlSwiper=""
  for (let i = 0; i < 14; i++) {
    htmlFragment=htmlFragment.concat(" ", upcomingProduct(data[i].id, data[i].image, data[i].text))
    htmlSwiper=htmlSwiper.concat(" ", upcomingSwiper(data[i].id, data[i].image, data[i].text))
  }
  upcomingSection.innerHTML = htmlFragment
  upcomingSwiperSection.innerHTML = htmlSwiper
};
export const createProductCard = data => {
  const productSection = document.querySelector('#product-list');
  let htmlFragment=""
  for (let i = 0; i < data.length; i++) {
    htmlFragment=htmlFragment.concat(" ", product(i, data[i].id, data[i].image))
  }
  productSection.innerHTML = htmlFragment
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
        createUpcomingProductCard(contentData.data)
        createProductCard(contentData.data)
        bannerInsertion()
      }

    } catch (error) {
      console.error(error.message);
    }
  })()


  


 

