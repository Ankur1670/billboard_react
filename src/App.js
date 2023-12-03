import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from './pages/home';
import Book from './pages/book';
import Detail from './pages/detail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/a" element={<Book />}/>
            <Route path="/b/:id" element={<Detail />}/>




           
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
