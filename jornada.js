
// Lê o nome do herói e sua quantidade de experiência (XP)
let nomeHeroi = prompt("\n Qual o nome do herói? ");
let xp = prompt("\n Qual o nível de experiência do herói? ");

// Variável para armazenar o nível do herói
let nivel;

// Determinação do nível com base na quantidade de experiência (XP)
if (xp <= 1000) {
    nivel = "Ferro";
} else if (xp > 1000 & xp <= 2000) {
    nivel = "Bronze";
} else if (xp > 2000 & xp <= 5000) {
    nivel = "Prata";
} else if (xp > 5000 & xp <= 7000) {
    nivel = "Ouro";
} else if (xp > 7000 & xp <= 8000) {
    nivel = "Platina";
} else if (xp > 8000 & xp <= 9000) {
    nivel = "Ascendente";
} else if (xp > 9000 & xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Saída
let saida = console.log(`O Herói ${nomeHeroi} está no nível de experiência XP:${nivel}`);

switch (nivel) {
    case "Ferro":
        saida;
        break;
    case "Bronze":
        saida;
        saida;
    case "Prata":
        saida;
        break;
    case "Ouro":
        saida;
        break;
    case "Platina":
        saida;
        break;
    case "Ascendente":
        saida;
        break;
    case "Imortal":
        saida;
        break;
    default:
        saida;
}