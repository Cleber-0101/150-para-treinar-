/*
 * ==========================================================================
 *  Exercício 137 — Promise.all e ordem de execução
 *  Módulo 10: Desafios avançados  |  Nível: Avançado
 * ==========================================================================
 *
 *  ENUNCIADO
 *  ---------
 *  Crie a função tarefa(nome, ms) que retorna uma Promise: ela exibe
 *  "Tarefa <nome> concluída" após ms milissegundos e resolve com o nome.
 *  Execute A (300ms), B (100ms) e C (200ms) em PARALELO com Promise.all e
 *  exiba o array de resultados. Observe a diferença entre a ordem de
 *  conclusão e a ordem do resultado.
 *
 *  SAÍDA ESPERADA NO CONSOLE
 *  -------------------------
 *  Tarefa B concluída
 *  Tarefa C concluída
 *  Tarefa A concluída
 *  Todas concluídas: [ 'A', 'B', 'C' ]
 *
 *  Para executar:  node 10-avancados/ex137-promise-all-e-ordem-de-execucao.js
 */

// ===== Escreva sua solução abaixo =====

