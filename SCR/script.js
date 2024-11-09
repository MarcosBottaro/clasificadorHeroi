function verificarRank() {
  const nome = document.getElementById("nome").value;
  const level = parseInt(document.getElementById("level").value);

  if (nome === "" || level === null || isNaN(level)) {
    alert("Favor preencha todos os campos.");
    return; 
  }
    if (level < 1000) {
      rank = "Ferro";
    } else if (level >= 1001 && level <= 2000) {
      rank = "Bronze";
    } else if (level >= 2001 && level <= 5000) {
      rank = "Prata";
    } else if (level >= 5001 && level <= 7000) {
      rank = "Ouro";
    } else if (level >= 7001 && level <= 8000) {
      rank = "Platina";
    } else if (level >= 8001 && level <= 9000) {
      rank = "Ascendente";
    } else if (level >= 9001 && level <= 10000) {
      rank = "Imortal";
    } else {
      rank = "Radiante";
    }
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.textContent = "O Herói " + nome + " está no rank " + rank + "!";

  document.getElementById("nome").value = "";
  document.getElementById("level").value = "";
}

verificarRank();
