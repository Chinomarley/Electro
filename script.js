
// Interacción con componentes
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

// Zona de preguntas
const preguntas = [
  {
    texto: "¿Qué componente se usa para reconectar una línea después de una falla temporal?",
    opciones: ["Apartarrayos", "Restaurador", "Seccionador"],
    correcta: "Restaurador"
  },
  {
    texto: "¿Qué herramienta permite operar equipos a distancia con seguridad?",
    opciones: ["Pértiga", "Canastilla", "Transformador"],
    correcta: "Pértiga"
  },
  {
    texto: "¿Qué equipo protege de sobrevoltajes por rayos?",
    opciones: ["Restaurador", "Apartarrayos", "Cuchilla"],
    correcta: "Apartarrayos"
  },
  {
    texto: "¿Cuál de estos no puede abrirse con carga eléctrica?",
    opciones: ["Cuchilla", "Seccionador", "Transformador"],
    correcta: "Seccionador"
  },
  {
    texto: "¿Qué equipo sirve para trabajos en altura?",
    opciones: ["Logbuster", "Canastilla", "Pértiga"],
    correcta: "Canastilla"
  }
];

const preguntaElem = document.getElementById('pregunta');
const opcionesElem = document.getElementById('opciones');
const resultadoElem = document.getElementById('resultado');

function nuevaPregunta() {
  resultadoElem.textContent = "";
  const pregunta = preguntas[Math.floor(Math.random() * preguntas.length)];
  preguntaElem.textContent = pregunta.texto;
  opcionesElem.innerHTML = "";

  pregunta.opciones.forEach(op => {
    const btn = document.createElement('button');
    btn.textContent = op;
    btn.onclick = () => {
      if (op === pregunta.correcta) {
        resultadoElem.textContent = "✅ ¡Correcto!";
        resultadoElem.style.color = "green";
      } else {
        resultadoElem.textContent = `❌ Incorrecto. Respuesta correcta: ${pregunta.correcta}`;
        resultadoElem.style.color = "red";
      }
    };
    opcionesElem.appendChild(btn);
  });
}

// Iniciar
nuevaPregunta();