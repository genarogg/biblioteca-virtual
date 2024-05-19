const $quitarAcentos = (cadena) => {
  const acentos = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    Á: "A",
    É: "E",
    Í: "I",
    Ó: "O",
    Ú: "U",
  };
  return cadena
    .split("")
    .map((letra) => acentos[letra] || letra)
    .join("")
    .toString();
};

const $createFriendlyUrl = (title) => {
  return title
    .normalize("NFD") // Reemplaza acentos con su carácter homólogo en inglés
    .replace(/[\u0300-\u036f]/g, "") // Elimina los acentos
    .replace(/\s+/g, "-") // Reemplaza los espacios por guiones
    .toLowerCase(); // Convierte a minúsculas
};

const normalizeFilename = (filename) => {
    console.log("filename", filename)
  return filename;
};

export default normalizeFilename;
