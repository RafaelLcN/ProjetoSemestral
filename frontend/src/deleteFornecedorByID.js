import React from 'react';
import axios from 'axios';

function DeleteFornecedorByID({ id, onDelete }) {
  const handleDelete = async () => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`/fornecedor/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      onDelete(id); // Chama a função para remover o fornecedor da lista
    } catch (error) {
      alert('Erro ao deletar fornecedor.');
    }
  };

  return (
    <div>
      <button className="btn btn-danger" onClick={handleDelete}>
        Deletar Fornecedor
      </button>
    </div>
  );
}

export default DeleteFornecedorByID;
