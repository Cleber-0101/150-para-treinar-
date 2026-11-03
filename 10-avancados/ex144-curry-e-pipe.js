/*
 * ==========================================================================
 *  Exercício 144 — Curry e pipe
 *  Módulo 10: Desafios avançados  |  Nível: Avançado
 * ==========================================================================
 *
 *  ENUNCIADO
 *  ---------
 *  1) Crie a função curry(fn) que transforma soma3(a, b, c) para que
 *  possa ser chamada como soma3Curried(1)(2)(3).
 *  2) Crie a função pipe(...funcoes) que retorna uma função que aplica as
 *  funções da esquerda para a direita. Use pipe(dobrar, somar10,
 *  quadrado) com o valor 5.
 *
 *  SAÍDA ESPERADA NO CONSOLE
 *  -------------------------
 *  curry: 6
 *  pipe: 400
 *
 *  Para executar:  node 10-avancados/ex144-curry-e-pipe.js
 */

// Dados do exercício (não altere)
const soma3 = (a, b, c) => a + b + c;
const dobrar = (n) => n * 2;
const somar10 = (n) => n + 10;
const quadrado = (n) => n * n;

// ===== Escreva sua solução abaixo =====

