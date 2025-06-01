import {
    createProductCard,
    bannerInsertion,
  } from './helpers';

window.addEventListener('click', event => {

    if(event.target.id.includes("opt") ){

        const arrayInput = document.querySelectorAll('#custom-select > input')
        arrayInput.forEach((input)=>{

            const labelElement = document.querySelector(`label[for="${input.id}"] > svg`);
            const pageSize = document.querySelector(`label[for="${input.id}"] > span`).textContent
            if(input.checked){
                (async function getData() {
                    
                    const url = `https://brandstestowy.smallhost.pl/api/random?pageNumber=1&pageSize=${pageSize}`;
                    
                    try {
                      const response = await fetch(url);
                      if (!response.ok) {
                        throw new Error(`Response status: ${response.status}`);
                      }
                
                      const contentData = await response.json();
            
                      if(contentData.data.length!==0){
                        createProductCard(contentData.data)
                        bannerInsertion()
                      }
                
                    } catch (error) {
                      console.error(error.message);
                    }
                  })()

                labelElement.classList.value.includes("select-icon-on")
                    ?false
                    :labelElement.classList.add('select-icon-on')
                labelElement.classList.value.includes("select-icon-off")
                    ?labelElement.classList.remove('select-icon-off')
                    :false
            }else{
                labelElement.classList.value.includes("select-icon-off")
                ?false
                :labelElement.classList.add('select-icon-off')
            labelElement.classList.value.includes("select-icon-on")
                ?labelElement.classList.remove('select-icon-on')
                :false

            }
        })




    }
  });