const fornecedores = []; // Simulação de um banco de dados em memória

// Listar fornecedores
function listarFornecedores(req, res) {
  res.json(fornecedores);
}

// Adicionar fornecedor
function adicionarFornecedor(req, res) {
  const novoFornecedor = req.body;
  fornecedores.push(novoFornecedor);
  res.status(201).json({ message: 'Fornecedor adicionado com sucesso!', fornecedor: novoFornecedor });
}

// Atualizar fornecedor
function atualizarFornecedor(req, res) {
  const id = req.params.id;
  const dadosAtualizados = req.body;
  const index = fornecedores.findIndex((f) => f.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Fornecedor não encontrado.' });
  }

  fornecedores[index] = { ...fornecedores[index], ...dadosAtualizados };
  res.json({ message: 'Fornecedor atualizado com sucesso!', fornecedor: fornecedores[index] });
}

// Excluir fornecedor
function excluirFornecedor(req, res) {
  const id = req.params.id;
  const index = fornecedores.findIndex((f) => f.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Fornecedor não encontrado.' });
  }

  fornecedores.splice(index, 1);
  res.json({ message: 'Fornecedor excluído com sucesso!' });
}

module.exports = {
  listarFornecedores,
  adicionarFornecedor,
  atualizarFornecedor,
  excluirFornecedor,
};
