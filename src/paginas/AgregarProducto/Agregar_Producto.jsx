import supabase from "../../supabase/Conexion";
import { UserAuth } from "../../supabase/AutenContextProvider";
import { useState } from "react";

export default function Agregar_Producto() {
  
  const { Userid } = UserAuth();
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [Categoria, setCategoria] = useState("");
  const [Precio, setPrecio] = useState("");
  const [PrecioUnitario, setPrecioUnitario] = useState("");
  const [Costoporartículo, setCostoporartículo] = useState("");
  const [Cantidad, setcantidad] = useState("");
  const [Sucursal, setSucursal] = useState("");
  const [Embalaje, setEmbalaje] = useState("");
  const [Peso, setPeso] = useState("");
  const [Unidad_Peso, serUnidad_Peso] = useState("");
  const [País, setPaís] = useState("");
  const [Estado, setEstado] = useState(true);

  //Variables para guardar la foto del producto
  const [imagen, setImagen] = useState(null);
  const [preview, setPreview] = useState(null);
  let imageUrl = null;

  const guardarProducto = async (e) => {
    e.preventDefault(); // evita recarga

    try {

      if (imagen) {
      console.log("Estoy en la parte de la sbida del video");
      imageUrl = await subirImagen(imagen);
    }

      const { data, error } = await supabase
        .from("Producto")
        .insert([
          {
            Id_Usuario: Userid,
            Titulo: titulo,
            Descripcion: descripcion,
            Categoria:Categoria,
            Precio:Precio,
            Precio_Unitario:PrecioUnitario,
            Costo_Por_Item:Costoporartículo,
            Embalaje:Embalaje,
            Peso:Peso,
            Unidad_Peso:Unidad_Peso,
            Pais_Origen:País,
            Estado:Estado,
            Cantidad:Cantidad,
            Sucursal:Sucursal,
            Imagen_URL: imageUrl
          }
        ])
        .select();

      if (error) {
        console.error("❌ Error al insertar:", error);
        alert(`❌ Error al guardar: ${error.message}`);
        return;
      }

      console.log("✅ Producto insertado:", data);
      alert("✅ Producto guardado correctamente");

      // LIMPIAR FORMULARIO
      limpiarFormulario();
      console.log("Acabo de limpiar el formulario bro");

    } catch (err) {
      console.error("🚨 Error inesperado:", err);
      alert("🚨 Error inesperado");
    }
  };

  //Funcion para mostrar la imagen que se seleeciono
  const manejarArchivo = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImagen(file);
    setPreview(URL.createObjectURL(file));
  };

  //Funcion para poder subir la imagen al storage del supabe y odtener la url
  const subirImagen = async (imagen) => {
    console.log("estoy en la funcion como tal");

    const nombreArchivo = `${Date.now()}_${imagen.name}`;

    const { error } = await supabase.storage
      .from("Imagnes")
      .upload(nombreArchivo, imagen);

    if (error) {
      console.error(error);
      return null;
    }

    const { data } = supabase.storage
      .from("Imagnes")
      .getPublicUrl(nombreArchivo);

    return data.publicUrl;
  };


  //Funcion para poder limpiar los usestate del sistema
  const limpiarFormulario = () => {
    setTitulo("");
    setDescripcion("");
    setCategoria("");
    setPrecio("");
    setPrecioUnitario("");
    setCostoporartículo("");
    setcantidad("");
    setSucursal("");
    setEmbalaje("");
    setPeso("");
    serUnidad_Peso("");
    setPaís("");
    setEstado(true);

     // Limpiar imagen
    setImagen(null);
    setPreview(null);
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
                name="descripcion" // ¡Mantenemos el atributo name!
                placeholder="Agrega una descripción detallada del producto"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              ></textarea>
            </div>

            {/* Multimedia */}
            <div className="mb-3 border p-3 rounded bg-light">
              <h5>Multimedia</h5>

              <input
                type="file"
                className="form-control mb-2"
                accept="image/*"
                onChange={manejarArchivo}
              />
              {preview && (
                <img
                  src={preview}
                  alt="preview"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              )}
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
                <div className="col-md-12">
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
            </div>

            {/* Envío */}
            <div className="mb-3 border p-3 rounded bg-light">
              <h5>Envío</h5>

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
              value={Estado ? "true" : "false"}
              onChange={(e) => setEstado(e.target.value === "true")}
            >
              <option value="true">Activo</option>
              <option value="false">Inactivo</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}