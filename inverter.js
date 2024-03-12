const string = prompt('inserir numero: ');
let invertString = "";

for (let i = string.length - 1; i >= 0; i--) {
    invertString += string[i];
}

console.log(invertString);