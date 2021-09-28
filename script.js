//          chave   vitoria
var rafa = { nome: "Rafa", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
//var paulo = { nome: "Paulo", vitorias: 1, empates: 3, derrotas: 4, pontos: 0 };
var henrique = {
  nome: "Henrique",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

rafa.pontos = calculaPontos(rafa);
//paulo.pontos = calculaPontos(paulo);
henrique.pontos = calculaPontos(henrique);

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

var jogadores = [rafa, henrique];

function exibirJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria( " +
      i +
      ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento +=
      "<td><button onClick='zerarDados(" + i + ")'>Zerar Dados</button></td>";
    elemento += "</tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}
exibirJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibirJogadoresNaTela(jogadores);
}
function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibirJogadoresNaTela(jogadores);
}
function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibirJogadoresNaTela(jogadores);
}
function zerarDados(i) {
  var jogador = jogadores[i];
  jogador.vitorias = 0;
  jogador.empates = 0;
  jogador.derrotas = 0;
  jogador.pontos = 0;
  exibirJogadoresNaTela(jogadores);
}
function adicionarJogadores() {
  var elementoNomeJogador = document.getElementById("novoJogador").value;
  var novoJogador = {
    nome: elementoNomeJogador,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  jogadores.push(novoJogador);
  exibirJogadoresNaTela(jogadores);
  console.log(jogadores);
  document.getElementById("novoJogador").value = "";
}