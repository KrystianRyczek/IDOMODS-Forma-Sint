var count = 0;
var inscriment = 0
var margin = 0
var slider = 0
var itemDisplay = 0
var screenWidth= 0
var item = 0
var itemleft = 0
var itemSlide = 0
var prevMode =true
var mode = true
var mobile = true
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

