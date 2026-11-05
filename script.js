

window.onload = function() {
    let button = document.getElementById("Calcule");
    button.addEventListener("click", amorcalculadora);
    
}

function amorcalculadora() {
    let Seunome = document.getElementById("Seu-nome").value;
    let Nomedoseucrush = document.getElementById("Nome-do-seu-crush").value;

     if (Seunome != "" && Nomedoseucrush != "") {
        let percentage = Math.floor(Math.random() * 101); //0-.99999
        // percentage = 3;

             document.getElementById("mensagem-de-resultado").innerText = Seunome + " e " + Nomedoseucrush + " de chance";
             document.getElementById("resultado-de-porcentagem").innerText = percentage.toString() + "%";
        }
}