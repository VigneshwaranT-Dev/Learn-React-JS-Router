import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import { Home, About, Contact, User, OldBooks, NewBooks, Login } from './components/componentIndex';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul className='navigation'>
          <li><Link to='home'>Home</Link></li>
          <li><Link to='about'>About</Link></li>
          <li><Link to='contact'>Contact</Link></li>
          <li><Link to='user/1'>User 1</Link></li>
          <li><Link to='user/2'>User 2</Link></li>
          <li><Link to='books/old-books'>Old Books Here</Link></li>
          <li><Link to='books/new-books'>New Books Here</Link></li>
          <li style={{'margin-left': 'auto'}}><Link to='login'>Login</Link></li>
        </ul>
        <Routes>
          <Route path='' element={<Navigate to="login" />} />
          <Route path='login' element={<Login/>} />
          <Route path='home' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='user/:userId' element={<User/>} />
          <Route path='books'>
            <Route path='old-books' element={<OldBooks/>}/>
            <Route path='new-books' element={<NewBooks/>}/>
            <Route path='' element={<Navigate to="old-books"/>}/>
            <Route path='*' element={<h1>404 Page Not Found</h1>} />
          </Route>
          <Route path='*' element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
