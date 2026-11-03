/*
 * ==========================================================================
 *  Exercício 138 — Debounce
 *  Módulo 10: Desafios avançados  |  Nível: Avançado
 * ==========================================================================
 *
 *  ENUNCIADO
 *  ---------
 *  Implemente a função debounce(fn, espera): ela retorna uma nova função
 *  que só executa fn depois que ficar "espera" ms sem ser chamada de novo
 *  (cada chamada reinicia o timer). Simule alguém digitando: chame a
 *  função com debounce de 200ms passando "j", "ja", "jav", "java", com
 *  intervalo de 50ms entre as chamadas (use setTimeout para agendar). A
 *  busca deve rodar UMA única vez.
 *
 *  SAÍDA ESPERADA NO CONSOLE
 *  -------------------------
 *  Buscando por: java
 *
 *  Para executar:  node 10-avancados/ex138-debounce.js
 */

// Dados do exercício (não altere)
const buscar = (termo) => console.log("Buscando por: " + termo);

// ===== Escreva sua solução abaixo =====

