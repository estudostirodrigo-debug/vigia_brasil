// ========================================
// RECUPERA O USUÁRIO
// ========================================

const usuario = localStorage.getItem("usuario");
const boasVindas = document.getElementById("boasVindas");

if (usuario) {
    boasVindas.innerText = `Olá, ${usuario} 👋`;
}

// ========================================
// BASE DE CONTRATOS (SIMULAÇÃO)
// ========================================

const contratos = [
    {
        municipio: "Garopaba",
        objeto: "Pavimentação Asfáltica",
        empresa: "Construtora Sul LTDA",
        valor: "R$ 1.250.000,00",
        status: "🟡 Em análise"
    },
    {
        municipio: "Paulo Lopes",
        objeto: "Merenda Escolar",
        empresa: "Alimentos Costa Sul",
        valor: "R$ 185.000,00",
        status: "🟢 Regular"
    },
    {
        municipio: "Imbituba",
        objeto: "Aquisição de Medicamentos",
        empresa: "Farmabrasil",
        valor: "R$ 320.000,00",
        status: "🟢 Regular"
    },
    {
        municipio: "Palhoça",
        objeto: "Implantação de Rede de Água",
        empresa: "Saneamento Sul",
        valor: "R$ 2.500.000,00",
        status: "🟡 Em análise"
    }
];

// ========================================
// TESTE DA BASE DE DADOS
// ========================================

console.log(contratos);

// ========================================
// BOTÃO PESQUISAR
// ========================================

const btnPesquisar = document.getElementById("btnPesquisar");

btnPesquisar.addEventListener("click", function () {

    // Captura os valores dos campos

    const estado = document.getElementById("estado").value;
    const municipio = document.getElementById("municipio").value;
    const termo = document.getElementById("termo").value;

    // Área onde aparecerá o resultado

    const resultado = document.getElementById("resultado");

    // Validação

    if (municipio === "" || termo === "") {

        resultado.innerHTML = `
            <div class="cardResultado">
                <p>⚠️ Selecione um município e digite um termo de pesquisa.</p>
            </div>
        `;

        return;
    }

    // Limpa resultados anteriores

    resultado.innerHTML = "";

    // Percorre a lista de contratos

    contratos.forEach(function (contrato) {

        console.log(contrato);

        if (
            contrato.municipio === municipio &&
            contrato.objeto.includes(termo)
        ) {

            resultado.innerHTML = `
                <div class="cardResultado">

                    <h3>📊 Contrato Encontrado</h3>

                    <p><strong>Município:</strong> ${contrato.municipio}</p>

                    <p><strong>Objeto:</strong> ${contrato.objeto}</p>

                    <p><strong>Empresa:</strong> ${contrato.empresa}</p>

                    <p><strong>Valor:</strong> ${contrato.valor}</p>

                    <p><strong>Status:</strong> ${contrato.status}</p>

                </div>
            `;
        }

    });

});