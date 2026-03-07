import { res } from './api/getData';
import './App.css'
import Home from './pages/home/Home'

function App() {
  console.log(res);
  

  return (
    <>
      <Home></Home>
    </>
  )
}

export default App
