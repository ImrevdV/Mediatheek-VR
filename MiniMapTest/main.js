window.onload = () =>{
    const destinations = document.getElementsByClassName("destinations")
    const locations = document.getElementsByClassName("location")
    let camera = document.getElementById("camera")

    for(let i = 0; i< destinations.length; i++){
        //console.log("he")
        const destination = destinations[i];

        
        destination.onclick = (event) =>{
            //console.log("klik");
            console.log(i);

            //camera.setAttribute("position", event.target.getAttribute("position"))
            
            let att = document.createAttribute("animation")
            att.value="property: position; easing: linear; dur: 3000; to: " +
            event.target.getAttribute("position").x + " 1.6 " +
            event.target.getAttribute("position").z
            camera.setAttribute("animation", att.value)

            console.log(locations[i])

            for (let l = 0; l< locations.length; l++){
                console.log(locations[l]);
                if (locations[l] = locations[i]) {
                    locations[i].setAttribute("opacity", 1);
                } else {
                    locations[i].setAttribute("opacity", 0);
                }
            }         
        }
    }
}