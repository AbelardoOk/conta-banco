const { log } = require('console');
var fs = require('fs');
const { normalize } = require('path/posix');

export class Conta {
    constructor(numero, agencia, conta, saldo){
        this.numero = numero;
        this.agencia = agencia;
        this.conta = conta;
        this.saldo = saldo;
    }

    extrato(){
        console.log(" ");
        return "!!! Saldo bancário: R$" + this.saldo;
    }

    deposito(dep){
        if(dep < 0){
            console.log("Valor inválido");
        } else{
            this.saldo += dep;
            console.log("Valor depositado: " + dep);
        }
    }

    saque(saq){
        if(saq > this.saldo){
            console.log("Saldo insuficiente");
        } else if(saq < 0){
            console.log("Valor inválido");
        } else{
            this.saldo -= saq;
            console.log("Valor sacado: " + saq);
        }
    }

    bd(){
        fs.appendFile(this.conta + ".txt",

                    "Conta Corrente" + '\n' + '\n' +
                    "Conta: " + this.conta + '\n' +
                    "Numero da conta: " + this.numero + '\n' +
                    "Agencia bancária: " + this.agencia + '\n' +
                    "Saldo da conta: " + this.saldo + '\n',

            function(erro){
                if(erro){
                    console.log("Conta já existente");
                } else{
                    console.log("Informações salvas com sucesso!");
                }
            }
        )
    }

}

export class contaSalario extends Conta{

    bd(){
        fs.appendFile(this.conta + ".txt",

                    "Conta Salário" + '\n' + '\n' +
                    "Conta: " + this.conta + '\n' +
                    "Numero da conta: " + this.numero + '\n' +
                    "Agencia bancária: " + this.agencia + '\n' +
                    "Saldo da conta: " + this.saldo + '\n',

            function(erro){
                if(erro){
                    console.log("Conta já existente");
                } else{
                    console.log("Informações salvas com sucesso!");
                }
            }
        )
    }

    extrato(){
        this.saldo--;
        return "Conta: " + this.conta + " - Saldo: " + this.saldo;
    }
}
