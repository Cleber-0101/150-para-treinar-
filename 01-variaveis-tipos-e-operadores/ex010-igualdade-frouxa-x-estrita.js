/*
 * ==========================================================================
 *  Exercício 010 — Igualdade frouxa x estrita
 *  Módulo 01: Variáveis, tipos e operadores  |  Nível: Básico
 * ==========================================================================
 *
 *  ENUNCIADO
 *  ---------
 *  Compare as variáveis a e b usando os operadores ==, ===, != e !==.
 *  Exiba o resultado de cada comparação. Depois, escreva em um comentário
 *  com suas palavras a diferença entre == e ===.
 *
 *  SAÍDA ESPERADA NO CONSOLE
 *  -------------------------
 *  10 == "10": true
 *  10 === "10": false
 *  10 != "10": false
 *  10 !== "10": true
 *
 *  Para executar:  node 01-variaveis-tipos-e-operadores/ex010-igualdade-frouxa-x-estrita.js
 */

// Dados do exercício (não altere)
const a = 10;
const b = "10";

// ===== Escreva sua solução abaixo =====
console.log(`10 == "10": ${10 == "10"}`);
console.log(`10 === "10": ${10 === "10"}`);
console.log(`10 != "10": ${10 != "10"}`);
console.log(`10 !== "10": ${10 !== "10"}`);

// a difença é que: === compara valor e tipo: == compara apenas valor
