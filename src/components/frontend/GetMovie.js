import matrix1 from "./img/matrix1.jpg";
import aot from "./img/aot.jpg";
import hostiles from "./img/hostiles.jpg";
import terminator from "./img/terminator.jpg";
import rickandmorty from "./img/rickandmorty.jpg";
import peaky from "./img/peaky.png";
import bladerunner from "./img/bladerunner.jpg";
import alteredcarbon from "./img/alteredcarbon.jpg";

export default function getMovie() {
  return [
    { id: "matrix", name: "The Matrix", cover: matrix1 },
    { id: "aot", name: "Attack on Titans", cover: aot },
    { id: "hostiles", name: "Hostiles", cover: hostiles },
    { id: "rickandmorty", name: "Rick and Morty", cover: rickandmorty },
    { id: "terminator", name: "The Terminator", cover: terminator },
    { id: "peaky", name: "Peaky Blinders", cover: peaky },
    { id: "alteredcarbon", name: "Altered Carbon", cover: alteredcarbon },
    { id: "bladerunner", name: "Blade Runner", cover: bladerunner },
  ];
}
