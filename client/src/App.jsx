import { Route, Routes } from 'react-router-dom';
import './App.css';
import Protfolio from './components/Protfolio/Protfolio';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Protfolio/>}/>
        <Route path='/protfolio' element={<Protfolio/>}/>
        <Route path='*' element={<h1 style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', color: 'red'}}>Type error 404</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
