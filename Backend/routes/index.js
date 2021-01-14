const routerx = require('express-promise-router');
const articuloRouter = require('./api/articulo');
const usuarioRouter = require('./api/usuario');
const categoriaRouter = require('./api/categoria');

const router = routerx();

router.use('/articulo', articuloRouter);//RUTAS ARTICULOS

router.use('/usuario', usuarioRouter);//RUTAS USUARIOS

router.use('/categoria', categoriaRouter);//RUTAS CATEGORIAS

module.exports = router;