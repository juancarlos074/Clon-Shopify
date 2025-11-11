import { useState } from "react";

export default function Agregar_Producto() {
  // Estados de los inputs
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [archivos, setArchivos] = useState([]);
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [compararCon, setCompararCon] = useState("");
  const [precioUnitario, setPrecioUnitario] = useState("");
  const [cobrarImpuestos, setCobrarImpuestos] = useState(true);
  const [costoArticulo, setCostoArticulo] = useState("");
  const [inventarioSeguimiento, setInventarioSeguimiento] = useState(true);
  const [cantidad, setCantidad] = useState("");
  const [sucursal, setSucursal] = useState("");
  const [sku, setSku] = useState("");
  const [codigoBarras, setCodigoBarras] = useState("");
  const [venderSinExistencias, setVenderSinExistencias] = useState(false);
  const [productoFisico, setProductoFisico] = useState(true);
  const [embalaje, setEmbalaje] = useState("");
  const [peso, setPeso] = useState("");
  const [unidadPeso, setUnidadPeso] = useState("kg");
  const [paisOrigen, setPaisOrigen] = useState("");
  const [codigoSA, setCodigoSA] = useState("");
  const [tituloSEO, setTituloSEO] = useState("");
  const [descripcionSEO, setDescripcionSEO] = useState("");
  const [estado, setEstado] = useState("Activo");
  const [tiendaOnline, setTiendaOnline] = useState(true);
  const [pos, setPos] = useState(false);
  const [tipo, setTipo] = useState("");
  const [proveedor, setProveedor] = useState("");
  const [colecciones, setColecciones] = useState("");
  const [etiquetas, setEtiquetas] = useState("");
  const [plantillaTema, setPlantillaTema] = useState("Producto predeterminado");

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes enviar todos los estados al backend
    const productoData = {
      titulo,
      descripcion,
      archivos,
      categoria,
      precio,
      compararCon,
      precioUnitario,
      cobrarImpuestos,
      costoArticulo,
      inventarioSeguimiento,
      cantidad,
      sucursal,
      sku,
      codigoBarras,
      venderSinExistencias,
      productoFisico,
      embalaje,
      peso,
      unidadPeso,
      paisOrigen,
      codigoSA,
      tituloSEO,
      descripcionSEO,
      estado,
      tiendaOnline,
      pos,
      tipo,
      proveedor,
      colecciones,
      etiquetas,
      plantillaTema
    };

    console.log(productoData);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Columna izquierda */}
        <div className="col-md-8">
          <h4 className="mb-4">Agregar Producto</h4>

          <form onSubmit={handleSubmit}>
            {/* Título */}
            <div className="mb-3">
              <label className="form-label">Título</label>
              <input
                type="text"
                className="form-control"
                placeholder="Camiseta de manga corta"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>

            {/* Descripción */}
            <div className="mb-3">
              <label className="form-label">Descripción</label>
              <textarea
                className="form-control"
                rows="5"
                placeholder="Agrega una descripción detallada del producto"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              ></textarea>
            </div>

            {/* Multimedia */}
            <div className="mb-3 border p-3 rounded bg-light">
              <h5>Multimedia</h5>
              <p className="text-muted">Acepta imágenes, videos o modelos 3D.</p>
              <div className="mb-2">
                <input
                  type="file"
                  className="form-control"
                  multiple
                  onChange={(e) => setArchivos(Array.from(e.target.files))}
                />
              </div>
              <button type="button" className="btn btn-outline-secondary btn-sm">
                Seleccionar existente
              </button>
            </div>

            {/* Categoría */}
            <div className="mb-3 border p-3 rounded bg-light">
              <h5>Categoría</h5>
              <select
                className="form-select mt-2"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="">Elige una categoría de producto</option>
                <option value="Ropa">Ropa</option>
                <option value="Calzado">Calzado</option>
                <option value="Accesorios">Accesorios</option>
              </select>
            </div>

            {/* Precios */}
            <div className="mb-3 border p-3 rounded bg-light">
              <h5>Precio</h5>
              <div className="row">
                <div className="col-md-6">
                  <label className="form-label">Precio</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="0,00"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Comparar con</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="0,00"
                    value={compararCon}
                    onChange={(e) => setCompararCon(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-3">
                <label className="form-label">Precio unitario</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="0,00"
                  value={precioUnitario}
                  onChange={(e) => setPrecioUnitario(e.target.value)}
                />
              </div>

              <div className="form-check mt-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={cobrarImpuestos}
                  onChange={(e) => setCobrarImpuestos(e.target.checked)}
                />
                <label className="form-check-label">Cobrar impuestos</label>
              </div>

              <div className="mt-3">
                <label className="form-label">Costo por artículo</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="0,00"
                  value={costoArticulo}
                  onChange={(e) => setCostoArticulo(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Guardar producto
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
