


const randomColor = function () {
                                    let hex = "0123456789ABCDEF"
                                    let color = "#89CA00"
                                
                                    for (let i = 0; i < 6; i++) {
                                        color +=  hex[Math.floor(Math.random()*16)]
                                    }
                                    return color;
                                }


let intervalId
let startChangingColor = function () {

    if (!intervalId) {
        intervalId = setInterval(bgColor,200)
    }    
     function bgColor() {
        document.body.style.backgroundColor = randomColor()
       
    } 
}


let stopChangingColor = function () {

    clearInterval(intervalId)
    intervalId = null
}




document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)



