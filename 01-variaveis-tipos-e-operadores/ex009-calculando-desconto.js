/*
 * ==========================================================================
 *  Exercício 009 — Calculando desconto
 *  Módulo 01: Variáveis, tipos e operadores  |  Nível: Básico
 * ==========================================================================
 *
 *  ENUNCIADO
 *  ---------
 *  Um produto custa o valor de preco e recebe o desconto percentual
 *  indicado. Calcule o valor do desconto e o preço final. Exiba todos os
 *  valores com 2 casas decimais.
 *
 *  SAÍDA ESPERADA NO CONSOLE
 *  -------------------------
 *  Preço original: R$ 250.00
 *  Desconto: R$ 37.50
 *  Preço final: R$ 212.50
 *
 *  Para executar:  node 01-variaveis-tipos-e-operadores/ex009-calculando-desconto.js
 */

// Dados do exercício (não altere)
const preco = 250;
const percentualDesconto = 15;

// ===== Escreva sua solução abaixo =====
const precoResult = preco - percentualDesconto
console.log(precoResult)
