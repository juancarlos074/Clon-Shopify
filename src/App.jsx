import './App.css'
import Header from './componentes/header'
import Menuprincipal from './componentes/menuprincipal'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './paginas/Home';
import Pedidos from './paginas/Pedidos/Pedidos';


function App() {

  return (
    <BrowserRouter>
      {/* Header siempre visible */}
      <Header />

      <section className="d-flex">
        {/* Menuprincipal siempre visible */}
        <Menuprincipal />

        {/* Contenido que cambia según la ruta */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pedidos" element={<Pedidos />} />
        </Routes>
      </section>
    </BrowserRouter>
  )
}

export default App
