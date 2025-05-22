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
});
