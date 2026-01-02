import { useState, useEffect } from "react";
import "./Inventario.css";
import supabase from "../../supabase/Conexion";
import { UserAuth } from "../../supabase/AutenContextProvider";
import Card_Producto from "../../componentes/Card_Producto";

export default function Inventario() {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [productos, setProductos] = useState([]);
  const { Userid } = UserAuth();
  const [modoEdicion, setModoEdicion] = useState(false);
  const [productoEditado, setProductoEditado] = useState(null);

  const abrirModal = (producto) => {
  setProductoSeleccionado(producto);
  setProductoEditado({ ...producto });
  setModoEdicion(false);
};

  const activarEdicion = () => {
  setProductoEditado({ ...productoSeleccionado });
  setModoEdicion(true);
};

  //Este es para poder cargar los productos
  useEffect(() => {
    cargarProductos();
  }, []);

  //Este es para sincronizar el sistema con el producto seleccionado
  useEffect(() => {
  if (productoSeleccionado) {
    setProductoEditado({ ...productoSeleccionado });
  }
}, [productoSeleccionado]);


  // Cargar productos
  async function cargarProductos() {
    const { data, error } = await supabase.from("Producto").select("*").eq("Id_Usuario", Userid);
    console.log(data);
;

    if (error) {
      console.error("❌ Error al obtener productos:", error);
      return;
    }

    const productosAdaptados = data.map((p) => ({
    id: p.id,
    titulo: p.Titulo,
    descripcion: p.Descripcion,
    categoria: p.Categoria,
    precio: p.Precio,
    precioUnitario: p.Precio_Unitario,
    costoPorItem: p.Costo_Por_Item,
    embalaje: p.Embalaje,
    peso: p.Peso,
    unidadPeso: p.Unidad_Peso,
    paisOrigen: p.Pais_Origen,
    estado: p.Estado ? "Activo" : "Inactivo",
    cantidad: p.Cantidad,
    sucursal: p.Sucursal,
    imagen: p.Imagen_URL,
    creado: p.created_at,
  }));


    setProductos(productosAdaptados);
  }

  //Funcion para eliminar el producto como tal
  async function eliminarProducto(id) {
    const confirmar = window.confirm("¿Seguro que deseas eliminar este producto?");
    if (!confirmar) return;

    // eliminar imagen primero
    console.log("este es la url del producto : " + productoSeleccionado.imagen);
    await eliminarImagenStorage(productoSeleccionado.imagen);

    const { error } = await supabase
      .from("Producto")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("❌ Error al eliminar:", error);
      alert("Error al eliminar el producto");
      return;
    }

    alert("✅ Producto eliminado");
    setProductoSeleccionado(null);
    cargarProductos(); // refresca el inventario
  }

  //Funcion para eliminar la imagen del storage
  async function eliminarImagenStorage(imagenUrl) {
    console.log("Estoy dentro de la funcion 1");
    if (!imagenUrl) return;
    console.log("Estoy dentro de la funcion 2");
    // Obtener solo el nombre del archivo
    const nombreArchivo = imagenUrl.split("/").pop();
    console.log("nombre del archivo : " + nombreArchivo);

    const { error } = await supabase.storage
      .from("Imagnes")
      .remove([nombreArchivo]);

    if (error) {
      console.error("❌ Error al eliminar imagen del storage:", error.message);
    } else {
      console.log("🗑️ Imagen eliminada del storage:", nombreArchivo);
    }
  }

  //Funcion para poder editar los datos del formulario o del producto
  const guardarCambios = async () => {
  if (!productoSeleccionado) return;

  const { error } = await supabase
    .from("Producto")
    .update({
      Titulo: productoEditado.titulo,
      Descripcion: productoEditado.descripcion,
      Categoria: productoEditado.categoria,
      Precio: productoEditado.precio,
      Precio_Unitario: productoEditado.precioUnitario,
      Costo_Por_Item: productoEditado.costoPorItem,
      Cantidad: productoEditado.cantidad,
      Sucursal: productoEditado.sucursal,
      Embalaje: productoEditado.embalaje,
      Peso: productoEditado.peso,
      Unidad_Peso: productoEditado.unidadPeso,
      Pais_Origen: productoEditado.paisOrigen,
      Estado: productoEditado.estado === "Activo",
    })
    .eq("id", productoEditado.id);

  if (error) {
    console.error("❌ Error al actualizar producto:", error);
    alert("Error al guardar los cambios");
    return;
  }

  alert("✅ Producto actualizado correctamente");

  setModoEdicion(false);
  setProductoSeleccionado(null);
  cargarProductos();
};


  return (
    <section className="w-100 p-4">
      {/* Título */}

      <section className="w-100 p-4">
        <section className="d-flex justify-content-between align-items-center mb-4">
          <h4>📦 Inventario de Productos</h4>
        </section>

        <section className="row">
          {productos.map((producto) => (
            <Card_Producto
              key={producto.id}
              producto={producto}
              onClick={abrirModal}
            />
          ))}
        </section>

      </section>

    {productoSeleccionado && (
      <>
        <section className="modal fade show d-block" tabIndex="-1">
          <section className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <section className="modal-content">

              {/* HEADER */}
              <section className="modal-header border-0">
                <h5 className="modal-title fw-semibold">
                  {productoSeleccionado.titulo}
                </h5>
                <button
                  className="btn-close"
                  onClick={() => setProductoSeleccionado(null)}
                ></button>
              </section>

              {/* BODY */}
              <section className="modal-body">
                <section className="row">

                  {/* IMAGEN */}
                  <section className="col-md-4">
                    <img
                      src={productoEditado?.imagen || productoSeleccionado.imagen || "https://via.placeholder.com/400"}
                      className="img-fluid rounded mb-3"
                      style={{ objectFit: "cover", maxHeight: "320px" }}
                    />

                    <div className="d-flex justify-content-end gap-3">
                      {!modoEdicion ? (
                        <>
                          <button
                            className="btn btn-light border shadow-sm"
                            onClick={activarEdicion}
                          >
                            ✏️ Editar
                          </button>

                          <button
                            className="btn btn-light border shadow-sm text-danger"
                            onClick={() => eliminarProducto(productoSeleccionado.id)}
                          >
                            🗑️ Eliminar
                          </button>
                        </>
                      ) : (
                        <>
                          <button className="btn btn-success w-50" onClick={guardarCambios} >
                            💾 Guardar
                          </button>
                          <button
                            className="btn btn-secondary text-black w-50 "
                            onClick={() => setModoEdicion(false)}
                          >
                            ✖️ Cancelar
                          </button>
                        </>
                      )}
                    </div>
                  </section>

                  {/* INFO */}
                  <section className="col-md-8">

                    <div className="mb-3">
                      <label className="form-label">Título</label>
                      <input
                        className="form-control"
                        value={productoEditado?.titulo || ""}
                        disabled={!modoEdicion}
                        onChange={(e) =>
                          setProductoEditado({ ...productoEditado, titulo: e.target.value })
                        }
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Descripción</label>
                      <textarea
                        className="form-control"
                        rows="3"
                        value={productoEditado?.descripcion || ""}
                        disabled={!modoEdicion}
                        onChange={(e) =>
                          setProductoEditado({ ...productoEditado, descripcion: e.target.value })
                        }
                      />
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Categoría</label>
                        <input
                          className="form-control"
                          value={productoEditado?.categoria || ""}
                          disabled={!modoEdicion}
                          onChange={(e) =>
                            setProductoEditado({ ...productoEditado, categoria: e.target.value })
                          }
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label className="form-label">Sucursal</label>
                        <input
                          className="form-control"
                          value={productoEditado?.sucursal || ""}
                          disabled={!modoEdicion}
                          onChange={(e) =>
                            setProductoEditado({ ...productoEditado, sucursal: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <label className="form-label">Precio</label>
                        <input
                          type="number"
                          className="form-control"
                          value={productoEditado?.precio || ""}
                          disabled={!modoEdicion}
                          onChange={(e) =>
                            setProductoEditado({ ...productoEditado, precio: e.target.value })
                          }
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label className="form-label">Cantidad</label>
                        <input
                          type="number"
                          className="form-control"
                          value={productoEditado?.cantidad || ""}
                          disabled={!modoEdicion}
                          onChange={(e) =>
                            setProductoEditado({ ...productoEditado, cantidad: e.target.value })
                          }
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label className="form-label">Peso</label>
                        <input
                          type="number"
                          className="form-control"
                          value={productoEditado?.peso || ""}
                          disabled={!modoEdicion}
                          onChange={(e) =>
                            setProductoEditado({ ...productoEditado, peso: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <p className="text-muted mt-3" style={{ fontSize: "0.85rem" }}>
                      Creado el{" "}
                      {new Date(productoSeleccionado.creado).toLocaleDateString()}
                    </p>

                  </section>
                </section>
              </section>


            </section>
          </section>
        </section>

        {/* BACKDROP */}
        <section className="modal-backdrop fade show"></section>
      </>
    )}



    </section>

  );
  
}
