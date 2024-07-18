import './App.css';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li><Link to='home'>Home</Link></li>
          <li><Link to='about'>About</Link></li>
          <li><Link to='contact'>Contact</Link></li>
        </ul>
        <Routes>
          <Route path='' element={<Navigate to="home" />} />
          <Route path='home' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='*' element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
