const express = require('express');
const router = express.Router();
const { verifyToken } = require('./auth'); // Importa o middleware de autenticação

// Controladores fictícios para exemplificar
const {
  listarFornecedores,
  adicionarFornecedor,
  atualizarFornecedor,
  excluirFornecedor,
} = require('./fornecedorController');

// Listar fornecedores
router.get('/', verifyToken, listarFornecedores);

// Adicionar fornecedor
router.post('/', verifyToken, adicionarFornecedor);

// Atualizar fornecedor
router.put('/:id', verifyToken, atualizarFornecedor);

// Excluir fornecedor
router.delete('/:id', verifyToken, excluirFornecedor);

module.exports = router;
