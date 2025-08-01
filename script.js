
const componentes = document.querySelectorAll('.componente');
const infoBox = document.getElementById('info-box');
const titulo = document.getElementById('titulo-componente');
const descripcion = document.getElementById('descripcion-componente');

componentes.forEach(comp => {
  comp.addEventListener('click', () => {
    titulo.textContent = comp.dataset.nombre;
    descripcion.textContent = comp.dataset.info;
    infoBox.classList.remove('oculto');
  });
});

function cerrarInfo() {
  infoBox.classList.add('oculto');
}