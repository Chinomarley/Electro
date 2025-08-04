function mostrarMenu() {
  document.getElementById('menu').style.display = 'block';
}

function cargarModulo(modulo) {
  const contenido = document.getElementById('contenido');
  if (modulo === 'componentes') {
    contenido.innerHTML = '<h2>Componentes del Sistema</h2><p>Aquí se mostrarán transformadores, cuchillas, apartarrayos y más con su descripción.</p>';
  } else if (modulo === 'entrenamiento') {
    contenido.innerHTML = '<h2>Entrenamiento Interactivo</h2><p>Simulación con decisiones: ¿puedes intervenir? ¿qué herramienta usas?</p>';
  } else if (modulo === 'preguntas') {
    contenido.innerHTML = '<h2>Preguntas Aleatorias</h2><p>(Ejemplo) ¿Qué tipo de fusible se utiliza para un transformador de 10kVA?</p><button onclick="alert(\'Correcto\')">Tipo K</button>';
  } else if (modulo === 'examen') {
    contenido.innerHTML = '<h2>Examen Técnico</h2><p>10 preguntas aleatorias. Puntaje al final.</p>';
  } else if (modulo === 'guias') {
    contenido.innerHTML = '<h2>Guías de Seguridad</h2><p>Uso de pértiga, distancia en baja tensión, uso de canastilla, etc.</p>';
  } else {
    contenido.innerHTML = '';
  }
}
