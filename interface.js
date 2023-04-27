import { cotacao } from './apiCotacao.js';
import { Conta, contaSalario } from './tipoConta.js';
import PromptSync from 'prompt-sync';
var prompt = PromptSync();


export function programa(cnt) {

    for(i = 0; i != 4; i){

        console.log(" \n !Ações Bancárias ! \n 1. Depósito \n 2. Saque \n 3. Saldo \n 4. Cotação \n 5. Sair \n");

        var i = Number(prompt("O quê deseja fazer? "));

        switch (i) {
            case 1:
                cnt.deposito((Number(prompt("Insira o valor de depósito: "))))
                break;
            case 2:
                cnt.saque((Number(prompt("Insira o valor de saque: "))))
                break;
            case 3:
                console.log(cnt.extrato());
                break
            case 4:
                console.log(cotacao(cnt));
                break;
        
            case 5:
                break
        }
    }
}
