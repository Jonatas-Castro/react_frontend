import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Mean.css';

// Componente: Bloco isolado de HTML, CSS OU JS, o quel não interfere no restante da aplicação.
// Propriedade: Informações que um componente PAI passa para um componente FILHO
// estado: Informações mantidas pelo componente (Lembrar : Imutabilidade)


function App() {

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form action="">
          <label htmlFor="username_github">Usuário do Github</label>
          <input type="text" name="github_username" id="username_github" required />
        </form>
      </aside>
      <main></main>
    </div>
   );
}

export default App;
