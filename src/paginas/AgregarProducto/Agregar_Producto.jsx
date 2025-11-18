import supabase from "../../supabase/Conexion";
import { UserAuth } from "../../supabase/AutenContextProvider";
import { useState } from "react";

export default function Agregar_Producto() {
  
  const { Userid } = UserAuth();
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [Categoria, setCategoria] = useState("");
  const [Precio, setPrecio] = useState(null);
  const [Precioacomprar, setPrecioacomprar] = useState(null);
  const [PrecioUnitario, setPrecioUnitario] = useState(null);
  const [Costoporartículo, setCostoporartículo] = useState(null);
  const [Cantidad, setcantidad] = useState(null);
  const [Sucursal, setSucursal] = useState("");
  const [SKU, setSKU] = useState("");
  const [Codigo, setCodigo] = useState("");
  const [Embalaje, setEmbalaje] = useState("");
  const [Peso, setPeso] = useState(null);
  const [Unidad_Peso, serUnidad_Peso] = useState("");
  const [País, setPaís] = useState("");
  const [CódigoSA, setCódigoSA] = useState("");
  const [TítuloSEO, setTítuloSEO] = useState("");
  const [DescripciónSEO, setDescripciónSEO] = useState("");
  const [Estado, setEstado] = useState("");
  const [Tipo, setTipo] = useState("");
  const [Proveedor, setProveedor] = useState("");
  const [Colecciones, setColecciones] = useState("");
  const [Etiquetas, setEtiquetas] = useState("");
  const [Plantilla, setPlantilla] = useState("");
    
  console.log(Userid);

  const guardarProducto = async (e) => {
    e.preventDefault();
    try {
      console.log("Estot aqui bro");

      
      if (!titulo || !descripcion) {
          alert("Debes llenar al menos Título, Descripción y SKU");
          return;
      }

        console.log("Estot aqui bro 2");

      if (!Userid) {
          console.error("User ID is missing.");
          alert("Error de autenticación: El ID de usuario no está disponible.");
          return;
      }

        console.log("Estot aqui bro 3");

   
      const { data, error: supabaseError } = await supabase
        .from("Producto")
        .insert([
          {
            Titulo: titulo,
            Descripcion: descripcion,
            Id_Usuario: Userid,
            Categoria: Categoria,
            Precio:Precio,
            Precio_Comparacion:Precioacomprar,
            Precio_Unitario:PrecioUnitario,
            Costo_Por_Item:Costoporartículo,
            Sku:SKU,
            Cantidad:Cantidad,
            Sucursal:Sucursal,
            Codigo_Sku:Codigo,
            Embalaje:Embalaje,
            Peso:Peso,
            Unidad_Peso:Unidad_Peso,
          }
        ])
        .select();

      if (supabaseError) {
        console.error("❌ Error al insertar:", supabaseError);
        alert(`❌ Ocurrió un error al guardar el producto: ${supabaseError.message}`);
        return;
      }

      console.log("✅ Producto insertado:", data);
      alert("✅ Producto guardado correctamente");

    } catch (err) {
      console.error("🚨 Error inesperado:", err);
      alert("🚨 Error inesperado al guardar el producto.");
    }
  };


  return (
    <div className="container-fluid">
      <div className="row">
        {/* Columna izquierda */}
        <div className="col-md-8">
          <h4 className="mb-4">Agregar Producto</h4>

          <form onSubmit={guardarProducto} > 
            {/* Título */}
            <div className="mb-3">
              <label className="form-label">Título</label>
              <input
                type="text"
                className="form-control"
                name="titulo" // ¡Mantenemos el atributo name para usar FormData!
                placeholder="Camiseta de manga corta"
                 onChange={(e) => setTitulo(e.target.value)}
              />
            </div>

            {/* Descripción */}
            <div className="mb-3">
              <label className="form-label">Descripción</label>
              <textarea
                className="form-control"
                rows="5"
                name="descripcion" // ¡Mantenemos el atributo name!
                placeholder="Agrega una descripción detallada del producto"
                onChange={(e) => setDescripcion(e.target.value)}
              ></textarea>
            </div>

            {/* Multimedia */}
            <div className="mb-3 border p-3 rounded bg-light">
              <h5>Multimedia</h5>
              <input type="file" className="form-control mb-2" multiple name="multimedia" />
              <button type="button" className="btn btn-outline-secondary btn-sm">
                Seleccionar existente
              </button>
            </div>

            {/* Categoría */}
            <div className="mb-3 border p-3 rounded bg-light">
              <h5>Categoría</h5>
              <select 
                className="form-select mt-2" 
                name="categoria" 
                value={Categoria}
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
                    name="precio" 
                    placeholder="0,00"
                    value={Precio}
                    onChange={(e) => setPrecio(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Comparar con</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    name="compararPrecio" 
                    placeholder="0,00" 
                    value={Precioacomprar}
                    onChange={(e) => setPrecioacomprar(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-3">
                <label className="form-label">Precio unitario</label>
                <input 
                  type="number" 
                  className="form-control" 
                  name="precioUnitario" 
                  placeholder="0,00" 
                  value={PrecioUnitario}
                  onChange={(e) => setPrecioUnitario(e.target.value)}
                />
              </div>

              <div className="form-check mt-3">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  name="cobrarImpuestos" 
                  defaultChecked={true} // Usamos defaultChecked en lugar de checked
                />
                <label className="form-check-label">Cobrar impuestos</label>
              </div>

              <div className="mt-3">
                <label className="form-label">Costo por artículo</label>
                <input 
                  type="number" 
                  className="form-control" 
                  name="costoArticulo" 
                  placeholder="0,00" 
                  value={Costoporartículo}
                  onChange={(e) => setCostoporartículo(e.target.value)}
                />
              </div>
            </div>

            {/* Inventario */}
            <div className="mb-3 border p-3 rounded bg-light">
              <h5>Inventario</h5>
              <div className="form-check mb-3">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  name="venderSinExistencias" 
                  defaultChecked={false} 
                />
                <label className="form-check-label">Vender sin existencias</label>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <label className="form-label">Cantidad</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    name="cantidad" 
                    placeholder="0" 
                    value={Cantidad}
                    onChange={(e) => setcantidad(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Sucursal de la tienda</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="sucursal" 
                    placeholder="Sucursal principal" 
                    value={Sucursal}
                    onChange={(e) => setSucursal(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-3">
                <label className="form-label">SKU</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="sku" 
                  value={SKU}
                  onChange={(e) => setSKU(e.target.value)}
                />
              </div>

              <div className="mt-3">
                <label className="form-label">Código</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="Código"
                  value={Codigo}
                  onChange={(e) => setCodigo(e.target.value)}
                />
              </div>
            </div>

            {/* Envío */}
            <div className="mb-3 border p-3 rounded bg-light">
              <h5>Envío</h5>
              <div className="form-check mb-3">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  name="productoFisico" 
                  defaultChecked={true} 
                />
                <label className="form-check-label">Producto físico</label>
              </div>

              <label className="form-label">Embalaje</label>
              <input 
                type="text" 
                className="form-control" 
                name="embalaje" 
                placeholder="Predeterminado de la tienda" 
                value={Embalaje}
                onChange={(e) => setEmbalaje(e.target.value)}
              />

              <div className="mt-3">
                <label className="form-label">Peso del producto</label>
                <input 
                  type="number" 
                  className="form-control" 
                  name="peso" 
                  placeholder="0.0" 
                  value={Peso}
                onChange={(e) => setPeso(e.target.value)}
                />
              </div>

              <div className="mt-3">
                <label className="form-label">Unidad de peso</label>
                <select 
                  className="form-select" 
                  name="unidadPeso" 
                  defaultValue="kg"
                  onChange={(e) => serUnidad_Peso(e.target.value)}
                >
                  <option value="kg">kg</option>
                  <option value="g">g</option>
                  <option value="lb">lb</option>
                </select>
              </div>

              <div className="mt-3">
                <label className="form-label">País de origen</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="paisOrigen" 
                  value={País}
                  onChange={(e) => setPaís(e.target.value)}
                />
              </div>

              <div className="mt-3">
                <label className="form-label">Código SA</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="codigoSA" 
                  value={CódigoSA}
                  onChange={(e) => setCódigoSA(e.target.value)}
                />
              </div>
            </div>

            {/* SEO */}
            <div className="mb-3 border p-3 rounded bg-light">
              <h5>SEO</h5>
              <label className="form-label">Título SEO</label>
              <input 
                type="text" 
                className="form-control" 
                name="tituloSEO" 
                value={TítuloSEO}
                onChange={(e) => setTítuloSEO(e.target.value)}
              />
              <label className="form-label mt-3">Descripción SEO</label>
              <textarea 
                className="form-control" 
                rows="3" 
                name="descripcionSEO" 
                value={DescripciónSEO}
                onChange={(e) => setDescripciónSEO(e.target.value)}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Guardar producto
            </button>
          </form>
        </div>

        {/* Columna derecha */}
        <div className="col-md-4">
          {/* Estado */}
          <div className="border rounded p-3 mb-3 bg-light">
            <h5>Estado</h5>
            <select 
              className="form-select mt-2" 
              name="estado" 
              defaultValue="Activo"
              value={Estado}
              onChange={(e) => setEstado(e.target.value)}
            >
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </div>

          {/* Publicación */}
          <div className="border rounded p-3 mb-3 bg-light">
            <h5>Publicación</h5>
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="checkbox" 
                name="tiendaOnline" 
                defaultChecked={true} 
              />
              <label className="form-check-label">Tienda online</label>
            </div>
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="checkbox" 
                name="pointOfSale" 
                defaultChecked={false} 
              />
              <label className="form-check-label">Point of Sale</label>
            </div>
          </div>

          {/* Organización */}
          <div className="border rounded p-3 mb-3 bg-light">
            <h5>Organización del producto</h5>
            <label className="form-label mt-2">Tipo</label>
            <input 
              type="text" 
              className="form-control" 
              name="tipo" 
              value={Tipo}
              onChange={(e) => setTipo(e.target.value)}
            />

            <label className="form-label mt-3">Proveedor</label>
            <input 
              type="text" 
              className="form-control" 
              name="proveedor" 
              value={Proveedor}
              onChange={(e) => setProveedor(e.target.value)}
            />

            <label className="form-label mt-3">Colecciones</label>
            <input 
              type="text" 
              className="form-control" 
              name="colecciones" 
              value={Colecciones}
              onChange={(e) => setColecciones(e.target.value)}
            />

            <label className="form-label mt-3">Etiquetas</label>
            <input 
              type="text" 
              className="form-control" 
              name="etiquetas" 
              value={Etiquetas}
              onChange={(e) => setEtiquetas(e.target.value)}
            />
          </div>

          {/* Plantilla de tema */}
          <div className="border rounded p-3 bg-light">
            <h5>Plantilla de tema</h5>
            <select 
              className="form-select mt-2" 
              name="plantillaTema" 
              defaultValue="Producto predeterminado"
              value={Plantilla}
              onChange={(e) => setPlantilla(e.target.value)}

            >
              <option value="Producto predeterminado">Producto predeterminado</option>
              <option value="Plantilla personalizada">Plantilla personalizada</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}