import { useState, useEffect } from "react";
import "./Inventario.css";
import supabase from "../../supabase/Conexion";
import { UserAuth } from "../../supabase/AutenContextProvider";

export default function Inventario() {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const { Userid } = UserAuth();

  useEffect(() => {
    cargarProductos();
  }, []);

  // Cargar productos
  async function cargarProductos() {
    const { data, error } = await supabase.from("Producto").select("*").eq("Id_Usuario", Userid);
;

    if (error) {
      console.error("❌ Error al obtener productos:", error);
      return;
    }

    const productosAdaptados = data.map((p) => ({
      id: p.id,
      nombre: p.Titulo,
      tipo: p.Tipo,
      proveedor: p.Proveedor,
      coleccion: p.Categoria,
      cantidad: p.Cantidad,
      precio: p.Precio,
      estado: p.Estado ? "Activo" : "Inactivo",
    }));

    setProductos(productosAdaptados);
  }

  // Eliminar producto
  async function eliminarProducto() {
    if (!productoSeleccionado) return;

    const { error } = await supabase
      .from("Producto")
      .delete()
      .eq("id", productoSeleccionado.id);

    if (error) {
      alert("❌ Error al eliminar");
      return;
    }

    alert("🗑️ Producto eliminado");
    
    //Borra la lista actual
    setProductoSeleccionado(null);

    //Y vuelve a pedir la lista 
    cargarProductos();
  }

  return (
    <section className="w-100 p-4">
      {/* Título */}
      <section className="d-flex justify-content-between align-items-center mb-4">
        <h4>📦 Inventario de Productos</h4>
      </section>

      {/* Tabla */}
      <table className="table table-hover align-middle text-center">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Proveedor</th>
            <th>Colección</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Estado</th>
          </tr>
        </thead>

        <tbody>
          {productos.map((p) => (
            <tr
              key={p.id}
              onClick={() => setProductoSeleccionado(p)}
              style={{ cursor: "pointer" }}
            >
              <td>{p.id}</td>
              <td>{p.nombre}</td>
              <td>{p.tipo}</td>
              <td>{p.proveedor}</td>
              <td>{p.coleccion}</td>
              <td>{p.cantidad}</td>
              <td>${p.precio}</td>
              <td>{p.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Panel de acciones */}
      {productoSeleccionado && (
        <div
          className="card p-3 mt-3"
          style={{ border: "1px solid #ddd", borderRadius: "8px" }}
        >
          <h5>Producto seleccionado:</h5>
          <p><b>{productoSeleccionado.nombre}</b></p>

          <div className="d-flex gap-3">
            <button className="btn btn-warning">✏️ Actualizar</button>

            <button className="btn btn-danger" onClick={eliminarProducto}>
              🗑️ Eliminar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
