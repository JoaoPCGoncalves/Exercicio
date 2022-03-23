//1) Dado um vetor de números, como poderia ser realizada a soma de todos os valores utilizando reduce.
const vetor = [1,2,3,4,5]

const somar = (acumulado, atual) => acumulado + atual
console.log(vetor.reduce(somar,0))

//2) Dado um vetor de números, como poderia ser realizada a soma de todos os valores pares 
//utilizando reduce e filter.
const somentePares = item => item % 2 === 0

const somaPares = vetor.filter(somentePares).reduce(somar)
console.log(somaPares)

//3) Dado um vetor de números, como poderia ser realizada a soma de todos os valores ímpares
//utilizando reduce e filter.
const somenteImpares = item => item % 2 !== 0

const somaImpares = vetor.filter(somenteImpares).reduce(somar)
console.log(somaImpares)

//5) Dado um vetor de valores, retorne um objeto com quantas vezes cada valor está 
//presente no vetor (dica: utilize reduce)
const vetorA = [1,2,3,4,2,1,3,2,1, 'joão']
const howManyTimes = (agg, val) =>{
    if(!agg[val]){
        agg[val] = 0
    }
    agg[val] = agg[val] + 1
    return agg
}

const times = vetorA.reduce(howManyTimes, {})
console.log(times)

//6) Dado um vetor de valores, retorne um vetor com somente os valores únicos do vetor - aqueles que ocorrem 
//apenas 1 vez dentro do vetor.
//- Dica 1: utilize reduce, filter e keys
//- Dica 2: escreva console.log(objeto.keys()) e veja como ele poderá te ajudar neste exercício
const howManyTimesB = (agg, val) => {
    if(!agg[val]){
        agg[val] = {
            value: val,
            occur: 0
        }
    }
    agg[val].occur = agg[val].occur + 1
    return agg
}
const contagem = vetorA.reduce(howManyTimesB, {})
const keys = Object.keys(contagem)
const unique = keys.filter(key => contagem[key].occur === 1)
const uniqueValues = unique.map(val => contagem[val].value)
console.log(uniqueValues)

//7) Dado um vetor com números, retorne somente os números pares;
//- Já feito na soma de pares ;)
const vetor7 = [1,2,3,4,5,6,7,8]

const somentePares7 = item => item % 2 === 0

console.log(vetor7.filter(somentePares7))

//8) Dado um vetor com números, retorne somente os números ímpares;
//- Já feito na soma de ímpares ;)
const somenteImpares8 = item => item % 2 !== 0
console.log(vetor7.filter(somenteImpares8))

//9) Uma função é chamada da seguinte forma:
//calculadora(10, '+', 20)
//crie o corpo da função de forma que ela realize as 4 operações aritméticas
const calculadora = (num1, op, num2) => {
    const ops = {
        '+': (num1, num2) => num1 + num2,
        '-': (num1, num2) => num1 - num2,
        '/': (num1, num2) => num1 / num2,
        '*': (num1, num2) => num1 * num2
    }
    return(ops[op]( num1, num2 ))
}
console.log(calculadora(10, '*', 20))

//10) Modifique a calculadora do exercício anterior para que ela receba 2 números e uma função, 
//e realize o cálculo. Exemplo:
//const soma = (num1, num2) => num1+num2
//const calculadoraFn = (....) => ….
//calculadoraFn(10, soma, 20)
const calculadoraFn = (num1, op, num2) => op(num1, num2)

const soma = (num1, num2) => num1+num2
const sub = (num1, num2) => num1-num2

console.log(calculadoraFn(10, soma, 20))
console.log(calculadoraFn(30, sub, 10))
