document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript de Kevin cargado correctamente");

    // --- FUNCIÓN 1: BOTÓN IR ARRIBA ---
    const btnTop = document.getElementById("btnTop");
    if (btnTop) {
        window.addEventListener("scroll", () => {
            btnTop.style.display = window.scrollY > 200 ? "block" : "none";
        });
        btnTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // --- FUNCIÓN 2: MODO OSCURO (DARK MODE) ---
    // Creamos un botón flotante dinámicamente para no romper tu HTML
    const darkModeBtn = document.createElement("button");
    darkModeBtn.innerHTML = "🌙";
    darkModeBtn.id = "darkModeBtn";
    darkModeBtn.style.cssText = "position:fixed; bottom:20px; left:20px; z-index:100; padding:10px; cursor:pointer; border-radius:50%; border:none; background:#333; color:white; font-size:20px;";
    document.body.appendChild(darkModeBtn);

    darkModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        // Cambiar el icono según el modo
        darkModeBtn.innerHTML = document.body.classList.contains("dark-theme") ? "☀️" : "🌙";
    });

    // --- FUNCIÓN 3: VALIDACIÓN DE FORMULARIO (Pestaña Contactos) ---
    const formulario = document.querySelector(".formulario");
    if (formulario) {
        formulario.addEventListener("submit", (e) => {
            const nombre = formulario.querySelector('input[type="text"]').value;
            const mensaje = formulario.querySelector('textarea').value;

            if (nombre === "" || mensaje === "") {
                e.preventDefault(); // Evita que se envíe
                alert("⚠️ Kevin dice: Por favor, completa tu nombre y mensaje antes de enviar.");
            } else {
                alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado (simulación).`);
            }
        });
    }
});