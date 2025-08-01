
const infoData = {
    transformador: "Convierte voltajes de media a baja tensión para su distribución segura.",
    apartarrayos: "Protege los equipos de descargas atmosféricas redirigiendo la energía al suelo.",
    restaurador: "Dispositivo de protección que reestablece el servicio tras una falla temporal.",
    pertiga: "Herramienta aislante usada para maniobras en líneas energizadas de forma segura.",
    canastilla: "Plataforma elevadora para permitir trabajo seguro en postes y estructuras."
};

function showInfo(componente) {
    const infoBox = document.getElementById("info-box");
    infoBox.innerText = infoData[componente];
    infoBox.style.display = "block";
}
