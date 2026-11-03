/*
 * ==========================================================================
 *  Exercício 149 — Igualdade profunda
 *  Módulo 10: Desafios avançados  |  Nível: Avançado
 * ==========================================================================
 *
 *  ENUNCIADO
 *  ---------
 *  Crie a função recursiva igualdadeProfunda(a, b) que compara dois
 *  valores, inclusive objetos e arrays aninhados, propriedade por
 *  propriedade (sem JSON.stringify).
 *
 *  SAÍDA ESPERADA NO CONSOLE
 *  -------------------------
 *  true
 *  false
 *  true
 *  false
 *
 *  Para executar:  node 10-avancados/ex149-igualdade-profunda.js
 */

// Dados do exercício (não altere)
const testes = [
  [{ a: 1, b: { c: [1, 2] } }, { a: 1, b: { c: [1, 2] } }],
  [{ a: 1, b: { c: [1, 2] } }, { a: 1, b: { c: [1, 3] } }],
  [[1, { x: 2 }], [1, { x: 2 }]],
  [{ a: 1 }, { a: 1, b: undefined }],
];

// ===== Escreva sua solução abaixo =====

