import './App.css'
import { Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Layout from './components/Layout'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        {/* landing nested within layout*/}
        <Route index element={<Landing/>}/>
      </Route>
    </Routes>
  );
}

export default App;
