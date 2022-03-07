import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from '../Home'
import  Login  from '../Login'
import  Register  from '../Register'
import  Jogo  from '../Jogo'
import  Cadast  from '../Cadast'


export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/jogo" exact element={<Jogo />} />
        <Route path="/cadast" exact element={<Cadast />} />
      </Routes>
    </Router>
  );
};
