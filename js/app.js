
async function cargarFooter() {
    // 1. Buscamos la etiqueta <footer id="footer"> en el index.html (DOM)
    const contenedorFooter = document.getElementById("footer")
    // 2. Vamos a buscar el archivo footer.html a la carpeta components
    const respuesta = await fetch("./components/footer.html");

    // 3. Convertimos el archivo encontrado a texto HTML
    const codigoHtml = await respuesta.text();
    // 4. Insertamos el código HTML dentro de la etiqueta <footer>
    contenedorFooter.innerHTML = codigoHtml;


}

async function cargarNavbar() {
    const contenedorNavbar = document.getElementById("navbar");

    const respuesta = await fetch("./components/navbar.html");

    const codigoHtml = await respuesta.text();

    contenedorNavbar.innerHTML = codigoHtml;
}


// 5. Ejecutamos la función para que se muestre en pantalla
cargarFooter();
cargarNavbar();