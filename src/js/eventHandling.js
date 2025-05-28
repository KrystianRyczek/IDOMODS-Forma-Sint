import {
    banner,
    modalContent,
    bannerModal
  } from './htmlFragment';

  import {
    createProductCard,
    bannerInsertion,
  } from './getData';


window.addEventListener('click', event => {
    const action = event.target.dataset.action
    if( action === "openModla"){
        const modalBox = document.querySelector('#modla-box')
        modalBox.innerHTML = modalContent(event.target.dataset.id, event.target.dataset.src)
        const modalBackdrop = document.querySelector('#backdrop')
        modalBackdrop.classList.add('modal-open')
    }
    if( action === "closeModla"){
        const modalBackdrop = document.querySelector('#backdrop')
        modalBackdrop.classList.remove('modal-open')
    }
    if( action === "openMenu"){
        const menuBox = document.querySelector('#hamburger-menu-box')
        menuBox.classList.add('hamburger-open')
    }
    if( action === "closeMenu"){
        const menuBox = document.querySelector('#hamburger-menu-box')
        menuBox.classList.remove('hamburger-open')
    }
    if( action === "openBanner"){
        const bannerBox = document.querySelector('#banner-box')
        bannerBox !== null? bannerBox.remove(): false 
        const modalBackdrop = document.querySelector('#backdrop')
        modalBackdrop.classList.add('modal-open')
        const modalBox = document.querySelector('#modla-box')
        modalBox.innerHTML = bannerModal()
    }    
  });
  window.addEventListener('change', event => {

    (async function getData() {
        const url = `https://brandstestowy.smallhost.pl/api/random?pageNumber=1&pageSize=${event.target.value}`;
        
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
    
          const contentData = await response.json();

          if(contentData.data.length!==0){

            console.log(contentData.data.length)
            createProductCard(contentData.data)
            bannerInsertion()
          }
    
        } catch (error) {
          console.error(error.message);
        }
      })()



  });



  window.addEventListener("resize", ()=>{
    const bannerContent = document.querySelector('#banner')
    bannerContent !== null? bannerContent.remove(): false 

    if (window.screen.width>360){
        const item = document.querySelector('#product-5')
        item.insertAdjacentHTML("afterend", banner()) 
    }
    if (window.screen.width<=360){
        const item = document.querySelector('#product-4')
        item.insertAdjacentHTML("afterend", banner())
    }
  })