document.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if (!audio) return;

    //console.dir(audio);
    audio.currentTime = 0;
    
    key.classList.add("playing");
    audio.play();
    setTimeout(function(){
        key.classList.remove("playing");
       }, 500);
    
    //audio.classList.remove("playing");
});