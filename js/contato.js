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
});
