import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateFornecedorByID({ id }) {
  const [fornecedor, setFornecedor] = useState({ nome: '', cnpj: '', email: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchFornecedor = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get(`/fornecedor/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFornecedor(response.data);
    };

    fetchFornecedor();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFornecedor({ ...fornecedor, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.put(`/fornecedor/${id}`, fornecedor, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage('Fornecedor atualizado com sucesso!');
    } catch (error) {
      setMessage('Erro ao atualizar fornecedor.');
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Atualizar Fornecedor</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            value={fornecedor.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cnpj" className="form-label">CNPJ</label>
          <input
            type="text"
            className="form-control"
            id="cnpj"
            name="cnpj"
            value={fornecedor.cnpj}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={fornecedor.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Atualizar</button>
      </form>
    </div>
  );
}

export default UpdateFornecedorByID;
