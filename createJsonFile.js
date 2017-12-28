const fs = require('fs')
const path = require('path')

const createJsonFile = (jsonObj, fileName, callback) => {
  const pathName = path.join(__dirname, fileName)
  fs.writeFile(pathName, JSON.stringify(jsonObj), (err) => {
    callback(err, pathName)
  })
}

module.exports = createJsonFile
