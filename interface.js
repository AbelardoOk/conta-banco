import { cotacao } from './apiCotacao.js';
import { Conta, contaSalario } from './tipoConta.js';
import PromptSync from 'prompt-sync';
var prompt = PromptSync();

export async function programa(cnt) {

    return new Promise((resolve, reject) => {
      let running = true;
      const run = async () => {
        if (!running) {
          resolve();
          return;
        }

        let toCurrency = 'USD';

        console.log("\n !Ações Bancárias ! \n 1. Depósito \n 2. Saque \n 3. Saldo \n 4. Cotação \n 5. Sair \n");
        const i = Number(prompt("O quê deseja fazer? "));

        switch (i) {
          case 1:
            console.log(" ");
            cnt.deposito((Number(prompt("Insira o valor de depósito: "))));
            run();
            break;

          case 2:
            console.log(" ");
            cnt.saque((Number(prompt("Insira o valor de saque: "))));
            run();
            break;

          case 3:
            console.log(cnt.extrato());
            run();
            break;

          case 4:
            try {
                const convertedAmount = await cotacao(cnt, toCurrency); // esperar o resultado da função cotacao
                    console.log(`\n Você possui ${convertedAmount} ${toCurrency} na conta.`);
                } 
                catch (error) {
                    console.error(error);
                }
            run();
            break;

          case 5:
            running = false;
            console.log("Finalizando...");
            cnt.bd(); // Salva os dados em um arquivo de texto
            break;

          default:
            console.log("Opção inválida");
            run();
            break;
        }
      };
      run();
    });
  }