import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import CheckoutStickers from "./components/pages/CheckoutStickers";
import FormStickers from "./components/pages/FormStickers";
import PaymentConclued from "./components/pages/PaymentConclued";

function App() {
  return (
    <Router>
      <div className="container">
        <div className='box'>
          <Routes>
            <Route exact path='/' element={<FormStickers />}></Route>
            <Route exact path='/checkout' element={<CheckoutStickers />}></Route>
            <Route exact path='/concluido' element={<PaymentConclued />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
