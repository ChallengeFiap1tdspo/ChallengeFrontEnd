document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cadastroForm");

    const campos = {
        nome: {
            input: document.getElementById("nome"),
            mensagem: "O nome completo é obrigatório."
        },
        cpf: {
            input: document.getElementById("cpf"),
            mensagem: "Informe um CPF válido (formato: 000.000.000-00)."
        },
        dataNasc: {
            input: document.getElementById("dataNasc"),
            mensagem: "A data de nascimento é obrigatória."
        },
        email: {
            input: document.getElementById("email"),
            mensagem: "Informe um e-mail válido."
        },
        telefone: {
            input: document.getElementById("telefone"),
            mensagem: "Informe um telefone válido (formato: (00)00000-0000)."
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
});
