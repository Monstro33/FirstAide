import "../Instructions.js";

var video = document.getElementById("video");

function togglePlayPause() {
  var playpause = document.getElementById("playpause");
  if (video.paused || video.ended) {
    playpause.title = "pause";
    playpause.innerHTML = "pause";
    video.play();
  } else {
    playpause.title = "play";
    playpause.innerHTML = "play";
    video.pause();
  }
}
