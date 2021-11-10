const drumBeat = [
  {
    name: "Q",
    display: "Snare 1",
    URL: "sounds/kick.wav"
  }]

document.addEventListener('keydown', function(e) {
  if (e.keyCode === 65) {
    var audio = new Audio(drumBeat[0].URL);
    // document.getElementById('65').classList.add('playing');
    document.querySelector('div[data-key = "65"]').classList.add('playing');
    console.log('playing');
    audio.play();
  } 
});
