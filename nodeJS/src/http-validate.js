import chalk from "chalk"

function extractLinks(arrLinks) {
    return arrLinks.map((links) => Object.values(links).join())
}

async function chkLink(urlList){
    const arrStatus = await Promise.all(
        urlList.map(async (url) => {
            try {
                const resp = await fetch(url)
                return `${resp.status} - ${resp.statusText}`
            } catch (err) {
                return errorTreat(err)
            }
        })        
    )
    return arrStatus
}

function errorTreat(err){
    if (err.cause.code === 'ENOTFOUND'){
        return "url not found"
    } else {
        return "unknow urror"
    }
}

export default async function validList(linksList){
    const links = extractLinks(linksList)
    const status = await chkLink(links)

    return linksList.map((obj, i) => ({
        ...obj,
        status: status[i]
    }))

    console.log(status)
    return status
}

