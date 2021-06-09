const sujeto = ["Mi Perro", "Mi papa", "El piedrero de la esquina", "Ehiber"];
const verbo = ["se comio", "me boto", "choco", "me rompio"];
const objeto = ["mi tarea", "mi tesis", "mi carro", "mi pendrive"];
const fecha = ["ayer", "anoche", "la semana pasada", "esta mañana"];

window.onload = function () {
  let sujetoAleatorio =
    sujeto[Math.floor(Math.random() * (sujeto.length - 0) + 0)];
  let verboAleatorio =
    verbo[Math.floor(Math.random() * (verbo.length - 0) + 0)];
  let objetoAleatorio =
    objeto[Math.floor(Math.random() * (objeto.length - 0) + 0)];
  let fechaAleatoria =
    fecha[Math.floor(Math.random() * (fecha.length - 0) + 0)];

  const excusa = `${sujetoAleatorio} ${verboAleatorio} ${objetoAleatorio} ${fechaAleatoria}`;
  console.log(sujetoAleatorio);
  document.getElementById("App").innerHTML = excusa;
};
