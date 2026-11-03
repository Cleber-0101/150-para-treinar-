/*
 * ==========================================================================
 *  Exercício 150 — Mini-projeto: Biblioteca
 *  Módulo 10: Desafios avançados  |  Nível: Avançado
 * ==========================================================================
 *
 *  ENUNCIADO
 *  ---------
 *  Modele um sistema de biblioteca com as classes Livro, Usuario e
 *  Biblioteca.
 *  Regras:
 *  - cada usuário pode ter no máximo 2 livros emprestados
 *  - um livro emprestado não pode ser emprestado de novo
 *  - relatorio() lista disponíveis e emprestados na ordem de cadastro dos
 *    livros
 *  Cadastre os livros "1984", "Dom Casmurro" e "O Hobbit" e os usuários
 *  Ana e Bruno. Execute em ordem:
 *  emprestar("1984", "Ana"), emprestar("Dom Casmurro", "Ana"),
 *  emprestar("O Hobbit", "Ana"), emprestar("1984", "Bruno"),
 *  devolver("1984", "Ana"), emprestar("1984", "Bruno"), relatorio().
 *
 *  SAÍDA ESPERADA NO CONSOLE
 *  -------------------------
 *  Ana pegou '1984' emprestado.
 *  Ana pegou 'Dom Casmurro' emprestado.
 *  Ana atingiu o limite de 2 livros.
 *  '1984' já está emprestado.
 *  Ana devolveu '1984'.
 *  Bruno pegou '1984' emprestado.
 *  --- Relatório ---
 *  Disponíveis: O Hobbit
 *  Emprestados: 1984 (Bruno), Dom Casmurro (Ana)
 *
 *  Para executar:  node 10-avancados/ex150-mini-projeto-biblioteca.js
 */

// ===== Escreva sua solução abaixo =====

