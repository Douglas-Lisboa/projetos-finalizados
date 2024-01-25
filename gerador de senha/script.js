let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789*/.!@";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
sizePassword.innerHTML = this.value;

}

function generatePassword(){
  let pass = "";
  for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  let passwordElement = document.getElementById("password");
  if (passwordElement) {
    containerPassword.classList.remove("hide");
    passwordElement.innerHTML = pass;
  } else {
    console.error("Elemento com a ID 'password' não encontrado.");
  } novaSenha = pass
  
}

function copyPassword() {
  if (document.hasFocus()) {
    navigator.clipboard.writeText(novaSenha)
      .then(() => {
        alert("Senha copiada com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao copiar senha para a área de transferência:", error);
      });
  } else {
    console.warn("Documento não está focado. A cópia para a área de transferência não pode ser realizada.");
  }
}