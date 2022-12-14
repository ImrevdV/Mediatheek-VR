window.onload = () =>{
    const kasten = document.getElementsByClassName("kast")
    const shine = document.getElementsByClassName("shine")
    const vinden = document.getElementsByClassName("vind")

    for (let i = 0; i < vinden.length; i++){
        console.log("hier")
        const vind = vinden[i];
        console.log(vind);

        vind.onclick = (event) =>{
            console.log("klik");
            shine[i].setAttribute("opacity", 0.5);
        }
    }

    for (let i = 0; i < kasten.length; i++){
        const kast = kasten[i];

        kast.onclick = (event) =>{
            shine[i].setAttribute("opacity", 0);

        }
    }

}