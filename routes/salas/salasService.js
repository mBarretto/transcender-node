const findAllSala = callback => {
  global.conn.collection('salas').find({}).toArray(callback)
}

const insertOne = (salas, callback) => {
  global.conn.collection('salas').insert(salas, callback)
}

const ObjectId = require('mongodb').ObjectId
const findOneSala = (id, callback) => {
  global.conn.collection('salas').find(new ObjectId(id)).toArray(callback)
}

const updateSala = (id, salas, callback) => {
  global.conn.collection('salas').updateOne({ _id: new ObjectId(id) }, { $set: salas }, callback)
}

const deleteOneSala = (id, callback) => {
  global.conn.collection('salas').deleteOne({ _id: new ObjectId(id) }, callback)
}

module.exports = {
  findAllSala,
  insertOne,
  findOneSala,
  updateSala,
  deleteOneSala
}

