// botão para adicionar pacientes

var botaoAdd = document.querySelector("#adicionar-paciente");

botaoAdd.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    // busca inforações do paciente
    var paciente = obterPacienteForm(form);
    
    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMsgErro(erros);

        return;
    }

    addPaciente(paciente);

    form.reset();
    var mensagensErro = document.querySelector("#mensagem-erro");
    mensagensErro.innerHTML = "";
});

function addPaciente (paciente) {
    // cria tr e td do paciente
    var pacienteTr = montaTr(paciente);

    // adiciona o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
}

function obterPacienteForm(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function exibeMsgErro(erros) {
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {
    var erros = [];

    if (paciente.nome.length == 0) erros.push("Insira um nome.");

    if (paciente.peso.length == 0) erros.push("Insira o peso.");

    if (!validaPeso(paciente.peso)) erros.push("Peso inválido!");
    
    if (paciente.altura.length == 0) erros.push("Insira a altura.");

    if (!validaAltura(paciente.altura)) erros.push("Altura inválida!");
    
    if (paciente.gordura.length == 0) erros.push("Insira a % de gordura.");

    return erros;
}