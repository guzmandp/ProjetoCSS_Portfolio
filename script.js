var nome = document.getElementById("nome");
var email = document.getElementById("email");
var assunto = document.getElementById("assunto");
var error = document.getElementById("error");
//error.style.color = "red";

function enviarFormulario() {
  var expresion = /\w+@\w+\.+[a-z]/;
  var msgErro = [];

  if (nome.value === null || nome.value === "") {
    document.getElementById("nome").focus();
    document.getElementById("nome").focus();
    msgErro.push("⚠️ Digite um nome");
  }

  if (email.value === null || email.value === "") {
    document.getElementById("email").focus();
    msgErro.push("⚠️ Digite um email");
  }

  if (!expresion.test(email.value)) {
    document.getElementById("email").focus();
    msgErro.push("⚠️ Digite um email valido");
  }

  if (assunto.value === null || assunto.value === "") {
    document.getElementById("assunto").focus();
    msgErro.push("⚠️ Digite o asunto");
  } else {
    alert("Formulario enviado!!");
    document.getElementById("form").reset();
  }

  error.innerHTML = msgErro.join(" ,          ");

  return false;
}

////////////////////////////////////REPOSITORIO///////////////////////////////////////////////////

var idGitHub = document.getElementById("idGitHub");
var nomeGitHub = document.getElementById("nomeGitHub");
var linkGitHub = document.getElementById("linkGitHub");

function repositoriosGitHub() {
  fetch("https://api.github.com/users/guzmandp/repos")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((data) => {
        idGitHub.innerHTML += "<p/>" + data.id;
        nomeGitHub.innerHTML += "<p/>" + data.name;
        linkGitHub.innerHTML += "<p/>" + data.html_url;
      });

      console.log(data);
    })

    .catch((e) => console.log("Erro:" + e));
}

/* function createCard() {
  card = `
  <section class="box__section">
  <div>
      <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGL44UakF8E7HxJ4uLZQFtflHc5vp8Tw4lZw&usqp=CAU" 
          alt="Fusce ultrices"
          class="img__cardBox"
          >
  </div>
  <div>
      <h2 class="title__cardBox">${data.name}</h2>
      <p class="text__cardBox">${data.clone_url}</p>
  </div>
  </section>`;
  return card;
}

function Mostrar() {
  cardSection.innerHTML = createCard();
} */

repositoriosGitHub();
