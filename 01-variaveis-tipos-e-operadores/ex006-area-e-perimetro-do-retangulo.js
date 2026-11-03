/*
 * ==========================================================================
 *  Exercício 006 — Área e perímetro do retângulo
 *  Módulo 01: Variáveis, tipos e operadores  |  Nível: Básico
 * ==========================================================================
 *
 *  ENUNCIADO
 *  ---------
 *  Calcule e exiba a área (base * altura) e o perímetro (soma de todos os
 *  lados) de um retângulo.
 *
 *  SAÍDA ESPERADA NO CONSOLE
 *  -------------------------
 *  Área: 28
 *  Perímetro: 22
 *
 *  Para executar:  node 01-variaveis-tipos-e-operadores/ex006-area-e-perimetro-do-retangulo.js
 */

// Dados do exercício (não altere)
const base = 7;
const altura = 4;

// ===== Escreva sua solução abaixo =====
const area = base * altura
const perimetro = 2 * (base * altura)

console.log(`Area ${area}`);
console.log(`Perimetro ${perimetro}`);

