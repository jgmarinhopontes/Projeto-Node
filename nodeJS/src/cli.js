import fs from  'fs';
import chalk from 'chalk';
import catchFile from './index.js';
import validList from './http-validate.js';

const path = process.argv; 

//console.log(process.argv)

async function printList(validate, result, file = ''){
    if(validate){
        console.log(chalk.blue('valid list'), chalk.yellow(file), await validList(result)) 
    } else{
        console.log(chalk.blue('links list'), chalk.yellow(file), result)
    }
}

async function txtProcess(args){
    const path = args[2]
    const validate = args[3] === '--validate'

    try {
        fs.lstatSync(path);
    } catch (err) {
        if(err.code === 'ENOENT'){
            return console.log(chalk.red('File or directory not found'))
        }
    }

    if(fs.lstatSync(path).isFile()){
        const result = await catchFile(args[2])
        printList(validate, result, args[2])
    } else if(fs.lstatSync(path).isDirectory()){
        const files = await fs.promises.readdir(path)

        files.forEach( async (fileName) =>{
            const list = await catchFile(path + '/' + fileName)
            printList(validate, list, fileName)
        })
    }
}

txtProcess(path)
