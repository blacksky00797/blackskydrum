const totalKeys = document.querySelectorAll(".drum");
const songList = ["tom-1.mp3","tom-2.mp3","tom-3.mp3","tom-4.mp3","snare.mp3","kick-bass.mp3","crash.mp3"];
document.addEventListener("keypress",(event) => {
    for ( let id=0 ; id<totalKeys.length ; id++ ) {
        if ( totalKeys[id].classList.contains(event.key) ) {
            const song = new Audio("sounds/"+songList[id]);
            totalKeys[id].firstChild.classList.add("drumAnimation");
            song.play();
            setTimeout( () => {
                totalKeys[id].firstChild.classList.remove("drumAnimation");
            },0.1);
            break;
        }
    }
});