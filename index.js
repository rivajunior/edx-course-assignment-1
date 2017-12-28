const csv = require('csvtojson')
const createJsonFile = require('./createJsonFile')
const changeExtensionName = require('./changeExtensionName')
const csvFilePath = './csv/customer-data.csv'

const convertCsvToJson = (fileName) => {
  console.log('Converting', fileName, 'to JSON.')
  csv({toArrayString: true})
    .fromFile(fileName)
    .on('end_parsed', (jsonObj) => {
      // combine csv header row and csv line to a json object
      console.log('created JSON object.')
      console.log('creating file...')
      createJsonFile(jsonObj, changeExtensionName(fileName, 'json'), (err, pathName) => {
        if (err) throw err
        console.log(`File are created at ${pathName}`)
      })
    })
    .on('error', (error) => {
      if (error) throw error
    })
}

let file = process.argv[2]

if (typeof file === 'undefined') {
  file = csvFilePath
}

convertCsvToJson(file)
