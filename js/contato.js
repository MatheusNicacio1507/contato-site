document.getElementById("form-contato").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const destino = "apple@contato.com";

    const assunto = encodeURIComponent("Contato pelo site");
    const corpo = encodeURIComponent(
        "Nome: " + nome + "\n" +
        "Email: " + email + "\n\n" +
        "Mensagem:\n" + mensagem
    );

    window.location.href = `mailto:${destino}?subject=${assunto}&body=${corpo}`;
});