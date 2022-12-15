import './App.css';
import {Link, Routes, Route, BrowserRouter} from 'react-router-dom';
import Header from './components/header';
import Inicio from './components/inicio';
import Footer from './components/footer';
import Whatsapp from './components/whatsapp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Whatsapp />
          <Routes>
            <Route path='/' element={<Inicio />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
