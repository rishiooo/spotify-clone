console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('loveyourself.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');


let songs = [
    { songname: "Love-Yourself", filepath: "song/loveyourself.mp3", coverpath: "cover/cover1.jpg" },
    { songname: "Love-Yourself", filepath: "song/loveyourself.mp3", coverpath: "cover/cover1.jpg" },
    { songname: "Love-Yourself", filepath: "song/loveyourself.mp3", coverpath: "cover/cover1.jpg" },
    { songname: "Love-Yourself", filepath: "song/loveyourself.mp3", coverpath: "cover/cover1.jpg" },
]

//audioElement.play();
//Handle play/pause click
masterplay.addEventListener('click', () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        } else {
            audioElement.pause();
            masterplay.classList.remove('fa-pause-circle');
            masterplay.classList.add('fa-play-circle');
            gif.style.opacity = 0;
        }
    })
    //listen to events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    console.log('progress');
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})