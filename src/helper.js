function extractFileName(fileAbsolutePath) {
    const filename = fileAbsolutePath.split('/').slice(-1).pop()
    return filename.split('.').shift()
}

module.exports = {
    extractFileName
}