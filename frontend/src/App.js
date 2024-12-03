import React, { useState, useEffect } from "react";
import UserAccountForm from './UserAccountForm';
import ProductDataForm from './ProductDataForm';
import ShowAllProducts from './ShowAllProducts';
import DeleteProductById from './DeleteProduct';
import UpdateProductByID from './UpdateProduct';
import UserLogin from './UserLogin';
import FornecedorForm from './FornecedorForm'; 
import ShowAllFornecedores from './ShowAllFornecedores'; 
import UpdateFornecedorByID from './updateFornecedorByID.js/index.js'; 
import DeleteFornecedorByID from './deleteFornecedorByID.js'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleNavClick = (page) => {
    if (!isLoggedIn && page !== 'landing' && page !== 'login' && page !== 'createAccount') {
      setCurrentPage('login');
    } else {
      setCurrentPage(page);
    }
    setShowMenu(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setCurrentPage('landing');
  };

  const menuOptions = [
    { label: 'Novo Produto', page: 'createProducts' },
    { label: 'Mostrar Produtos', page: 'showAllProducts' },
    { label: 'Deletar Produto', page: 'deleteProduct' },
    { label: 'Atualizar Produto', page: 'updateProduct' },
    { label: 'Novo Fornecedor', page: 'createFornecedor' },
    { label: 'Mostrar Fornecedores', page: 'showAllFornecedores' },
    { label: 'Atualizar Fornecedor', page: 'updateFornecedorById' },
    { label: 'Deletar Fornecedor', page: 'deleteFornecedorById' },
  ];

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary bg-gradient">
        <a
          className="navbar-brand ms-2 text-dark"
          href="#"
          onClick={() => handleNavClick('landing')}
        >
          Home
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            {!isLoggedIn && (
              <>
                <li className="nav-item">
                  <button className="nav-link btn" onClick={() => handleNavClick('createAccount')}>
                    Criar Conta
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn" onClick={() => handleNavClick('login')}>
                    Login
                  </button>
                </li>
              </>
            )}
            {isLoggedIn && (
              <li className="nav-item">
                <button className="nav-link btn me-2" onClick={handleLogout}>
                  Sair
                </button>
              </li>
            )}
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => setShowMenu(!showMenu)}>
                Menu
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Menu Flutuante */}
      {showMenu && (
        <div className="dropdown-menu show" style={{ position: 'absolute', right: '10px', top: '50px' }}>
          {menuOptions.map((option) => (
            <button
              key={option.page}
              className="dropdown-item"
              onClick={() => handleNavClick(option.page)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      {/* Conteúdo Principal */}
      <div className="container text-center mt-5">
        {currentPage === 'landing' && <h1 className="display-4">Trabalho Semestral</h1>}
        {currentPage === 'createAccount' && <UserAccountForm />}
        {currentPage === 'login' && <UserLogin />}
        {currentPage === 'createProducts' && isLoggedIn && <ProductDataForm />}
        {currentPage === 'showAllProducts' && <ShowAllProducts />}
        {currentPage === 'deleteProductById' && isLoggedIn && <DeleteProductById />}
        {currentPage === 'updateProductById' && isLoggedIn && <UpdateProductByID />}
        {currentPage === 'createFornecedor' && isLoggedIn && <FornecedorForm />}
        {currentPage === 'showAllFornecedores' && <ShowAllFornecedores />}
        {currentPage === 'updateFornecedorById' && isLoggedIn && <UpdateFornecedorByID />}
        {currentPage === 'deleteFornecedorById' && isLoggedIn && <DeleteFornecedorByID />}
      </div>
    </div>
  );
}

export default App;
