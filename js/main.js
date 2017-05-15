function agregaPosteo() {
	var containerPosteos = document.getElementById("contenedor-posteos");
    var nombreFF = document.getElementById("nombre").value;
    var contenidoFF = document.getElementById("cajaposteos").value;
    var nuevoPost = document.createElement("div"); //creamos el nodo elemento donde irá nuestro post
    var contenedorNombre = document.createElement("strong"); //crear elementos donde guardar los valores
    var contenedorPost = document.createElement("p"); // idem
    var separacion = document.createElement("hr");	//idem

    var parrafCorazon = document.createElement("p"); //creamos el elemento para corazón
    var i = document.createElement("i"); //idem
    parrafCorazon.appendChild(i); //asignamos padre a icono de corazón

    parrafCorazon.setAttribute("class", "corazón"); //damos atributos a corazón
    i.setAttribute("class", "fa fa-heart");// idem
    i.setAttribute("arial-hidden", "true"); // idem

    var nodoNombre = document.createTextNode(nombreFF + " escribir:"); //Transformar el nombre a nodo texto
	var nodoPosteo = document.createTextNode(contenidoFF);// idem

	contenedorNombre.appendChild(nodoNombre); //asignamos padres a nodos creados
	contenedorPost.appendChild(nodoPosteo);// idem

	//asignando padres a nombres y contenido
	nuevoPost.appendChild(contenedorNombre);
	nuevoPost.appendChild(contenedorPost);
	nuevoPost.appendChild(parrafCorazon);
	nuevoPost.appendChild(separacion);

	//crear funcion click para el corazón y le asignamos la clase rojo de css
	i.addEventListener("click", function(){
		i.classList.toggle("rojo");
	});

	//le damos atributos a nuestro post y lo agregamos a nuestro contenedor-posteos
	nuevoPost.setAttribute("class", "posteo");
	containerPosteos.appendChild(nuevoPost);

	//para resetear los campos y  dejarlos nuevamente en blanco
	document.getElementById("nombre").value = "";
	document.getElementById("cajaposteos").value = "";
}