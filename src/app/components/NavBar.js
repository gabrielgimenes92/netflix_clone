import React from 'react';

const NavBar = () => {
  return (
    <div>
      <h1>Netflix</h1>
      <ul className="categories">
        <li>início</li>
        <li>séries</li>
        <li>filmes</li>
        <li>bombando</li>
        <li>minha lista</li>
        <li>navegar por idiomas</li>
      </ul>
      <ul className="profileBar">
        <li>busca</li>
        <li>notificações</li>
        <li>perfil</li>
      </ul>
    </div>
  );
};

export default NavBar;
