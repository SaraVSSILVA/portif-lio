const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

document.addEventListener("DOMContentLoaded", function () {
  // Ajuste da timeline (caso exista)
  const timeline = document.querySelector(".dna-timeline");
  if (timeline) {
    const nodos = timeline.querySelectorAll(".nodo");
    const gap = 60; // igual ao CSS
    let totalWidth = 0;
    nodos.forEach((nodo, i) => {
      totalWidth += nodo.offsetWidth;
      if (i > 0) totalWidth += gap;
    });
    timeline.style.width = totalWidth + "px";

    const linha = timeline.querySelector(".linha-genetica");
    if (linha) {
      linha.style.width = totalWidth + "px";
    }
  }

  // Sistema de recomendações simples (caso use em outra parte do site)
  const interesse = document.getElementById("interesse");
  const sugestao = document.getElementById("sugestao");
  if (interesse && sugestao) {
    interesse.addEventListener("change", function () {
      let rec = "";
      switch (interesse.value) {
        case "frontend":
          rec = "Sugestão: Explore o projeto de Dashboard de Dados e aprofunde em React e responsividade!";
          break;
        case "backend":
          rec = "Sugestão: Veja o AutoBot para automação com Python e APIs RESTful.";
          break;
        case "dados":
          rec = "Sugestão: O Dashboard de Dados é perfeito para quem quer trabalhar com análise e visualização!";
          break;
        case "automacao":
          rec = "Sugestão: O AutoBot mostra como automatizar tarefas repetitivas usando programação.";
          break;
        case "ux":
          rec = "Sugestão: Confira o projeto de Dashboard de Dados, que foca na experiência do usuário e design responsivo.";
          break;
        case "mobile":
          rec = "Sugestão: O projeto de Dashboard de Dados é responsivo e ideal para mobile.";
          break;
        case "todos":
          rec = "Sugestão: Explore todos os projetos para uma visão completa de desenvolvimento web.";
          break;
        default:
          rec = "";
      }
      sugestao.textContent = rec;
    });
  }

  // Bot Assistente de Recomendações
  const botIcone = document.getElementById("bot-icone");
  const botModal = document.getElementById("bot-modal");
  const botFechar = document.getElementById("bot-fechar");
  const interesseBot = document.getElementById("interesse-bot");
  const sugestaoBot = document.getElementById("sugestao-bot");

  if (botIcone && botModal && botFechar) {
    botIcone.addEventListener("click", () => {
      botModal.classList.toggle("aberto");
      botModal.classList.toggle("fechado");
    });
    botFechar.addEventListener("click", () => {
      botModal.classList.remove("aberto");
      botModal.classList.add("fechado");
    });
  }

  if (interesseBot && sugestaoBot) {
    interesseBot.addEventListener("change", function () {
      let rec = "";
      switch (interesseBot.value) {
        case "frontend":
          rec = "Sugestão: Explore o projeto de Dashboard de Dados e aprofunde em React e responsividade!";
          break;
        case "backend":
          rec = "Sugestão: Veja o AutoBot para automação com Python e APIs RESTful.";
          break;
        case "dados":
          rec = "Sugestão: O Dashboard de Dados é perfeito para quem quer trabalhar com análise e visualização!";
          break;
        case "automacao":
          rec = "Sugestão: O AutoBot mostra como automatizar tarefas repetitivas usando programação.";
          break;
        case "mobile":
          rec = "Sugestão: O projeto de Dashboard de Dados é responsivo e ideal para mobile.";
          break;
        case "ux":
          rec = "Sugestão: Confira o projeto de Dashboard de Dados, com foco em experiência do usuário.";
          break;
        case "todos":
          rec = "Sugestão: Explore todos os projetos para uma visão completa de desenvolvimento web.";
          break;
        default:
          rec = "";
      }
      sugestaoBot.textContent = rec;
    });
  }

  // Validação do formulário (caso exista)
  const formulario = document.querySelector("form");
  if (formulario) {
    formulario.addEventListener("submit", function (event) {
      event.preventDefault();

      const campoNome = document.querySelector("#name");
      const txtNome = document.querySelector("#txtNome");

      if (campoNome.value.length < 3) {
        txtNome.innerHTML = "O Nome deve ter no minimo 3 caracteres.";
        campoNome.focus();
        return;
      } else {
        txtNome.innerHTML = "";
      }

      const campoEmail = document.querySelector("#email");
      const txtEmail = document.querySelector("#txtEmail");

      if (!campoEmail.value.match(emailRegex)) {
        txtEmail.innerHTML = "Digite um E-mail válido.";
        campoEmail.focus();
        return;
      } else {
        txtEmail.innerHTML = "";
      }

      const campoSubject = document.querySelector("#subject");
      const txtSubject = document.querySelector("#txtSubject");

      if (campoSubject.value.length < 5) {
        txtSubject.innerHTML = "O Assunto deve ter no minimo 5 caracteres.";
        campoSubject.focus();
        return;
      } else {
        txtSubject.innerHTML = "";
      }

      const campoMessage = document.querySelector("#message");

      window.alert("Formulário Enviado com Sucesso!");

      campoNome.value = "";
      campoEmail.value = "";
      campoSubject.value = "";
      campoMessage.value = "";
    });
  }
});