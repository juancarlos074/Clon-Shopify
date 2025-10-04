import { Link, Outlet } from "react-router-dom"
import "./Productos.css"

export default function Productos() {
    return (
        <>
            <section className="w-100" >
                <section className="d-flex justify-content-between"> 
                    <h5>🏷️Productos</h5>
                </section>

                    <section className="d-flex justify-content-between">
                        <section>
                            <p>All  +</p>
                        </section>
                        <section>
                            <button>🔍📶</button>
                            <button>⬆️⬇️</button>
                        </section>
                    </section>

                <section className="d-flex w-100 align-items-center justify-content-around">
                    <section className="d-flex flex-column align-items-center">
                        <section>
                            <h5>Agrega tus productos </h5>
                            <p>Empieza por abastecer tu tienda con productos que les encantarán a tus clientes</p>
                        </section>

                        <section className="d-flex justify-content-start w-100">
                            <Link to={"/Agregar_Producto"}><h5>+ Agregar producto </h5></Link>                            
                            <button>
                            <img style={{width:"1vw"}} src="https://images.icon-icons.com/4322/PNG/512/installer_sign_arrow_down_downloading_directions_download_icon_267846.png" alt="" />
                            Importar
                            </button>
                        </section>
                    </section>

                    <section>
                        <img src="https://cdn.shopify.com/shopifycloud/web/assets/v1/vite/client/all/assets/empty-state-personalized-Bu4xlcHV0rQu.svg" alt="" />
                    </section>
                </section>

                <section className="w-100 d-flex align-items-center justify-content-center">
                    <section className="d-flex flex-column" style={{width:"82%"}}>
                        <h6>Buscar productos para vender</h6>
                        <p>Con dropshipping o print on demand, los productos se envían directamente desde el distribuidor a tu cliente y solo pagas por lo que vendes.</p>
                        <button className="w-50">Explorar apps de abastecimiento de productos</button>
                    </section>
                </section>
            </section>
            {/* Aquí se renderizan las rutas hijas */}
            <Outlet />    

        </>
    )
}