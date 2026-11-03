/*
 * ==========================================================================
 *  Exercício 136 — Promises e async/await
 *  Módulo 10: Desafios avançados  |  Nível: Avançado
 * ==========================================================================
 *
 *  ENUNCIADO
 *  ---------
 *  Crie a função buscarUsuario(id) que retorna uma Promise resolvida após
 *  500ms com o nome do usuário (use o objeto abaixo como "banco de
 *  dados"). Se o id não existir, a Promise deve ser rejeitada com um
 *  Error. Usando async/await e try/catch, busque o usuário 1 e depois o
 *  3.
 *
 *  SAÍDA ESPERADA NO CONSOLE
 *  -------------------------
 *  Buscando usuário 1...
 *  Usuário encontrado: Ana
 *  Buscando usuário 3...
 *  Erro: Usuário 3 não existe
 *
 *  Para executar:  node 10-avancados/ex136-promises-e-async-await.js
 */

// Dados do exercício (não altere)
const banco = { 1: "Ana", 2: "Bruno" };

// ===== Escreva sua solução abaixo =====

