let audio = document.getElementsByTagName("audio")[0]
let audioImg = document.getElementsByTagName("img")[0];
let playBtn = document.getElementById("play");
let nextBtn = document.getElementById("next")
let prevBtn = document.getElementById("prev")
let sounds = document.getElementsByClassName("sound")
let currentSound = 0; 
let playFlag = false;
let progessBar = document.getElementById("progessBar")
let volumeCtrl = document.getElementById("volumeCtrl")
function startAudio(){
    if(! playFlag){
        audio.play();
        playBtn.classList.replace("fa-play" , "fa-pause")
        playFlag = true
    }
    else{
        audio.pause();
        playBtn.classList.replace("fa-pause" , "fa-play")
        playFlag = false
    }
}


playBtn.addEventListener("click" , startAudio)
nextBtn.addEventListener("click" , function(){
    
    sounds[currentSound].classList.remove("active")
    currentSound ++;
    if(currentSound > 3)
        currentSound = 0;
    console.log(currentSound);
    sounds[currentSound].classList.add("active")
    audio.setAttribute("src",`audios/music${currentSound}.mp3`)    
    audioImg.setAttribute("src",`images/mario${currentSound}.jpeg`);
    audio.play();
    playBtn.classList.replace("fa-play" , "fa-pause")
    playFlag = true;

})
prevBtn.addEventListener("click" , function(){
    sounds[currentSound].classList.remove("active")
    currentSound --;
    if(currentSound < 0)
        currentSound = 3;
    console.log(currentSound);
    sounds[currentSound].classList.add("active")
    audio.setAttribute("src",`audios/music${currentSound}.mp3`)    
    audioImg.setAttribute("src",`images/mario${currentSound}.jpeg`);
    audio.play();
    playBtn.classList.replace("fa-play" , "fa-pause")
    playFlag = true;
})

audio.addEventListener("timeupdate", function () {
  var progress = parseInt((audio.currentTime / audio.duration) * 100);
  progessBar.value = progress;
});

volumeCtrl.addEventListener("input", function () {
  audio.volume = volumeCtrl.value / 100;
});


function changeSong(id){
    audio.src = `audios/music${id}.mp3` 
    audioImg.src = `images/mario${id}.jpeg`
    audio.play();
    playBtn.classList.replace("fa-play" , "fa-pause")
    playFlag = true
    // startAudio();
}