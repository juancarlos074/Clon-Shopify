export default function Card_Producto({ producto, onClick }) {
  return (
    <div className="col-md-3 mb-3" style={{ width: "16vw" }}>
      <div
        className="card h-100 shadow-sm"
        style={{ cursor: "pointer" }}
        onClick={() => onClick(producto)}
      >
        <img
          src={producto.imagen || "https://via.placeholder.com/300"}
          className="card-img-top"
          alt={producto.nombre}
          style={{height:"60%"}}
        />

        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">
            Categoría: {producto.coleccion}
          </p>
          <p className="fw-bold">${producto.precio}</p>
        </div>
      </div>
    </div>
  );
}

