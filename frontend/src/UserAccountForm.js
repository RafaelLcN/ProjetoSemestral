import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserAccountForm = () => {
  const [formData, setFormData] = useState({
    data_nascimento: '',
    email: '',
    password: '',
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { status } = await axios.post('http://localhost:8000/users/novouser/', formData);
      setResponseMessage(
        status === 200 ? 'Conta criada com sucesso!' : 'Erro ao criar a conta de usuário.'
      );
    } catch {
      setResponseMessage('Falha ao conectar ao servidor.');
    }
  };

  const inputFields = [
    { label: 'Data de Nascimento:', name: 'data_nascimento', type: 'date' },
    { label: 'Email:', name: 'email', type: 'email' },
    { label: 'Senha:', name: 'password', type: 'password' },
  ];

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-4">Crie sua conta de usuário</h3>
        <form onSubmit={handleSubmit}>
          {inputFields.map(({ label, name, type }) => (
            <div className="mb-3" key={name}>
              <label className="fw-bold">{label}</label>
              <input
                className="form-control"
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <button type="submit" className="btn btn-secondary btn-block w-100 mt-3">
            Criar Conta
          </button>
        </form>
        {responseMessage && <p className="mt-3 text-center">{responseMessage}</p>}
      </div>
    </div>
  );
};

export default UserAccountForm;
