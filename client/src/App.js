import './App.css'
import { Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Layout from './components/Layout'
import SignUp from './features/auth/SignUp'
import Login from './features/auth/Login'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        {/* Public Routes */}
        <Route index element={<Landing/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='login' element={<Login/>}/>

      </Route>
    </Routes>
  );
}

export default App;
