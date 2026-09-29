async function cargarComponente(id, archivo) {
<<<<<<< HEAD

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
=======
    const response = await fetch(archivo);
    const html = await response.text();

    document.getElementById(id).innerHTML = html;
}

cargarComponente("footer", "./components/footer.html");
>>>>>>> a164419bb9b92e99fc168a4b37b4eda22f75311c
