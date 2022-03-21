function sidicequesi(){
	alert("Joder gracias por aceptar, recuerda hacer click en <Contactanos>, y seras redireccionado para completar este formulario, gracias. Este proyecto es gracias a Jeff Palma, joder lo amo att. J. Herrrera");    
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
