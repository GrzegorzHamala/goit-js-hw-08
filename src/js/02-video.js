import _default from "../../node_modules/@vimeo/player";
import throttle from "lodash/throttle";

const iframe = document.querySelector("#vimeo-player")
const LOCALSTORAGE_KEY = "videoplayer-current-time";

const player = new Vimeo.Player(iframe);
player.on("play", function() {
    console.log("Play the video!!!")
});

player.on("timeupdate", throttle((event) => {
    console.log(event.seconds)
    localStorage.setItem(LOCALSTORAGE_KEY, `${event.seconds}`)
}, 2000));
player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));