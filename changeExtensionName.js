module.exports = (fileName, ext = '') => {
  let lastIndex = fileName.lastIndexOf('.')

  // put extension on end if file have no extension
  if (lastIndex < 1) lastIndex = fileName.length
  // remove previosly extension name
  return fileName.substr(0, lastIndex) + '.' + ext
}
