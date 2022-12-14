Window.onload = () =>{
    const video = document.getElementsByClassName("video")
    const videoControls = document.getElementsByClassName("videoControls")
    console.log("Hier")

    for(let i=0; i<videoControls.length; ){
        const videoControls = videoControls[i];
        videoControls.onclick = (event) =>{
            console.log("klik")
            if (video.paused){
                video.play()
                videoControls.setAttribute("color", red)
                console.log("play")
            } else {
                video.paused()
                videoControls.setAttribute("color", green)
                console.log("paused")
            }
        }

    }
}