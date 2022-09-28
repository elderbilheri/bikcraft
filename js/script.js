// Script Ativar Link

const links = document.querySelectorAll(".header-menu li a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Script Ativar Itens do Orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// Script Galera de Bicicletas

const galeria = document.querySelectorAll(".nimbus-fotos img");
const galeriaContainer = document.querySelector(".nimbus-fotos");

function trocarImagem(event) {
  const img = event.currentTarget;
  galeriaContainer.prepend(img);
}

function eventoGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventoGaleria);

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
