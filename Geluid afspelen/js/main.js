var cursongIndex = 0
var isPlaying = false
var songlist = ["/assets/music/Helmet.mp3", "/assets/music/Armen.mp3", "/assets/music/Letmego.mp3"];
var jukebox = document.getElementById("jukebox");

function skipSong() {
    let jukebox = document.getElementById("jukebox");

    cursongIndex = cursongIndex + 1
    if (cursongIndex > (songlist.length - 1)) {cursongIndex = 0}
    let cursong = songlist[cursongIndex]

    jukebox.setAttribute("sound", `src: ${cursong}; distanceModel: linear; autoplay: true; positional: false; volume: 0.1;`)
}

function rewSong() {
    let jukebox = document.getElementById("jukebox");

    cursongIndex = cursongIndex - 1
    if (cursongIndex < 0) {cursongIndex = (songlist.length - 1)}
    console.log(cursongIndex)
    let cursong = songlist[cursongIndex]

    jukebox.setAttribute("sound", `src: ${cursong}; distanceModel: linear; autoplay: true; positional: false; volume: 0.1;`)
}

function pauseSong() {
    let jukebox = document.getElementById("jukebox");

    if (isPlaying) {
        jukebox.components.sound.pauseSound();
    } else {
        jukebox.components.sound.playSound();
    }
    isPlaying = !isPlaying
}

function pop(bubble) {
    let randomX = Math.random() * (11 - -11) + -11
    let randomY = Math.random() * (11 - -3) + -3

    let cords = randomX.toString()+' '+randomY.toString()+' -15'
    console.log(cords)

    bubble.setAttribute("position", cords)
}