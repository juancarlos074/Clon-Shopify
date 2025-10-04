import "./Pedidos.css"

export default function Pedidos() {
    return (
        <>
            <section >
                <section className="d-flex justify-content-between"> 
                    <h3>📂Pedidos</h3>
                    <button>Mas acciones</button>
                </section>

                <section>
                    <img src="https://cdn.shopify.com/shopifycloud/web/assets/v1/vite/client/all/assets/empty-state-orders-qdh7TMTzhOGm.svg" alt="" />
                    <h5>Tus pedidos aparecerán aquí</h5>
                    <p>Para obtener pedidos y aceptar pagos de clientes, debes seleccionar un plan. Solo se te cobrará el plan cuando finalice tu prueba gratis.</p>
                    <button>Seleccionar plan</button>
                </section>

                <section>
                    <button>Mas información sobre pedidos</button>
                </section>
            </section>
        </>
    )
}