const config = require("../config");
const DB = `mongodb+srv://${config.DB.USERNAME}:${config.DB.PASSWORD}@${config.DB.CLUSTER}.pxx6wyi.mongodb.net/${config.DB.NAME}?retryWrites=true&w=majority`;

module.exports = DB;