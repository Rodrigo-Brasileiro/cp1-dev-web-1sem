var usuario = prompt("Nome de usuário: ");
var senha = prompt("Senha: ")
if (usuario == "admin" && senha == "1234"){
    console.log("Login foi realizado com sucesso")
}
else{
    console.log("Houve falha na autenticação")
}
