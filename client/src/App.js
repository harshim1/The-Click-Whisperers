import './App.css'
import { Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Layout from './components/Layout'
import SignUp from './features/auth/SignUp'
import Login from './features/auth/Login'
import DashLayout from './components/DashLayout'
import Home from './components/Home'
import Favourites from './components/Favourites'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        {/* Public Routes */}
        <Route index element={<Landing/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='login' element={<Login/>}/>
        {/* Logged in Routes */}
        <Route path='dash' element={<DashLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='favourites' element={<Favourites/>}/>
        
        </Route>


      </Route>
    </Routes>
  );
}

export default App;
