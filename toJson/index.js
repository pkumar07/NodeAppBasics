const csv=require('csvtojson')
const path = require('path')
const fs = require('fs')

myfun = (csvFilePath = path.join(__dirname, 'data', 'customer-data.xls')) => {
    console.log('starting to convert...')
    
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        fs.writeFileSync(path.join(__dirname, 'data', 'jsondata.json'), JSON.stringify(jsonObj, null, 2))
        console.log('finished')
        console.log(`Your file has been saved to ${path.join(__dirname, 'data', 'jsondata.json')}`)
    })
}

myfun(process.argv[2])
