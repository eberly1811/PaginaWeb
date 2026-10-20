
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

async function cargarHero() {
    const contenedorHero = document.getElementById("contenido-hero");

    const respuesta = await fetch("./components/hero.html");

    const codigoHtml = await respuesta.text();

    contenedorHero.innerHTML = codigoHtml;
}

async function cargarNosotros() {
    const contenedorNosotros = document.getElementById("contenido-nosotros");

    const respuesta = await fetch("./components/nosotros.html");

    const codigoHtml = await respuesta.text();

    contenedorNosotros.innerHTML = codigoHtml;
}

async function cargarPresentacion() {
    const contenedorPresentacion = document.getElementById("contenido-presentacion");

    const respuesta = await fetch("./components/presentacion.html", { cache: "no-store" });

    const codigoHtml = await respuesta.text();

    contenedorPresentacion.innerHTML = codigoHtml;
}

async function cargarEstadisticas() {
    const contenedorEstadisticas = document.getElementById("contenido-estadisticas");

    const respuesta = await fetch("./components/estadisticas.html");

    const codigoHtml = await respuesta.text();

    contenedorEstadisticas.innerHTML = codigoHtml;
}

async function cargarCarreras() {
    const contenedorCarreras = document.getElementById("contenido-carreras");

    const respuesta = await fetch("./components/carreras.html");

    const codigoHtml = await respuesta.text();

    contenedorCarreras.innerHTML = codigoHtml;
    initCarrerasCarousel();
}

function initCarrerasCarousel() {
    const track = document.getElementById("carreras-track");
    const prevBtn = document.getElementById("carreras-prev");
    const nextBtn = document.getElementById("carreras-next");

    if (!track || !prevBtn || !nextBtn) return;

    const cards = Array.from(track.children);
    if (cards.length === 0) return;

    let currentIndex = 0;

    const getVisibleCards = () => {
        if (window.innerWidth >= 1280) return 5;
        if (window.innerWidth >= 768) return 3;
        return 2;
    };

    const getCardStep = () => {
        const firstCard = cards[0];
        const styles = window.getComputedStyle(track);
        const gap = Number.parseFloat(styles.columnGap || styles.gap || "0");
        return firstCard.offsetWidth + gap;
    };

    const updateCarousel = () => {
        const maxIndex = Math.max(0, cards.length - getVisibleCards());
        currentIndex = Math.min(currentIndex, maxIndex);
        const offset = getCardStep() * currentIndex;
        track.style.transform = `translateX(-${offset}px)`;

        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= maxIndex;
        prevBtn.style.opacity = currentIndex === 0 ? "0.5" : "1";
        nextBtn.style.opacity = currentIndex >= maxIndex ? "0.5" : "1";
    };

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex -= 1;
            updateCarousel();
        }
    });

    nextBtn.addEventListener("click", () => {
        const maxIndex = Math.max(0, cards.length - getVisibleCards());
        if (currentIndex < maxIndex) {
            currentIndex += 1;
            updateCarousel();
        }
    });

    window.addEventListener("resize", updateCarousel);
    updateCarousel();
}

async function cargarBanner() {
    const contenedorBanner = document.getElementById("contenido-banner");

    const respuesta = await fetch("./components/banner.html");

    const codigoHtml = await respuesta.text();

    contenedorBanner.innerHTML = codigoHtml;
}

async function cargarServicios() {
    const contenedorServicios = document.getElementById("contenido-servicios");

    const respuesta = await fetch("./components/servicios.html");

    const codigoHtml = await respuesta.text();

    contenedorServicios.innerHTML = codigoHtml;
}

async function cargarNoticias() {
    const contenedorNoticias = document.getElementById("contenido-noticias");

    const respuesta = await fetch("./components/noticias.html");

    const codigoHtml = await respuesta.text();

    contenedorNoticias.innerHTML = codigoHtml;
}

async function cargarEventos() {
    const contenedorEventos = document.getElementById("contenido-eventos");

    const respuesta = await fetch("./components/eventos.html");

    const codigoHtml = await respuesta.text();

    contenedorEventos.innerHTML = codigoHtml;
}

async function cargarGaleria() {
    const contenedorGaleria = document.getElementById("contenido-galeria");

    const respuesta = await fetch("./components/galeria.html");

    const codigoHtml = await respuesta.text();

    contenedorGaleria.innerHTML = codigoHtml;
}

async function cargarContacto() {
    const contenedorContacto = document.getElementById("contenido-contacto");

    const respuesta = await fetch("./components/contacto.html");

    const codigoHtml = await respuesta.text();

    contenedorContacto.innerHTML = codigoHtml;
}


// 5. Ejecutamos la función para que se muestre en pantalla
if (document.getElementById("footer")) cargarFooter();
if (document.getElementById("navbar")) cargarNavbar();
if (document.getElementById("contenido-hero")) cargarHero();
if (document.getElementById("contenido-nosotros")) cargarNosotros();
if (document.getElementById("contenido-presentacion")) cargarPresentacion();
if (document.getElementById("contenido-estadisticas")) cargarEstadisticas();
if (document.getElementById("contenido-carreras")) cargarCarreras();
if (document.getElementById("contenido-banner")) cargarBanner();
if (document.getElementById("contenido-servicios")) cargarServicios();
if (document.getElementById("contenido-noticias")) cargarNoticias();
if (document.getElementById("contenido-eventos")) cargarEventos();
if (document.getElementById("contenido-galeria")) cargarGaleria();
if (document.getElementById("contenido-contacto")) cargarContacto();