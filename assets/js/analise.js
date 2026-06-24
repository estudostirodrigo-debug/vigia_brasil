// Recupera o nome salvo no cadastro

const usuario = localStorage.getItem("usuario");

const boasVindas =
document.getElementById("boasVindas");

// ========================================
// BASE DE CONTRATOS (SIMULAÇÃO)
// ========================================

// Esta é nossa primeira base de dados.
// Cada item representa um contrato público.

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

// ====================================
// TESTE DA BASE DE DADOS
// ====================================

// Mostra toda a lista de contratos no Console
console.log(contratos);

if(usuario){
    boasVindas.innerText =
    `Olá, ${usuario} 👋`;
}

// Captura o botão pesquisar

const btn =
document.getElementById("btnPesquisar");

// Quando clicar no botão

btn.addEventListener("click", function(){

    // Captura os valores dos campos

    const estado =
    document.getElementById("estado").value;

    const municipio =
    document.getElementById("municipio").value;

    const termo =
    document.getElementById("termo").value;

    // ====================================
    // PERCORRE A LISTA DE CONTRATOS
    // ====================================

    // Para cada contrato da lista
    contratos.forEach(function(contrato){

    console.log(contrato);



    if (
        contrato.municipio === municipio &&
        contrato.objeto.includes(termo)
    ) {
        resultado.innerHTML = `

    <div class="cardResultado">

        <h3>📊 Contrato Encontrado</h3>

        <p>
            <strong>Município:</strong>
            ${contrato.municipio}
        </p>

        <p>
            <strong>Objeto:</strong>
            ${contrato.objeto}
        </p>

        <p>
            <strong>Empresa:</strong>
            ${contrato.empresa}
        </p>

        <p>
            <strong>Valor:</strong>
            ${contrato.valor}
        </p>

        <p>
            <strong>Status:</strong>
            ${contrato.status}
        </p>

    </div>

`;
    };
    });

    // ====================================
    // PROCURA UM CONTRATO NA BASE DE DADOS
    // ====================================

   //const contratoEncontrado =
    //contratos.find();

    // Área onde aparecerá o resultado

    const resultado =
    document.getElementById("resultado");

    // Validação simples

    if(municipio === "" || termo === ""){

        resultado.innerHTML = `
            <div class="cardResultado">

                <p>
                    ⚠️ Selecione um município e digite um termo de pesquisa.
                </p>

            </div>
        `;

        return;
    });
