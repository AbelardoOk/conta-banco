import {Conta, contaSalario} from './tipoConta.js';
import PromptSync from 'prompt-sync';
var prompt = PromptSync();

export function create() {

    var cnt;
    var saldo = parseInt(Math.random() * 1000);
    console.log(" ");

    var conta = prompt("Insira 1 para Conta Normal e 2 para Conta Salário: ");

    if(conta == 1){
        var cnt = new Conta(
            parseInt(Math.random() * 10),
            parseInt(Math.random() * 100),
            prompt("Insira seu nome completo: "),
            saldo
        )
        console.log("Conta corrente criada com sucesso!");

    } else if(conta == 2){
        var cnt = new contaSalario(
            parseInt(Math.random() * 10),
            parseInt(Math.random() * 100),
            prompt("Insira seu nome completo: "),
            saldo
        )
        console.log("Conta salário criada com sucesso!");

    }
    console.log(" ");

    console.log("Você possuí R$" + saldo + " de saldo!");
    console.log(" ");

}
