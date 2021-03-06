import React,{useState,useEffect} from 'react';
import api from './services/api';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

// Componente: Bloco isolado de HTML, CSS OU JS, o quel não interfere no restante da aplicação.
// Propriedade: Informações que um componente PAI passa para um componente FILHO
// estado: Informações mantidas pelo componente (Lembrar : Imutabilidade)



function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithubusername] = useState('');
  const [techs, setTechs] = useState('');
  
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        const{latitude,longitude} = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err)=>{
        console.log(err);
      },
      {
        timeout:30000,
      }
    );
  },[])
  
  async function handleAddDev(e){
    e.preventDefault();
    const response = await api.post('/devs',{
      github_username,
      techs,
      latitude,
      longitude,
    });

    setGithubusername('');
    setTechs('');

  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
        
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input type="text" 
                   name="github_username" 
                   id="github_username" 
                   required
                   value={github_username}
                   onChange={e => setGithubusername(e.target.value)} />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input type="text" 
                   name="techs" 
                   id="techs" 
                   required
                   value={techs}
                   onChange={e => setTechs(e.target.value)} />
          </div>
          
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number" 
                     name="latitude" 
                     id="latitude" 
                     required 
                     value={latitude}
                     onChange={e => setLatitude(e.target.value)}  
                      />
            </div>
            <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input type="number" 
                   name="longitude" 
                   id="longitude" 
                   required 
                   value={longitude}
                   onChange={e => setLongitude(e.target.value)} />
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
