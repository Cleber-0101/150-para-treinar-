/*
 * ==========================================================================
 *  Exercício 113 — Cópia rasa x cópia profunda
 *  Módulo 08: Objetos e classes  |  Nível: Intermediário
 * ==========================================================================
 *
 *  ENUNCIADO
 *  ---------
 *  1) Crie uma cópia rasa com spread, adicione "nadar" em copia.hobbies e
 *  exiba original.hobbies.
 *  2) Crie uma cópia profunda com structuredClone, adicione "pedalar" nos
 *  hobbies dela e exiba original.hobbies novamente.
 *  Explique em um comentário por que o original mudou no primeiro caso e
 *  não no segundo.
 *
 *  SAÍDA ESPERADA NO CONSOLE
 *  -------------------------
 *  Após alterar a cópia rasa: [ 'ler', 'correr', 'nadar' ]
 *  Após alterar a cópia profunda: [ 'ler', 'correr', 'nadar' ]
 *
 *  Para executar:  node 08-objetos-e-classes/ex113-copia-rasa-x-copia-profunda.js
 */

// Dados do exercício (não altere)
const original = { nome: "Ana", hobbies: ["ler", "correr"] };

// ===== Escreva sua solução abaixo =====

