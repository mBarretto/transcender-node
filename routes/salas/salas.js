const salasController = require('./salasController')

const express = require('express')
const router = express.Router()

router.get('/listar', (req, res) => {
  salasController.salaListar(req.body, res)
})

router.get('/entrar/:id', (req, res) => {
  salasController.salaPesquisar(req.body, res)
})

router.post('/nova', (req, res) => {
  salasController.salaNovo(req.body, res)
})

router.put('/editar/:id', (req, res) => {
  salasController.salaEditar(req, res)
})

router.delete('/remover/:id', (req, res) => {
  salasController.salaRemover(req, res)
})

module.exports = router