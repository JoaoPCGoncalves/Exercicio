/*const name = 'João Gonçalves'
const num1 = 1

//console.log(name.split(' ').join(' <==> '))

const opa = `
asdf
Nome: ${name}
1+1=${num1+1}`

//console.log(opa)

const outra = name + ' ' + opa
console.log(outra)


const { rejects } = require('assert')
// CALLBACK
const fs = require('fs')
const { resolve } = require('path')
const { promisify } = require('util')

console.log('Inicio')

fs.readdir('./', function(err, lista){
    if(err){
        console.log('erro', err)
    }else{
        console.log(lista)
    }
})

console.log('Fim')


//PROMISES
function tempo(ms){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    })
}

tempo(2000)
    .then(() => console.log('opa'))
*/

//async-await
function tempo(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(ms), ms)
    })
}

const fs = require('fs')

//Transformando callback em promise
function readdir(path){
    return new Promise((resolve, reject) => {
        fs.readdir(path, function(err, lista){
            if(err){
                reject(err)
            }else{
                resolve(lista)
            }
        })
    }) 
}

async function ola(){
    const lista = await readdir('./')
    console.log(lista)

    const ms = tempo(2000)
    console.log('terminou', ms)
}

console.log(ola())














