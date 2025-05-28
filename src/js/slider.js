let count = 0;
let inscriment = 0
let margin = 0
let slider = 0
let itemDisplay = 0
let screenWidth= 0
let item = 0
let itemleft = 0
let itemSlide = 0
let prevMode =true
let mode = true
let mobile = true
window.addEventListener('resize', ()=>{
    if(screen.width>360){
       mobile = false
    }
    if(screen.width<361){
       mobile = true
    }
    prevMode=mode
    mode=mobile
    if(prevMode!==mode){
        slider = document.getElementsByClassName("slider-width")[0]
        inscriment=0
        count=0
        slider.style.left= count +"px"    
    }
    
  })

window.addEventListener('click', (event) => {
    if(screen.width>360){
        screenWidth = 1860
        itemDisplay = 4
    }
    if(screen.width<361){
        screenWidth = 316
        itemDisplay = 1
    }
    slider = document.getElementsByClassName("slider-width")[0]
    item = document.getElementsByClassName("item").length 
    itemleft = item % itemDisplay
    itemSlide = Math.floor(item / itemDisplay)-1

    const action = event.target.dataset.action
    if( action === "loadNext"){
        if (inscriment === itemSlide){
            inscriment++
            count=count-(screenWidth*itemleft/itemDisplay)
            slider.style.left= count +"px"
            return
        }
        if (inscriment< itemSlide){
            
        inscriment++
        count=count-screenWidth
        slider.style.left= count +"px"
            return
        }
    }
    if( action === "loadPrev"){
        if (count< -screenWidth){

            count=count+screenWidth
            slider.style.left= count +"px"
            inscriment--
            return
            }
            if (count>= -screenWidth && count<0){
                count=0
                inscriment=0
                slider.style.left= count +"px"
            return
            }
    }
  });

