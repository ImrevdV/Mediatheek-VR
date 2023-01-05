window.onload = () =>{
    const kasten = document.getElementsByClassName("kast")
    const shine = document.getElementsByClassName("shine")
    const shower = document.getElementsByClassName("show")
    let bord = document.getElementsByClassName("bord")

    const vinden = document.getElementsByClassName("vind")

    for (let i = 0; i < shower.length; i++){
        const show = shower[i];
        console.log(show);

        show.onclick = (event) =>{
            console.log("klik");
            bord[0].object3D.position.set(0, 2, -13.4);
            console.log(bord[0]);
        }
    }


    for (let i = 0; i < vinden.length; i++){
        const vind = vinden[i];
        vind.onclick = (event) =>{
            console.log("klik");
            console.log(vind)
            console.log(vind.id);
            shine[vind.id].setAttribute("opacity", 0.5);
            bord[0].object3D.position.set(0, -6, -13.4);
        }
    }

    for (let i = 0; i < kasten.length; i++){
        const kast = kasten[i];

        kast.onclick = (event) =>{
            shine[i].setAttribute("opacity", 0);

        }
    }

}