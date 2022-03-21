function sidicequesi(){
        alert("Sabía que dirías que sí, no tenías otra opción, de todas maneras Te amo <3");
}

function quetoquelboton(){
    width = window.innerWidth;
    height = window.innerHeight;

    newWidth = (Math.random() * width);
    newHeight = (Math.random() * height);

    document.getElementById("btnNo").style.position = "absolute";
    document.getElementById("btnNo").style.left = newWidth + "px";
    document.getElementById("btnNo").style.top = newHeight + "px";
}
