import './App.css'
import Header from './componentes/header'
import Menuprincipal from './componentes/menuprincipal'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Home from './paginas/Home'
import Pedidos from './paginas/Pedidos/Pedidos'
import Principal from './paginas/Principal/Principal'
import Productos from './paginas/Productos/Productos'
import Agregar_Producto from './paginas/Agregar Producto/Agregar_Producto'
import Coleccion from './paginas/Coleccion/Coleccion'
import Inventario from './paginas/Inventario/Inventario'

function App() {
  const location = useLocation()
  const isPrincipal = location.pathname === "/"

  return (
    <>
      {/* Header y menú lateral solo si no estamos en la pantalla principal */}
      {!isPrincipal && <Header />}

      <section className="d-flex">
        {!isPrincipal && <Menuprincipal />}

        {/* Contenido principal */}
        <div className="flex-grow-1 p-4">
          <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/Pedidos" element={<Pedidos />} />
            <Route path="/Home" element={<Home />} />

            {/* 🏷️ Rutas anidadas de Productos */}
            <Route path="/Productos" element={<Productos />}/>
            <Route path="/Agregar_Producto" element={<Agregar_Producto />} />
            <Route path="/Coleccion" element={<Coleccion></Coleccion> } />
            <Route path="/Inventario" element={<Inventario/>}/>
          </Routes>
        </div>
      </section>
    </>
  )
}

// 👇 Envolvemos todo en BrowserRouter una sola vez
export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
