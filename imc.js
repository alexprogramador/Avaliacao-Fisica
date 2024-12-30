function calculaIMC() {
    let peso = parseFloat(document.formulario.peso.value);
    let altura = parseFloat(document.formulario.altura.value);
    let resultado = peso / (altura * altura);
    resultado = resultado.toFixed(2);
    
    // Exibe o resultado do IMC na página
    document.getElementById("imcResult").innerHTML = "Seu IMC é: " + resultado;
}

function calculaG() {
    let triceps = parseFloat(document.formulario.triceps.value);
    let suprailiaca = parseFloat(document.formulario.suprailiaca.value);
    let subscapular = parseFloat(document.formulario.subscapular.value);
    let abdominal = parseFloat(document.formulario.abdominal.value);
    
    let resultado = (triceps + suprailiaca + subscapular + abdominal) * 0.153 + 5.783;
    resultado = resultado.toFixed(2);
    
    // Exibe o resultado do percentual de gordura na página
    document.getElementById("gorduraResult").innerHTML = "Seu percentual de gordura é: " + resultado;
    
    // Armazena o percentual de gordura em um campo escondido para ser usado nos cálculos subsequentes
    document.formulario.percgord = resultado;
}

function calculaPG() {
    let peso = parseFloat(document.formulario.peso.value);
    let percgord = parseFloat(document.formulario.percgord); // Usa o percentual de gordura armazenado

    // Verifica se o percentual de gordura já foi calculado
    if (!percgord) {
        alert("Por favor, calcule o percentual de gordura primeiro.");
        return;
    }
    
    let pesgord = (percgord / 100) * peso; // O percentual deve ser dividido por 100
    pesgord = pesgord.toFixed(2);
    
    // Exibe o resultado do Peso de Gordura na página
    document.getElementById("pgResult").innerHTML = "Seu Peso de Gordura é: " + pesgord;
    
    // Armazena o peso de gordura para os cálculos subsequentes
    document.formulario.pesgord = pesgord;
}

function calculaLBM() {
    let peso = parseFloat(document.formulario.peso.value);
    let pesgord = parseFloat(document.formulario.pesgord); // Usa o peso de gordura armazenado
    
    // Verifica se o peso de gordura já foi calculado
    if (!pesgord) {
        alert("Por favor, calcule o Peso de Gordura primeiro.");
        return;
    }
    
    let lbm = peso - pesgord;
    lbm = lbm.toFixed(2);
    
    // Exibe o resultado de LBM (massa magra) na página
    document.getElementById("lbmResult").innerHTML = "Sua Massa Magra é: " + lbm;
    
    // Armazena a massa magra para o cálculo do peso ideal
    document.formulario.lbm = lbm;
}

function calculaPI() {
    let lbm = parseFloat(document.formulario.lbm); // Usa a LBM armazenada
    
    // Verifica se a LBM já foi calculada
    if (!lbm) {
        alert("Por favor, calcule a Massa Magra primeiro.");
        return;
    }
    
    let pi = lbm * 1.14;
    pi = pi.toFixed(2);
    
    // Exibe o resultado do Peso Ideal na página
    document.getElementById("piResult").innerHTML = "Seu Peso Ideal é: " + pi;
}
