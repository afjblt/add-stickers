import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import FormStickers from "./components/pages/FormStickers";

function App() {
  return (
    <Router>
      <div className="container">
        <div className='box'>
          <Routes>
            <Route exact path='/' element={<FormStickers />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
