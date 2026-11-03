/*
 * ==========================================================================
 *  Exercício 142 — Cache LRU
 *  Módulo 10: Desafios avançados  |  Nível: Avançado
 * ==========================================================================
 *
 *  ENUNCIADO
 *  ---------
 *  Implemente a classe LRUCache(capacidade) com get(chave) e put(chave,
 *  valor). Quando o cache estiver cheio, o item usado há MAIS tempo deve
 *  ser removido. get retorna -1 se a chave não existir. Dica: um Map
 *  mantém a ordem de inserção. Execute com capacidade 2:
 *  put(1, "A"), put(2, "B"), get(1), put(3, "C"), get(2), put(4, "D"),
 *  get(1), get(3), get(4)
 *
 *  SAÍDA ESPERADA NO CONSOLE
 *  -------------------------
 *  get(1): A
 *  get(2): -1
 *  get(1): -1
 *  get(3): C
 *  get(4): D
 *
 *  Para executar:  node 10-avancados/ex142-cache-lru.js
 */

// ===== Escreva sua solução abaixo =====

