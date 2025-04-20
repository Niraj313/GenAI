import './App.css'
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Result from './pages/Result';
import Pricing from './pages/Pricing';

function App() {

  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/result' element={<Result/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
      </Routes>
    </div>
  )
}

export default App
