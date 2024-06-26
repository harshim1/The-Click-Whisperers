import './App.css'
import { Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Layout from './components/Layout'
import SignUp from './features/auth/SignUp'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        {/* Public Routes */}
        <Route index element={<Landing/>}/>
        <Route path='signup' element={<SignUp/>}/>

      </Route>
    </Routes>
  );
}

export default App;
