import './App.css';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home';
import bannerimg from './banner2.jpg'
function App() {

  return (
    <div className="App img-fluid" height="100%">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
