import React,{useState,useEffect} from 'react';
import api from './services/api';
import DevItem from './components/devItem';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

// Componente: Bloco isolado de HTML, CSS OU JS, o quel não interfere no restante da aplicação.
// Propriedade: Informações que um componente PAI passa para um componente FILHO
// estado: Informações mantidas pelo componente (Lembrar : Imutabilidade)



function App() {
  const [devs,setDevs]=useState([]);
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
  
  useEffect(()=>{
    async function loadDevs(){
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  },[]);

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

    // adicionar o novo DEV no array
    setDevs([...devs,response.data]);

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
          {devs.map(dev =>(
            <DevItem key={dev._id} dev={dev}/>
          ))}
        </ul>
      </main>
    </div>
   );
}

export default App;
