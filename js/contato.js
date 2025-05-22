document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contatoForm");

  const campos = {
    nome: {
      input: document.getElementById("nome"),
      mensagem: "O nome é obrigatório."
    },
    email: {
      input: document.getElementById("email"),
      mensagem: "Informe um e-mail válido."
    },
    telefone: {
      input: document.getElementById("telefone"),
      mensagem: "Informe um telefone válido (opcional, formato: (00)00000-0000).",
      opcional: true
    },
    assunto: {
      input: document.getElementById("assunto"),
      mensagem: "Selecione um assunto."
    },
    mensagem: {
      input: document.getElementById("mensagem"),
      mensagem: "A mensagem não pode estar vazia."
    }
  };
   for (let campo in campos) {
    const erroDiv = document.createElement("div");
    erroDiv.className = "erro-msg";
    erroDiv.style.color = "red";
    erroDiv.style.fontSize = "0.9em";
    erroDiv.style.display = "none";
    campos[campo].input.parentElement.appendChild(erroDiv);
    campos[campo].erroDiv = erroDiv;
  }

  const formatarTelefone = (tel) => {
    return tel.replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1)$2")
      .replace(/(\d{5})(\d{4})$/, "$1-$2");
  };
});
