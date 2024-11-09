const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function getHeroInfo() {
  return new Promise((resolve, reject) => {
    readline.question("Digite o nome do herói: ", (nome) => {
      readline.question("Digite o level do herói: ", (level) => {
        resolve({ nome, level: parseInt(level) });
      });
    });
  });
}

async function main() {
  let opcao;
  do {
    const heroInfo = await getHeroInfo();
    const { nome, level } = heroInfo;

    let rank;
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

    console.log(`O Herói ${nome} está no rank ${rank}!`);

    opcao = await new Promise((resolve) => {
      readline.question("Deseja verificar outro herói? (s/n): ", (answer) => {
        resolve(answer.toLowerCase());
      });
    });
  } while (opcao === "s");

  readline.close();
}

main();