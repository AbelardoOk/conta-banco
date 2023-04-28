import axios from 'axios';

export async function cotacao(cnt){
    const apiKey = 'IXFYDMK9H9VON85P';
    const fromCurrency = 'BRL';
    const toCurrency = 'USD';
    const amount = cnt.saldo;

    try{
        const response = await axios.get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${fromCurrency}&to_currency=${toCurrency}&apikey=${apiKey}`);
        const data = response.data['Realtime Currency Exchange Rate'];
        const exchangeRate = data['5. Exchange Rate'];
        const convertedAmount = exchangeRate * amount;
        return convertedAmount.toFixed(2);
    } catch (error) {
        console.error(error);
    }
}