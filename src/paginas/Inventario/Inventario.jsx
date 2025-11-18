import { useState, useEffect } from "react";
import "./Inventario.css";
import supabase from "../../supabase/Conexion";

export default function Inventario() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    cargarProductos(); 
  }, []);

  //Funcion asrincronica para que cargue los productos
  async function cargarProductos() {
    const { data, error } = await supabase.from("Producto").select("*");

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

  return (
    <section className="w-100 p-4">
      {/* Encabezado */}
      <section className="d-flex justify-content-between align-items-center mb-4">
        <h4>📦 Inventario de Productos</h4>
      </section>

      {/* Tabla de inventario */}
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
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nombre}</td>
              <td>{p.tipo}</td>
              <td>{p.proveedor}</td>
              <td>{p.coleccion}</td>
              <td>
                <span
                  className={
                    p.cantidad > 10
                      ? "badge bg-success"
                      : p.cantidad > 0
                      ? "badge bg-warning"
                      : "badge bg-danger"
                  }
                >
                  {p.cantidad}
                </span>
              </td>
              <td>${p.precio?.toLocaleString("es-CO")}</td>
              <td>
                <span
                  className={
                    p.estado === "Activo"
                      ? "badge bg-primary"
                      : "badge bg-secondary"
                  }
                >
                  {p.estado}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
