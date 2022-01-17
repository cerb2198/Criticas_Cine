import Navbar from './components/partials/Nav_bar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from './components/views/Inicio';
import Singin from './components/views/Singin';
import Login from './components/views/Login';
import About from './components/views/About';
import Pnf from './components/views/PNF';


function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Inicio/>}> </Route>
          <Route exact path='/singin' element={<Singin/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route element={<Pnf/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
