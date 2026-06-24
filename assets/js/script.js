const usuarioSalvo = localStorage.getItem("usuario");

if(usuarioSalvo){
    console.log(`Usuário encontrado: ${usuarioSalvo}`);
}

const  formulario = document.querySelector(".cadastro");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    const mensagem = document.getElementById("mensagem");

    if(nome === "" || email === ""){
        mensagem.style.display = "block";

        mensagem.innerHTML =
        "⚠️ Preencha todos os campos.";

        return;
    }

   // Salva o usuário
    localStorage.setItem("usuario", nome);

    // Redireciona para a página de análise
    window.location.href = "analise.html";
});