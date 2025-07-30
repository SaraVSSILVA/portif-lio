const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

document.addEventListener("DOMContentLoaded", function () {
  const timeline = document.querySelector(".dna-timeline");
  if (!timeline) return;
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
});

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
