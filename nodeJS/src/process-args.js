import fs from 'fs';
import chalk from 'chalk';
import { doesNotThrow } from 'assert';

const encoding = 'utf-8';

function errorTreat(err) {
    throw new Error(err);
}

//function catchFile(filePath) {
//    fs.readFile(filePath, 'utf-8', (err, resp) => {
//            if (err) {
//                //errorTreat(err);
//                throw new Error(err);
//            }
//        console.log(chalk.green(resp))
//    })
//}

async function catchFile(filePath) {
    await fs.promises
            .readFile(filePath, encoding)
            .then((resp) => console.log(chalk.red(resp)))
            .catch((err) =>{
                throw new Error(err);
            })
}


catchFile('./node_modules/chalk/readme.md');

