
function totalDeVogais(texto: string) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    texto.split('').forEach((cadaLetra: string) => {
        if (vogais.includes(cadaLetra)) count++;
    });

    return count;
}
console.log("Número de vogais opção1 de código =>", totalDeVogais("existente"));


//Opção2 de código
const totalDeVogais2 = (texto: string) => {
    const vogais = ['a', 'e', 'i', 'o', 'u'];

    return texto.toLowerCase().split('').reduce(function(count, char) {
        if (vogais.includes(char)) {
            count++;
        }
        return count;
    }, 0);
}
console.log("Número de vogais opção2 de código =>", totalDeVogais2("existe"));



