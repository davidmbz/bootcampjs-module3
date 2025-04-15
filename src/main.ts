import "./style.css";

// Géneros musicales
const rock: string = "🎸 Rock";
const popRock: string = "🎵 Pop Rock";
const hardRock: string = "🤘 Hard Rock";
const clasica: string = "🎼 Clásica";

// Estilo para el nombre del grupo
const estiloTitulo =
  "font-weight:bold; font-size:16px; background-color: green;";

// Interfaz para los grupos
interface gruposMusicales {
  nombre: string;
  año: number;
  activos: boolean;
  genero: string;
}

// Grupos
const grupo1: gruposMusicales = {
  nombre: "The Beatles",
  año: 1960,
  activos: true,
  genero: popRock,
};
const grupo2: gruposMusicales = {
  nombre: "Queen",
  año: 1970,
  activos: false,
  genero: rock,
};
const grupo3: gruposMusicales = {
  nombre: "AC DC",
  año: 1973,
  activos: true,
  genero: hardRock,
};
const grupo4: gruposMusicales = {
  nombre: "Ludwig van Beethoven",
  año: 1770,
  activos: false,
  genero: clasica,
};
const grupo5: gruposMusicales = {
  nombre: "The Rolling Stones",
  año: 1962,
  activos: true,
  genero: rock,
};

// Mostrar grupos
console.log(
  `%c${grupo1.nombre}%c / ${grupo1.año} / ${grupo1.activos} / ${grupo1.genero}`,
  estiloTitulo,
  ""
);
console.log(
  `%c${grupo2.nombre}%c / ${grupo2.año} / ${grupo2.activos} / ${grupo2.genero}`,
  estiloTitulo,
  ""
);
console.log(
  `%c${grupo3.nombre}%c / ${grupo3.año} / ${grupo3.activos} / ${grupo3.genero}`,
  estiloTitulo,
  ""
);
console.log(
  `%c${grupo4.nombre}%c / ${grupo4.año} / ${grupo4.activos} / ${grupo4.genero}`,
  estiloTitulo,
  ""
);
console.log(
  `%c${grupo5.nombre}%c / ${grupo5.año} / ${grupo5.activos} / ${grupo5.genero}`,
  estiloTitulo,
  ""
);
