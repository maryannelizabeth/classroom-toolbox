const config = require('./knexfile').development
// eslint-disable-next-line no-unused-vars
const connection = require('knex')(config)

function addName(name, db = connection) {
  return db('Names').insert({ name })
}

function getNames(db = connection) {
  //console.log(db('Names'))
  return db('Names').select()
}

module.exports = { addName, getNames }
