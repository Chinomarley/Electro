
const preguntas = [
  {
    texto: "Un restaurador ha abierto por una falla en el ramal. ¿Qué debes hacer primero?",
    opciones: [
      "Reportarlo al operador y esperar instrucciones",
      "Rearmarlo sin avisar",
      "Subirte a ver qué pasó",
    ],
    correcta: 0,
  },
  {
    texto: "¿Cuál herramienta es obligatoria para probar una cuchilla energizada?",
    opciones: [
      "Multímetro",
      "Pértiga con detector de voltaje",
      "Pinzas",
    ],
    correcta: 1,
  },
  {
    texto: "¿A qué distancia mínima debes mantenerte en BT (baja tensión)?",
    opciones: [
      "30 cm",
      "1 metro",
      "No hay restricción",
    ],
    correcta: 1,
  },
  {
    texto: "¿Un ayudante puede operar una cuchilla por su cuenta?",
    opciones: [
      "Sí, si está seguro",
      "No, requiere permiso del operador",
      "Solo si no hay tensión",
    ],
    correcta: 1,
  },
];

let actual = 0;
let puntaje = 0;

function cargarPregunta() {
  const pregunta = preguntas[actual];
  document.getElementById("question").innerText = pregunta.texto;
  const contenedor = document.getElementById("options");
  contenedor.innerHTML = "";
  pregunta.opciones.forEach((op, idx) => {
    const btn = document.createElement("button");
    btn.innerText = op;
    btn.onclick = () => {
      if (idx === pregunta.correcta) puntaje += 25;
      actual++;
      if (actual < preguntas.length) {
        cargarPregunta();
      } else {
        mostrarResultado();
      }
    };
    contenedor.appendChild(btn);
  });
}

function mostrarResultado() {
  document.getElementById("quiz-container").style.display = "none";
  const res = document.getElementById("result");
  res.style.display = "block";
  res.innerHTML = `<h2>Resultado final: ${puntaje}/100</h2>
    <p>${puntaje >= 75 ? "✅ Seguridad aceptable" : puntaje >= 50 ? "⚠️ Riesgo moderado" : "❌ Peligro grave"}</p>`;
}

document.getElementById("nextBtn").style.display = "none";
cargarPregunta();
