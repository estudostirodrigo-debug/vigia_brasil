// Recupera o nome salvo no cadastro

const usuario = localStorage.getItem("usuario");

const boasVindas =
document.getElementById("boasVindas");

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
    }

    // Exibe o resultado

    resultado.innerHTML = `
        <div class="cardResultado">

            <h3>📊 Resultado da Pesquisa</h3>

            <p>
                <strong>Estado:</strong>
                ${estado}
            </p>

            <p>
                <strong>Município:</strong>
                ${municipio}
            </p>

            <p>
                <strong>Termo:</strong>
                ${termo}
            </p>

            <br>

            <p>
                🔍 Pesquisa realizada com sucesso.
            </p>

        </div>
    `;
});