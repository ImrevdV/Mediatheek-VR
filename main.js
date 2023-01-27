window.onload = () =>{
    const kasten = document.getElementsByClassName("kast")
    const shine = document.getElementsByClassName("shine")
    const shower = document.getElementsByClassName("show")
    let bord = document.getElementsByClassName("bord")
    const vindtext = document.getElementsByClassName("vindtext")
    let vindtextid = -1;
    const destinations = document.getElementsByClassName("destinations");
    const pijlen = document.getElementsByClassName("pijl");

    const sleep = async (milliseconds) => {
        await new Promise(resolve => {
            return setTimeout(resolve, milliseconds)
        });
    };

    const vinden = document.getElementsByClassName("vind")

    for (let i = 0; i < shower.length; i++){
        const show = shower[i];
        show.onclick = (event) =>{
            bord[0].object3D.position.set(2.7, 1, -16);
        }
    }


    for (let i = 0; i < vinden.length; i++){
        const vind = vinden[i];
        vind.onclick = (event) =>{
            shine[vind.id].setAttribute("opacity", 0.5);
            bord[0].object3D.position.set(0, -6, -12.4);
            vindtextid = (vind.id);
        }
    }

    for (let i = 0; i < kasten.length; i++){
        const kast = kasten[i];

        kast.onclick = async (event) =>{
            shine[i].setAttribute("opacity", 0);
        if (vindtextid == i) {
            vindtext[0].object3D.position.set(0, 2, -3);
            await sleep(5000);
            vindtext[0].object3D.position.set(0, 2, 3);
        } 

        }
    }

    for(let i=0; i<pijlen.length; i++){
        const pijl=pijlen[i];
        pijl.onclick = (event) =>{
            let destination = destinations[pijl.id];
            let att = document.createAttribute("animation")
            att.value="property: position; easing: linear; dur: 3000; to: " +
            destination.getAttribute("position").x + " 1 " +
            destination.getAttribute("position").z
            camera.setAttribute("animation", att.value);
            for(let i=0; i<pijlen.length; i++){
                pijlen[i].setAttribute("visible", false); 
            }
            for(let i=0; i<destination.children.length; i++){
                destination.children[i].setAttribute("visible", true); 
            }
    
        }
    }

}