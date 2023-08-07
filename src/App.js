import {BrowserRouter } from 'react-router-dom';
import {Routes,Route} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import { LoginContext } from './context/LoginContext';
import { useState } from 'react';
import Confirmation from './pages/Confirmation';

function App() {
  const [login,setLogin] = useState("");

  // const LoginContext = createContext({});
  return (
    <div className="App">
      <LoginContext.Provider value={{login,setLogin}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/Confirmation" element={<Confirmation/>}/>
        </Routes>
      </BrowserRouter>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
