// Calcula o imc
var paciente = document.querySelectorAll(".paciente");

for (let i = 0; i < paciente.length; i++) {
    var peso = paciente[i].querySelector(".info-peso").textContent;
    var altura = paciente[i].querySelector(".info-altura").textContent;
    var tdImc = paciente[i].querySelector(".info-imc");

    var vPeso = validaPeso(peso);
    var vAltura = validaAltura(altura);

    if (!vPeso) {
        vPeso = false;
        tdImc.textContent = "Peso inválido!";
        paciente[i].classList.add("dado-invalido");
    }

    if (!vAltura) {
        vAltura = false;
        tdImc.textContent = "Altura Inválida!";
        paciente[i].classList.add("dado-invalido");
    }

    if (vPeso && vAltura) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 250) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura < 2.5) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}