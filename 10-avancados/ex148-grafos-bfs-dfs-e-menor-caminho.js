/*
 * ==========================================================================
 *  Exercício 148 — Grafos: BFS, DFS e menor caminho
 *  Módulo 10: Desafios avançados  |  Nível: Avançado
 * ==========================================================================
 *
 *  ENUNCIADO
 *  ---------
 *  O grafo está representado como lista de adjacência. Implemente:
 *  - BFS a partir de A
 *  - DFS recursiva a partir de A (visitando os vizinhos na ordem da
 *    lista)
 *  - menor caminho de A até F (BFS guardando de onde veio cada vértice)
 *
 *  SAÍDA ESPERADA NO CONSOLE
 *  -------------------------
 *  BFS: A -> B -> C -> D -> E -> F
 *  DFS: A -> B -> D -> E -> F -> C
 *  Menor caminho de A até F: A -> C -> F
 *
 *  Para executar:  node 10-avancados/ex148-grafos-bfs-dfs-e-menor-caminho.js
 */

// Dados do exercício (não altere)
const grafo = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

// ===== Escreva sua solução abaixo =====

