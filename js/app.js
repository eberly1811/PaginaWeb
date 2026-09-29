async function cargarComponente(id, archivo) {

    const respuesta = await fetch(archivo);

    const contenido = await respuesta.text();

    document.getElementById(id).innerHTML =
        contenido;

    if (id === "footer") {
        iniciarFooter();
    }
}


cargarComponente(
    "footer",
    "./components/footer.html"
);