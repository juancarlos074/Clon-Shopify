export default function Agregar_Producto() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Columna izquierda */}
        <div className="col-md-8">
          <h4 className="mb-4">Agregar Producto</h4>

          <form>
            {/* Título */}
            <div className="mb-3">
              <label className="form-label">Título</label>
              <input
                type="text"
                className="form-control"
                placeholder="Camiseta de manga corta"
              />
            </div>

            {/* Editor de texto enriquecido */}
            <div className="mb-3">
              <label className="form-label">Descripción</label>
              <textarea
                className="form-control"
                rows="5"
                placeholder="Agrega una descripción detallada del producto"
              ></textarea>
            </div>

            {/* Multimedia */}
            <div className="mb-3 border p-3 rounded bg-light">
              <h5>Multimedia</h5>
              <p className="text-muted">
                Acepta imágenes, videos o modelos 3D.
              </p>
              <div className="mb-2">
                <input type="file" className="form-control" multiple />
              </div>
              <button type="button" className="btn btn-outline-secondary btn-sm">
                Seleccionar existente
              </button>
            </div>

            {/* Categoría */}
            <div className="mb-3 border p-3 rounded bg-light">
              <h5>Categoría</h5>
              <select className="form-select mt-2">
                <option>Elige una categoría de producto</option>
                <option>Ropa</option>
                <option>Calzado</option>
                <option>Accesorios</option>
              </select>
              <p className="mt-2 text-muted">
                Determina las tasas de impuestos y agrega metacampos para mejorar la búsqueda, los filtros y las ventas multicanal.
              </p>
            </div>

            {/* Precios */}
            <div className="mb-3 border p-3 rounded bg-light">
              <h5>Precio</h5>
              <div className="row">
                <div className="col-md-6">
                  <label className="form-label">Precio</label>
                  <input type="number" className="form-control" placeholder="0,00" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Comparar con</label>
                  <input type="number" className="form-control" placeholder="0,00" />
                </div>
              </div>

              <div className="mt-3">
                <label className="form-label">Precio unitario</label>
                <input type="number" className="form-control" placeholder="0,00" />
              </div>

              <div className="form-check mt-3">
                <input className="form-check-input" type="checkbox" defaultChecked />
                <label className="form-check-label">Cobrar impuestos</label>
              </div>

              <div className="mt-3">
                <label className="form-label">Costo por artículo</label>
                <input type="number" className="form-control" placeholder="0,00" />
              </div>
            </div>

            {/* Inventario */}
            <div className="mb-3 border p-3 rounded bg-light">
              <h5>Inventario</h5>
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" defaultChecked />
                <label className="form-check-label">Inventario con seguimiento</label>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <label className="form-label">Cantidad</label>
                  <input type="number" className="form-control" placeholder="0" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Sucursal de la tienda</label>
                  <input type="text" className="form-control" placeholder="Sucursal principal" />
                </div>
              </div>

              <div className="mt-3">
                <label className="form-label">SKU</label>
                <input type="text" className="form-control" />
              </div>

              <div className="mt-3">
                <label className="form-label">Código de barras</label>
                <input type="text" className="form-control" />
              </div>

              <div className="form-check mt-3">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Vender sin existencias</label>
              </div>
            </div>

            {/* Envío */}
            <div className="mb-3 border p-3 rounded bg-light">
              <h5>Envío</h5>
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" defaultChecked />
                <label className="form-check-label">Producto físico</label>
              </div>

              <label className="form-label">Embalaje</label>
              <input type="text" className="form-control" placeholder="Predeterminado de la tienda" />

              <div className="mt-3">
                <label className="form-label">Peso del producto</label>
                <input type="number" className="form-control" placeholder="0.0" />
              </div>

              <div className="mt-3">
                <label className="form-label">Unidad de peso</label>
                <select className="form-select">
                  <option>kg</option>
                  <option>g</option>
                  <option>lb</option>
                </select>
              </div>

              <div className="mt-3">
                <label className="form-label">País de origen</label>
                <input type="text" className="form-control" />
              </div>

              <div className="mt-3">
                <label className="form-label">Código SA</label>
                <input type="text" className="form-control" />
              </div>
            </div>

            {/* Variantes */}
            <div className="mb-3 border p-3 rounded bg-light">
              <h5>Variantes</h5>
              <p className="text-muted">
                Agrega opciones como tamaño o color si el producto tiene variantes.
              </p>
              <button type="button" className="btn btn-outline-primary btn-sm">
                Agregar variante
              </button>
            </div>

            {/* SEO */}
            <div className="mb-3 border p-3 rounded bg-light">
              <h5>Publicación en motores de búsqueda</h5>
              <p className="text-muted">
                Agrega un título y una descripción para ver cómo podría aparecer este producto en los resultados de búsqueda.
              </p>
              <label className="form-label">Título SEO</label>
              <input type="text" className="form-control" />
              <label className="form-label mt-3">Descripción SEO</label>
              <textarea className="form-control" rows="3"></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Guardar producto
            </button>
          </form>
        </div>

        {/* Columna derecha */}
        <div className="col-md-4">
          <div className="border rounded p-3 mb-3 bg-light">
            <h5>Estado</h5>
            <select className="form-select mt-2">
              <option selected>Activo</option>
              <option>Inactivo</option>
            </select>
          </div>

          <div className="border rounded p-3 mb-3 bg-light">
            <h5>Publicación</h5>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultChecked />
              <label className="form-check-label">Tienda online</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">Point of Sale</label>
            </div>
          </div>

          <div className="border rounded p-3 mb-3 bg-light">
            <h5>Organización del producto</h5>

            <label className="form-label mt-2">Tipo</label>
            <input type="text" className="form-control" placeholder="Ej: Ropa" />

            <label className="form-label mt-3">Proveedor</label>
            <input type="text" className="form-control" placeholder="Ej: Marca XYZ" />

            <label className="form-label mt-3">Colecciones</label>
            <input type="text" className="form-control" placeholder="Ej: Verano 2025" />

            <label className="form-label mt-3">Etiquetas</label>
            <input type="text" className="form-control" placeholder="Ej: oferta, nuevo" />
          </div>

          <div className="border rounded p-3 bg-light">
            <h5>Plantilla de tema</h5>
            <select className="form-select mt-2">
              <option selected>Producto predeterminado</option>
              <option>Plantilla personalizada</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
