import { programa } from './interface.js';
import { Conta, contaSalario } from './tipoConta.js';
import PromptSync from 'prompt-sync';
var prompt = PromptSync();

console.log(" ");
var conta = Number(prompt("Insira 1 para Conta Normal e 2 para Conta Salário: "));
var saldo = parseInt(Math.random() * 1000);

switch (conta) {
    case 1:
        var cnt = new Conta(
            parseInt(Math.random() * 10),
            parseInt(Math.random() * 100),
            prompt("Insira seu nome completo: "),
            saldo
        )
        break;

    case 2:
        var cnt = new contaSalario(
            parseInt(Math.random() * 10),
            parseInt(Math.random() * 100),
            prompt("Insira seu nome completo: "),
            saldo
        )
        break;

    default:
        console.log("Insira um valor válido");
        break;
}

console.log(`\n Você possuí R$${saldo} de saldo!`);

programa(cnt)
