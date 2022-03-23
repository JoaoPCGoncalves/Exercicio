/*
1) Em linguagens síncronas é comum a função sleep(tempo) assim, pode-se por exemplo escrever algo no console, 
pausar o script por x tempo e escrever algo mais algo como:

console.log('Olá!')
sleep(2000)
console.log('Depois de 2segs')

simule o sleep de maneira correta em Javascript (sem travar a thread principal) utilizando promises e 
uma função async/await
*/

const sleep = Time => new Promise(resolve => {
    setTimeout(resolve, Time)
})

const execute = async() => {
    console.log('Olá!')
    await sleep(2000)
    console.log('Depois de 2segs')
}
execute()
console.log('opaaaaa')

/*
2) A função readdir disponível no módulo fs do Node, permite ler um diretório, e retornar seu conteúdo como um
    vetor. Crie uma versão em Promise da função.
Dica: a assinatura da função é: fs.readdir(caminho, (err, files) => {})
*/
const fs = require('fs')

const lerDir = caminho => new Promise((resolve, reject) =>{
    fs.readdir(caminho, (err, files) => {
        if(err){
            reject(err)
        }else{
            resolve(files)
        }
    })
})

//lerDir('./').then(files => console.log(files))

/*
3) A lista de arquivos retornado no exercício anterior, também retorna diretórios. 
Crie uma função que retorne todos os sub-diretórios em um vetor (deve-se ignorar os arquivos retornados 
    pelo readdir).
*/
//lerDir('./').then(files => console.log(files))
const stat = caminho => new Promise((resolve, reject) => {
    fs.stat(caminho, (err, stats) => {
        if(err){
            reject(err)
        }else{
            resolve(stats)
        }
    })
})

const isDirectory = async(caminho) => {
    const stats = await stat(caminho)
    return stats.isDirectory() ? caminho : false
}

const execute3 = async() =>{
    const files = await lerDir('./')    
    const possibleDirectories = await Promise.all(files.map(f => isDirectory(f)))
    const directories = possibleDirectories.filter(val => val)
    console.log(directories)
}

execute3()



/*
4) A lista de arquivos retornado no exercício 2, também retorna diretórios. Crie uma função que retorne 
todos os arquivos em um vetor (deve-se ignorar os diretório retornados pelo readdir).
*/
const isFile = async(caminho) => {
    const stats = await stat(caminho)
    return stats.isFile() ? caminho : false
}

const execute4 = async() =>{
    const files = await lerDir('./')    
    const possibleFiles = await Promise.all(files.map(f => isFile(f)))
    const onlyFiles = possibleFiles.filter(val => val)
    console.log(onlyFiles)
}

execute4()
