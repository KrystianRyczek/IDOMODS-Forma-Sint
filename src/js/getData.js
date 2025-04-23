import {
  upcomingProduct,
  product,
  banner
} from './htmlFragment';



const createUpcomingProductCard = data => {
  const upcomingSection = document.querySelector('#slider'); 
  let htmlFragment=""
  for (let i = 0; i < 14; i++) {
    htmlFragment=htmlFragment.concat(" ", upcomingProduct(data[i].id, data[i].image, data[i].text))
  }
  upcomingSection.innerHTML = htmlFragment

};
const createProductCard = data => {
  const productSection = document.querySelector('#product-list');
  let htmlFragment=""
  for (let i = 0; i < 14; i++) {
    htmlFragment=htmlFragment.concat(" ", product(data[i].id, data[i].image, data[i].text))
  }
  productSection.innerHTML = htmlFragment
};

const bannerInsertion = ()=>{
  let productItem
  window.screen.width>360
        ? productItem = document.querySelector('#product-5')
        :productItem = document.querySelector('#product-4')
  productItem.insertAdjacentHTML("afterend", banner())
}



(async function getData() {
    const url = "https://brandstestowy.smallhost.pl/api/random?pageNumber=1&pageSize=20";
    
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


  


 

