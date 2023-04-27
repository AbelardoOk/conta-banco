import axios from 'axios';

export function cotacao(cnt){
    const apiKey = 'IXFYDMK9H9VON85P';
    const fromCurrency = 'BRL';
    const toCurrency = 'USD';
    const amount = cnt.saldo;

    axios.get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${fromCurrency}&to_currency=${toCurrency}&apikey=${apiKey}`)
        .then(Response => {
            const data = Response.data['Realtime Currency Exchange Rate'];
            const exchangeRate = data['5. Exchange Rate'];
            const convertedAmount = exchangeRate * amount;
            console.log(`\n Você possuí ${convertedAmount.toFixed(2)} ${toCurrency} na conta.`);
        }) 
        .catch(error => {
            console.error(error);
        });  
}
