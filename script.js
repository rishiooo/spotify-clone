console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('songs/phir le aya dil.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    { songname: "phir le aya dil", filePath: "songs/phir le aya dil.mp3", coverPath: "covers/cover1.jpg" },
    { songname: "phir le aya dil", filePath: "songs/phir le aya dil.mp3", coverPath: "covers/cover1.jpg" },
    { songname: "phir le aya dil", filePath: "songs/phir le aya dil.mp3", coverPath: "covers/cover1.jpg" },
    { songname: "phir le aya dil", filePath: "songs/loveyourself.mp3", coverPath: "covers/cover1.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src[i].coverPath;
    element.getElementsByClassName("Songname")[0].innerText = songs[i].songname;
})

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

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'songs/phir le aya dil.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
    })
})