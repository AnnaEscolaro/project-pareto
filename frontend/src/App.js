import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
// import Album from './pages/Album';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <p>Pareto Image Generator</p>
      <Routes>
        <Route path="/" element={ <Login /> } />
          {/* <Route path="/album" element={ <Album /> } /> */}
          <Route path="/*" element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
