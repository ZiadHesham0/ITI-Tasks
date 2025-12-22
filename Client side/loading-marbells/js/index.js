let images = document.querySelectorAll("img");
let i = 0;

setInterval(function(){    
    images[i].setAttribute("src","images/marble1.jpg")
    i = (i+1)%images.length;
    images[i].setAttribute("src","images/marble2.jpg")
},1000) 