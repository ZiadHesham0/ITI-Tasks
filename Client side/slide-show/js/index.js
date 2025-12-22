let images = [1, 2, 3, 4, 5, 6]
let myImage = document.getElementById("myImage");
let pauseBtn = document.getElementById("pause")
let resumeBtn = document.getElementById("resume")
let nextBtn = document.getElementById("next")
let prevBtn = document.getElementById("prev")
let i = 1;
let intervalId;
let slidingFlag = false;

// for(let i = 0 ; i <= images.length ; i++)
// {
//     if(i === 6)
//         i = 0;
//     else if(i === -1)
//         i = 0;
// }


function startSlideShow() {
    if (!slidingFlag) {
        intervalId = setInterval(function () {
            i++;
            if (i === 6) {
                i = 1;
            }
            if (i < 1)
                i = 1;
            myImage.setAttribute("src", `images/${i}.jpg`)
        }, 1000)
        slidingFlag = 1
    }
}
pauseBtn.addEventListener("click", function () {
    clearInterval(intervalId);
    slidingFlag = false;
})
resumeBtn.addEventListener("click", function () {
    startSlideShow();
})

nextBtn.addEventListener("click", function () {
    clearInterval(intervalId)
    i++;
    if (i > 5)
        i = 1;
    myImage.setAttribute("src", `images/${i}.jpg`)
})
prevBtn.addEventListener("click", function () {
    clearInterval(intervalId)
    i--;
    if (i < 1)
        i = 5;
    myImage.setAttribute("src", `images/${i}.jpg`)
})


startSlideShow()