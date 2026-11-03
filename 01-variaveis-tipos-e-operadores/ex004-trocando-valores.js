/*
 * ==========================================================================
 *  Exercício 004 — Trocando valores
 *  Módulo 01: Variáveis, tipos e operadores  |  Nível: Básico
 * ==========================================================================
 *
 *  ENUNCIADO
 *  ---------
 *  Troque os valores das variáveis x e y (x deve ficar com o valor de y e
 *  vice-versa). Exiba os valores antes e depois da troca. Desafio extra:
 *  faça a troca sem usar uma variável auxiliar.
 *
 *  SAÍDA ESPERADA NO CONSOLE
 *  -------------------------
 *  Antes: x = 10, y = 20
 *  Depois: x = 20, y = 10
 *
 *  Para executar:  node 01-variaveis-tipos-e-operadores/ex004-trocando-valores.js
 */

// Dados do exercício (não altere)
let x = 10;
let y = 20;

// ===== Escreva sua solução abaixo =====
if(x !== y){
    console.log(x + 10)
}else{
    console.log(y - x)
}
