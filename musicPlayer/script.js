let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

// Use 'onloadedmetadata' to ensure the duration is actually loaded
song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

function playPush() {
    if (song.paused) {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    } else {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
}

// Update progress bar as the song plays
// Instead of an IF statement, we use a simple interval or the 'timeupdate' event
setInterval(() => {
    if (!song.paused) {
        progress.value = song.currentTime;
    }
}, 500);

// When the user drags the progress bar
progress.onchange = function() {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
};