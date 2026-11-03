/*
 * ==========================================================================
 *  Exercício 008 — Minutos em horas
 *  Módulo 01: Variáveis, tipos e operadores  |  Nível: Básico
 * ==========================================================================
 *
 *  ENUNCIADO
 *  ---------
 *  Converta a quantidade de minutos em horas e minutos restantes. Use
 *  divisão inteira (Math.floor que serve para arredondar para baixo ) e o operador de resto (%).
 *
 *  SAÍDA ESPERADA NO CONSOLE
 *  -------------------------
 *  135 minutos = 2 hora(s) e 15 minuto(s)
 *
 *  Para executar:  node 01-variaveis-tipos-e-operadores/ex008-minutos-em-horas.js
 */

// Dados do exercício (não altere)
const totalMinutos = 135;

// ===== Escreva sua solução abaixo =====
const convertendoHora = Math.floor(totalMinutos * 60) 
console.log("135 minutos da um total de = " + convertendoHora);
