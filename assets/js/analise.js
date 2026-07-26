// ========================================
// RECUPERA O USUÁRIO SALVO
// ========================================

// Busca no localStorage o nome que foi salvo
// anteriormente durante o cadastro.
const usuario = localStorage.getItem("usuario");

// Captura no HTML o elemento onde será
// exibida a mensagem de boas-vindas.
const boasVindas = document.getElementById("boasVindas");

// Verifica se existe um usuário salvo.
// Se existir, mostra o nome dele na página.
if (usuario) {
    boasVindas.innerText = `Olá, ${usuario} 👋`;
}


// ========================================
// BASE DE CONTRATOS (SIMULAÇÃO)
// ========================================

// Array que funciona como nossa primeira
// base de dados simulada.
//
// Cada objeto dentro do array representa
// um contrato público.
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

// Exibe todo o array de contratos no Console.
// Serve para verificar se os dados foram
// carregados corretamente.
console.log(contratos);


// ========================================
// CAPTURA O BOTÃO PESQUISAR
// ========================================

// Procura no HTML o elemento que possui
// o id "btnPesquisar".
const btn = document.getElementById("btnPesquisar");


// ========================================
// EVENTO DE CLIQUE
// ========================================

// addEventListener fica "escutando" o botão.
//
// Quando o usuário clicar no botão,
// a função abaixo será executada.
btn.addEventListener("click", function () {

    // ====================================
    // CAPTURA OS DADOS DO FORMULÁRIO
    // ====================================

    // Pega o valor selecionado no campo Estado.
    const estado = document.getElementById("estado").value;

    // Pega o município selecionado pelo usuário.
    const municipio = document.getElementById("municipio").value;

    // Pega o texto digitado no campo de pesquisa.
    const termo = document.getElementById("termo").value;

    // Captura a área do HTML onde mostraremos
    // o resultado da pesquisa.
    const resultado = document.getElementById("resultado");


    // ====================================
    // VALIDAÇÃO DOS CAMPOS
    // ====================================

    // Verifica se o município não foi selecionado
    // OU se o campo de pesquisa está vazio.
    //
    // || significa "OU".
    if (municipio === "" || termo === "") {

        // Mostra uma mensagem de aviso no HTML.
        resultado.innerHTML = `
            <div class="cardResultado">

                <p>
                    ⚠️ Selecione um município e digite um termo de pesquisa.
                </p>

            </div>
        `;

        // Encerra a execução da função.
        //
        // Isso impede que o código continue
        // tentando pesquisar com campos vazios.
        return;
    }


    // ====================================
    // PERCORRE A LISTA DE CONTRATOS
    // ====================================

    // forEach percorre cada objeto existente
    // dentro do array "contratos".
    contratos.forEach(function (contrato) {

        // Mostra no Console o contrato que
        // está sendo analisado naquele momento.
        console.log(contrato);


        // ====================================
        // COMPARA OS DADOS
        // ====================================

        // Aqui fazemos duas verificações:
        //
        // 1. O município do contrato precisa ser
        //    igual ao município selecionado.
        //
        // 2. O objeto do contrato precisa conter
        //    o termo digitado pelo usuário.
        //
        // && significa "E".
        //
        // Portanto, as DUAS condições precisam
        // ser verdadeiras.
        if (
            contrato.municipio === municipio &&
            contrato.objeto.includes(termo)
        ) {

            // ====================================
            // EXIBE O CONTRATO ENCONTRADO
            // ====================================

            // innerHTML permite inserir elementos
            // HTML dentro da área "resultado".
            //
            // ${} permite colocar valores das
            // variáveis dentro da Template String.
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
        }

    });

});