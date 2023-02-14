import './styles/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/skills' element={<Skills/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
