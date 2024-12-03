import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserLogin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, status } = await axios.post('http://localhost:8000/users/login/', formData);
      if (status === 200) {
        localStorage.setItem('token', data.token);
        setResponseMessage('Login efetuado com sucesso!');
        setTimeout(() => window.location.reload(), 1000); 
      }
    } catch {
      setResponseMessage('Falha ao conectar ao servidor.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-4">Faça seu login</h3>
        <form onSubmit={handleSubmit}>
          {['email', 'password'].map((field) => (
            <div className="mb-3" key={field}>
              <label className="fw-bold">{field === 'email' ? 'Email:' : 'Senha:'}</label>
              <input
                className="form-control"
                type={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <button type="submit" className="btn btn-secondary btn-block w-100 mt-3">
            Entrar
          </button>
        </form>
        {responseMessage && <p className="mt-3 text-center">{responseMessage}</p>}
      </div>
    </div>
  );
};

export default UserLogin;
