import { useState } from "react";
import "./Inventario.css";

export default function Inventario() {
  const [productos, setProductos] = useState([
    {
      id: "1a23bc45",
      nombre: "Cera moldeadora para cabello",
      tipo: "Estilo",
      proveedor: "BarberPro",
      coleccion: "Cabello",
      cantidad: 30,
      precio: 25000,
      estado: "Activo",
    },
    {
      id: "2d56ef78",
      nombre: "Shampoo revitalizante",
      tipo: "Cuidado capilar",
      proveedor: "HairMaster",
      coleccion: "Cabello",
      cantidad: 12,
      precio: 38000,
      estado: "Activo",
    },
    {
      id: "9a89gh12",
      nombre: "Aceite para barba",
      tipo: "Acondicionador",
      proveedor: "BeardKing",
      coleccion: "Barba",
      cantidad: 0,
      precio: 42000,
      estado: "Inactivo",
    },
  ]);

  return (
    <section className="w-100 p-4">
      {/* Encabezado */}
      <section className="d-flex justify-content-between align-items-center mb-4">
        <h4>📦 Inventario de Productos</h4>
        <button className="btn btn-dark">+ Agregar producto</button>
      </section>

      {/* Filtros */}
      <section className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <button className="btn btn-outline-secondary btn-sm me-2">Todos</button>
          <button className="btn btn-outline-secondary btn-sm">Activos</button>
          <button className="btn btn-outline-secondary btn-sm ms-2">Inactivos</button>
        </div>
        <div>
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Buscar producto..."
            style={{ width: "220px" }}
          />
        </div>
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
              <td>${p.precio.toLocaleString("es-CO")}</td>
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
