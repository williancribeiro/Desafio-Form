function fazPost(url, body) {
  console.log("Body=", body);
}

function recebeContato() {
  event.preventDefault();
  let url = "";
  let nome = document.getElementById("nome").value;
  let telefone = document.getElementById("telefone").value;
  let email = document.getElementById("email").value;
  let mensagem = document.getElementById("mensagem").value;
  console.log(nome);
  console.log(telefone);
  console.log(email);
  console.log(mensagem);

  body = {
    name: nome,
    telephone: telefone,
    email: email,
    message: mensagem,
  };

  fazPost(url, body);
}
