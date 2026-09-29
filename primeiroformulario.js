const picareta = document.querySelector(".picareta");
const nome = document.querySelector("#nome");
let rodada = false;

function movimento() {
    rodada = !rodada;
    picareta.style.transform = rodada ? "rotate(90deg)" : "rotate(0deg)";
}
nome.addEventListener("input", movimento);