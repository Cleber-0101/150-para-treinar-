/*
 * ==========================================================================
 *  Exercício 007 — Média de três notas
 *  Módulo 01: Variáveis, tipos e operadores  |  Nível: Básico
 * ==========================================================================
 *
 *  ENUNCIADO
 *  ---------
 *  Calcule a média aritmética das três notas e exiba o resultado com
 *  exatamente 2 casas decimais (pesquise o método toFixed).
 *
 *  SAÍDA ESPERADA NO CONSOLE
 *  -------------------------
 *  Média: 7.33
 *
 *  Para executar:  node 01-variaveis-tipos-e-operadores/ex007-media-de-tres-notas.js
 */

// Dados do exercício (não altere)
const nota1 = 7.5;
const nota2 = 8;
const nota3 = 6.5;

// ===== Escreva sua solução abaixo =====
const mediaAluno = (nota1 * nota2 * nota3) / 3
console.log(mediaAluno.toFixed(2))
