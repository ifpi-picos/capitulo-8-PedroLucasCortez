import { convertMany } from 'convert';

export function convertDias() {
    let numero = prompt('Digite a hora que deseja converter em minutos: ');
    numero = numero + 'd'
    let resultado = convertMany(numero,'d').to('min');
    console.log(resultado)
};

export function convertG() {
    let numero1 = prompt('Digite a quantidate de Gigabytes que deseja converter em Bytes: ');
    numero1 = numero1 + 'GB'
    let resultado1 = convertMany(numero1,'GB').to('B');
    console.log(resultado1)
};