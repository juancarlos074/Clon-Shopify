import './App.css'
import Header from './componentes/header'
import Menuprincipal from './componentes/Menuprincipal'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from 'react'

import Home from './paginas/Home'
import Pedidos from './paginas/Pedidos/Pedidos'
import Principal from './paginas/Principal/Principal'
import Productos from './paginas/Productos/Productos'
import Agregar_Producto from './paginas/Agregar Producto/Agregar_Producto'
import Coleccion from './paginas/Coleccion/Coleccion'
import Inventario from './paginas/Inventario/Inventario'
import Login from './paginas/Login/Login'

function App() {
  const location = useLocation()

  // 🧠 Ocultar Header y Menuprincipal en "/" y "/Login"
  const hideLayout = location.pathname === "/" || location.pathname === "/Login"

  // 🎨 Cambiar color de fondo del body dinámicamente
  useEffect(() => {
    const body = document.body

    if (location.pathname === "/" || location.pathname === "/Principal") {
      // Fondo oscuro para Principal
      body.style.backgroundColor = "#000"
      body.style.color = "#fff"
    } else {
      // Fondo claro para las demás páginas
      body.style.backgroundColor = "#fff"
      body.style.color = "#000"
    }

    // Limpieza por si se desmonta
    return () => {
      body.style.backgroundColor = ""
      body.style.color = ""
    }
  }, [location])

  return (
    <>
      {/* Mostrar Header y menú lateral solo si NO estamos en "/" o "/Login" */}
      {!hideLayout && (
        <>
          <Header />
          <section className="d-flex">
            <Menuprincipal />
            <div className="flex-grow-1 p-4">
              <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Pedidos" element={<Pedidos />} />
                <Route path="/Productos" element={<Productos />} />
                <Route path="/Agregar_Producto" element={<Agregar_Producto />} />
                <Route path="/Coleccion" element={<Coleccion />} />
                <Route path="/Inventario" element={<Inventario />} />
              </Routes>
            </div>
          </section>
        </>
      )}

      {/* Mostrar SOLO el contenido del login o principal */}
      {hideLayout && (
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      )}
    </>
  )
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
