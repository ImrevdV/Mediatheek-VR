window.onload = () =>{
const destinations = document.getElementsByClassName("destinations");
const pijlen = document.getElementsByClassName("pijl");

for(let i=0; i<pijlen.length; i++){
    const pijl=pijlen[i];
    pijl.onclick = (event) =>{
        console.log(pijl.id);
        let destination = destinations[pijl.id];
        console.log(destination)
        let att = document.createAttribute("animation")
        att.value="property: position; easing: linear; dur: 3000; to: " +
        destination.getAttribute("position").x + " 1.6 " +
        destination.getAttribute("position").z
        camera.setAttribute("animation", att.value);
        for(let i=0; i<pijlen.length; i++){
            pijlen[i].setAttribute("visible", false); 
        }
        for(let i=0; i<destination.children.length; i++){
            console.log(destination.children[i]);
            destination.children[i].setAttribute("visible", true); 
        }

    }
}

}