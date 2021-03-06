import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

// Componente: Bloco isolado de HTML, CSS OU JS, o quel não interfere no restante da aplicação.
// Propriedade: Informações que um componente PAI passa para um componente FILHO
// estado: Informações mantidas pelo componente (Lembrar : Imutabilidade)


function App() {

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form action="">
        
          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input type="text" name="github_username" id="github_username" required />
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input type="text" name="techs" id="techs" required />
          </div>
          
          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="text" name="latitude" id="latitude" required />
            </div>
            <div class="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input type="text" name="longitude" id="longitude" required />
          </div>
          </div>
          <button type="submit">Salvar</button>  
        </form>
      </aside>
      
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/55396593?s=460&v=4" alt="Jonatas-Castro"/>
              <div className="user-info">
                <strong>Jonatas Castro</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
            I am a specialist Software Developer. I am currently working with technologies such as Node.js, Angular, jQuery, HTML5, CSS3, PL/SQL Oracle Databases, and more.
            </p>
            <a href="https://github.com/Jonatas-Castro">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
   );
}

export default App;
