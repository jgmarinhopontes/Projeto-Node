import fs from 'fs';
import chalk from 'chalk';

const encoding = 'utf-8';

function getLinks(txt) {
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const matchs = [...txt.matchAll(regex)];
  const results = matchs.map(matchs => ({
    [matchs[1]]: matchs[2]
  }))
  return results.length !== 0 ? results : 'No links in the file';
}

function treatError(err) {
  console.log(err);
  throw new Error(chalk.red(err.code, 'empty folder'));
}

async function catchFile(filePath) {
  try {
    const txt = await fs.promises.readFile(filePath, encoding)
    return getLinks(txt)
  } catch (err) {
    treatError(err)
  }
}

export default catchFile;