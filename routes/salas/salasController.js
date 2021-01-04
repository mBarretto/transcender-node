const salaDefault = {
  sala: 'arethafranklin',

  nomeHomenageado: 'Aretha Franklin',
  dataNascimento: 1942 ,
  dataFalecimento: 2018,
  epitafio: 'Queen of soul',
  foto: {},
  fotoUpload: 'https://www.hojeemdia.com.br/polopoly_fs/1.648481.1534536791!/image/image.jpg_gen/derivatives/landscape_653/image.jpg',
}

const salaListar = (params, res) =>{
  console.log(params, res, 'salaListar');
  res.status(200).send(salaDefault)
}

const salaPesquisar = (params, res) =>{
  console.log(params, res, 'salaPesquisar');
  res.status(200).send(salaDefault)
}

const salaNovo = (params, res) => {
  console.log('nova sala', params, res, 'salaNovo');
  res.status(200).send('Certo sala criada')
}

const salaEditar = (req, res) => {
  console.log(req, res, 'salaEditar');
}

const salaRemover = (req, res) => {
  console.log(req, res, 'salaRemover');
}

module.exports = { salaListar, salaPesquisar, salaNovo, salaEditar, salaRemover }
