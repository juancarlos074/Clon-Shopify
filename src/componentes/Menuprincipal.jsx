import { useState } from "react";
import { Link } from "react-router-dom";

export default function Menuprincipal() {
  const [mostrarSubmenu, setMostrarSubmenu] = useState(false);

  const toggleSubmenu = () => {
    setMostrarSubmenu(!mostrarSubmenu);
  };

  // const navigate = useNavigate();

  // useEffect(() => {
  //   async function verificar() {

  //     const { data, error } = await supabase.auth.getUser()

  //     console.log("Estoy aqui mismo bro ");
  //     console.log(data);

  //     if (data?.user) {
  //       console.log("Estoy dentro del if");
  //       navigate("/Home");
  //     }
  //     else{
  //       console.log(error);
  //     }
  //   }

  //   verificar();
  // }, [navigate]);


  return (
    <>
      <section className="bg-body-secondary" style={{ width: "20%", height: "100%" }}>
        <section>
          <ul className="menu list-unstyled ps-3">
            <li><Link to="/home">🏡 Inicio</Link></li>
            <li><Link to="/Pedidos">🌄 Pedidos</Link></li>

            {/* Productos con submenu */}
            <li onClick={toggleSubmenu} style={{ cursor: "pointer" }}>
              <Link to={"/Productos"}>🏷️ Productos </Link>
            </li>

            {mostrarSubmenu && (
              <ul className="submenu list-unstyled ms-3">
                <li><Link to="/Coleccion">📦 Colección</Link></li>
                <li><Link to="/Inventario">📋 Inventario</Link></li>
              </ul>
            )}

            <li><Link to="/Clientes">👨 Clientes</Link></li>
            <li><Link to="/Marketin">🎯 Marketin</Link></li>
            <li><Link to="/Descuentos">⚙️ Descuentos</Link></li>
            <li><Link to="/Contenido">🌄 Contenido</Link></li>
            <li><Link to="/Markets">🌐 Markets</Link></li>
            <li><Link to="/Informesyestadísticas">📶 Informes y estadísticas</Link></li>
            <li><Link to="/Canalesdeventa">🛒 Canales de venta</Link></li>
            <li><Link to="/Tiendaonline">🏪 Tienda online</Link></li>
            <li><Link to="/Apps">📱 Apps</Link></li>
            <li><Link to="/Añadir">➕ Añadir</Link></li>

          </ul>
        </section>
        <section>
            <ul>
              <li><Link to="/Configuración">⚙️ Configuración</Link></li>
            </ul>
        </section>
      </section>
    </>
  );
}
