import React from 'react';
import { Route, Link } from 'react-router-dom';
import CrearCuenta from './pages/CrearCuenta.page/CrearCuenta.page';
import VinculacionLegal from './pages/VinculacionLegal.page/VinculacionLegal.page';
import "./styles/Css/index.css"

function App() {
  return (
    <div className='App'>
      <Route exact path='/' render={() => <Link to='/Registrarse/General'><button className="reg">Registrarse</button></Link>} />
      <Route path='/Registrarse/General' render={() => <CrearCuenta />}/>
      <Route path='/Registrarse/Legal' render={() => <VinculacionLegal />}/>
    </div>
  );
}

export default App;
