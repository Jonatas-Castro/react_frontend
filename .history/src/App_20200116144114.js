import React from 'react';

// Componente: Bloco isolado de HTML, CSS OU JS, o quel não interfere no restante da aplicação.
// Propriedade: Informações que um componente PAI passa para um componente FILHO
// estado: Informações mantidas pelo componente (Lembrar : Imutabilidade)


function App() {

  return (
    <div id="app">
      <aside></aside>
      <main></main>
    </div>
   );
}

export default App;
