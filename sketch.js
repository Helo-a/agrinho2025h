



let personagem;

let numero = 0;

let questoes = [

  {

    pergunta: "Qual é a principal diferença entre o campo e a cidade?",

    respostas: ["A cidade é mais populosa", "O campo é mais verde", "A cidade é mais antiga", "O campo é mais desenvolvido"],

    respostaCerta: 0

  },

  {

    pergunta: "Qual é o principal produto agrícola do campo?",

    respostas: ["Frutas", "Legumes", "Grãos", "Animais"],

    respostaCerta: 2

  },

  {

    pergunta: "Qual é a principal característica da cidade?",

    respostas: ["Natureza", "Arquitetura", "Comércio", "Agricultura"],

    respostaCerta: 2

  },

  {

    pergunta: "Qual é o principal meio de transporte no campo?",

    respostas: ["Carro", "Bicicleta", "Cavalo", "Ônibus"],

    respostaCerta: 2

  },

  {

    pergunta: "Qual é a principal vantagem de viver no campo?",

    respostas: ["Mais oportunidades de emprego", "Mais acesso a serviços", "Mais contato com a natureza", "Mais segurança"],

    respostaCerta: 2

  }

];

let indiceQuestao = 0;

let venceu = false;

function setup() {

  createCanvas(800, 600);

  personagem = {

    x: 100,

    y: height - 100,

    w: 50,

    h: 50

  };

}

function draw() {

  background(135, 206, 235); // Azul claro para o céu

  drawCampo();

  drawPersonagem();

  drawPontuacao();

  drawLinhaDeChegada();

  if (venceu) {

    fill(0);

    textSize(32);

    text("Você venceu!", width / 2 - 100, height / 2);

    noLoop();

  } else {

    drawQuestao();

  }

}

function drawCampo() {

  fill(34, 139, 34); // Verde para o campo

  rect(0, height - 100, width, 100);

}

function drawPersonagem() {

  fill(255, 0, 0); // Vermelho para o personagem

  ellipse(personagem.x, personagem.y, personagem.w, personagem.h);

  fill(0);

  textSize(24);

  textAlign(CENTER, CENTER);

}

function drawPontuacao() {

  fill(0);

  textSize(24);

  textAlign(CENTER, CENTER);

  text("Pontuação: " + numero, width / 2, 50);

}

function drawLinhaDeChegada() {

  stroke(255, 0, 0); // Vermelho para a linha de chegada

  line(600, height - 100, 600, height);

}

function drawQuestao() {

  fill(0);

  textSize(24);

  textAlign(CENTER, CENTER);

  text(questoes[indiceQuestao].pergunta, width / 2, 100);

  for (let i = 0; i < questoes[indiceQuestao].respostas.length; i++) {

    text(questoes[indiceQuestao].respostas[i], width / 2, 150 + i * 50);

  }

}

function mousePressed() {

  if (!venceu) {

    let resposta = floor((mouseY - 150) / 50);

    if (resposta >= 0 && resposta < questoes[indiceQuestao].respostas.length) {

      if (resposta === questoes[indiceQuestao].respostaCerta) {

        numero++;

        personagem.x += 50;

        if (numero >= 5) {

          venceu = true;

        }

      } else {

        if (numero > 0) {

          numero--;

          personagem.x -= 50;

        }

      }

      indiceQuestao++;

      if (indiceQuestao >= questoes.length) {

        indiceQuestao = 0;

      }

    }

  }

}






  