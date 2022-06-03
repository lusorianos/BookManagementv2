import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Book<strong>Management</strong></h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="nav-contain">
              <NavLink to="/" className="link" role="button" activeClassName="active" exact>
                <span>Lista de livros</span>
                <i className="bi bi-list-ul"></i>
              </NavLink>
              <NavLink to="/add" className="link" role="button" activeClassName="active">
                <span>Cadastrar livro</span>
                <i className="bi bi-plus-circle"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;