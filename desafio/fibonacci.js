const number = parseInt(prompt('inserir numero: '));
let n1 = 0, n2 = 1, proximo;

console.log('Fibonacci Series:');
console.log(n1); // inicia com 0
console.log(n2); // inicia com 1

proximo = n1 + n2;

while (number >= proximo) {

    console.log(proximo);

    n1 = n2;
    n2 = proximo;
    proximo = n1 + n2;
    if (proximo == number) {
        console.log(`o ${proximo} pertence a sequência de fiobonacci`);
        break;
    }
}