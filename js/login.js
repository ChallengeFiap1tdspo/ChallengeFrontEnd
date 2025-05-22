document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("paciente-form");

    const campos = {
        cpf: {
            input: document.getElementById("idCpf"),
            mensagem: "Informe um CPF válido (formato: 000.000.000-00)."
        },
        idade: {
            input: document.getElementById("idIdade"),
            mensagem: "Informe uma idade válida (maior que zero)."
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

