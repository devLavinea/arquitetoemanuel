var caminho = window.location.search;
console.log(caminho);

// Segundo projeto do serviço

if (caminho === "?projeto=services_2") {
  let img1 = document.querySelector("#page_services_img");
  img1.setAttribute("src", "/src/images/img10.png");

  let text = document.querySelector("#page_services_text_1");
  text.innerHTML =
    "Oferecemos consultoria especializada para reformas, proporcionando soluções criativas e funcionais para transformar seu espaço. <br> Analisamos suas necessidades, avaliamos a estrutura existente e propomos melhorias que otimizam o uso do ambiente, respeitando o orçamento e o prazo estabelecido. <br>Nosso foco é garantir que cada reforma traga eficiência, qualidade, conforto e sustentabilidade. <br>Estamos ao seu lado em todas as etapas, desde o planejamento até a execução, para garantir um resultado final que atenda às suas expectativas.";

  let title = document.querySelector("#page_services_title");
  title.textContent = "Consultoria para reformas";
}

// Terceiro projeto do serviço

if (caminho === "?projeto=services_3") {
  let img1 = document.querySelector("#page_services_img");
  img1.setAttribute("src", "/src/images/img2.png");

  let text = document.querySelector("#page_services_text_1");
  text.innerHTML =
    "Aproveitar espaços de forma inteligente, utilizando materiais naturais, é uma das nossas especialidades.<br> Trabalhamos com soluções sustentáveis que valorizam a beleza e a funcionalidade de cada ambiente, usando madeira, pedras, bambu e outros materiais orgânicos.<br> Nosso objetivo é criar espaços harmoniosos, confortáveis e eficientes, respeitando o meio ambiente.<br> Através de um design consciente e inovador, otimizamos cada metro quadrado, unindo estética e sustentabilidade em perfeita harmonia.";

  let title = document.querySelector("#page_services_title");
  title.textContent = "Aproveitamento de espaços com materias naturais";
}

//botão de fechar
document.getElementById("voltarBtn").addEventListener("click", function () {
  window.history.back(); // Volta à página anterior
});
