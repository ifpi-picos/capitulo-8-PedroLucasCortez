import { log } from 'mathjs';

export function calculado() {
    const numero = parseInt(prompt('Digite um numero natural para ser calculado o logaritmo: '));

    if (numero > 0) {
        const resultado = log(numero).toFixed(4);
        console.log(`O resultado do número ${numero} é: ${resultado}`);
    } else {
        console.log('Numero invalido.');
    };
};

