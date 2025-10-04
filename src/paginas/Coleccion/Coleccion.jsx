import { useState } from "react";
import "./Coleccion.css";

export default function Coleccion() {
  const [colecciones, setColecciones] = useState([
    {
      id: 1,
      imagen: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
      titulo: "Página de inicio",
      productos: 0,
      condiciones: "Ninguna",
    },
  ]);

  const crearColeccion = () => {
    alert("Aquí abrirás un modal o formulario para crear una nueva colección");
  };

  return (
    <section className="w-100 p-4">
      {/* Encabezado */}
      <section className="d-flex justify-content-between align-items-center mb-4">
        <h4>📦 Colecciones</h4>
        <button className="btn btn-dark" onClick={crearColeccion}>
          + Crear colección
        </button>
      </section>

      {/* Filtros */}
      <section className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <button className="btn btn-outline-secondary btn-sm me-2">
            Todas
          </button>
          <button className="btn btn-outline-secondary btn-sm">
            Crear vista nueva
          </button>
        </div>
        <div>
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Buscar colecciones..."
            style={{ width: "220px" }}
          />
        </div>
      </section>

      {/* Tabla de colecciones */}
      <table className="table table-striped align-middle text-center">
        <thead className="table-light">
          <tr>
            <th>Imagen</th>
            <th>Título</th>
            <th>Productos</th>
            <th>Condiciones de los productos</th>
          </tr>
        </thead>
        <tbody>
          {colecciones.map((c) => (
            <tr key={c.id}>
              <td>
                <img
                  src={c.imagen}
                  alt={c.titulo}
                  style={{ width: "50px", height: "50px", borderRadius: "8px" }}
                />
              </td>
              <td>{c.titulo}</td>
              <td>{c.productos}</td>
              <td>{c.condiciones}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
