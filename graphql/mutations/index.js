// Service Mutations
const createLaunch = require('./service/createLaunch')
const createProgram = require('./service/createProgram')
const uploadFile = require('./service/uploadFile')

module.exports = {
    // service
    createLaunch,
    createProgram,
    uploadFile,
};
