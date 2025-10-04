export default function Home() {
  return (
    <section className="bg-body container d-flex flex-column align-items-center justify-content-center text-center" style={{width:"70%"}}>
      <section>
        <section className="d-flex" >
          <h5 className="p-2 w-100">¡Te damos la bienvenida a Shopify!</h5>
          <p>¿Tienes preguntas? 01 -800-5190739</p>
        </section>

        <section>
          <a href="">Agregar nombre de la tienda 🖋️</a>

          <section className="d-flex" >
            <section className="w-50">
              <figure>
                <video src=""></video>
              </figure>
              <section >
                <section>
                  <h6>Agrega tu primer producto</h6>
                  <p>Empieza por agregar un producto y algunos datos clave. ¿No quieres comenzar aún?</p>
                  <a href="">Empieza con un poducto de muestra</a>
                </section>
                <section>
                  <button className="btn bg-secondary-subtle">Agregar producto</button>
                  <button>Importar</button>
                </section>
              </section>
            </section>

            <section className="w-50">
              <figure >
                <img  className="w-50" src="https://cdn.shopify.com/shopifycloud/web/assets/v1/vite/client/es/assets/store-preview-design-store-task-placeholder-window-DXgkFfrHD_Lh.png" alt=""/>
              </figure>
              <section >
                <h6>Personalizar tu tienda online</h6>
                <p>Agrega un logo, colores e imágenes para dar vida a tu marca.</p>
              </section>
              <section>
                  <button>Personalizar tema</button>
              </section>
            </section>
          </section>

          <section className="d-flex justify-content-between" >
            <section className="w-25 h-25">
              <h6>Agrega formas de pago</h6>
              <figure className="d-flex justify-content-around">
                <img style={{width:"13%",height:"20%"}} src="https://images.icon-icons.com/729/PNG/512/paypal_icon-icons.com_62739.png" alt="" />
                <img style={{width:"13%",height:"20%"}} src="https://images.icon-icons.com/674/PNG/512/Visa_icon-icons.com_60549.png" alt="" />
                <img style={{width:"13%",height:"20%"}} src="https://images.icon-icons.com/2163/PNG/512/master_card_icon_133071.png" alt="" />
                <p>y más</p>
              </figure>
              <button >Activar</button>
            </section>
            
            <section className="w-25 h-25" >
              <h6>Revisa las tarifas de envío</h6>
                <section className="d-flex justify-content-evenly">
                  <section className="d-flex w-50">
                    <img src="https://images.icon-icons.com/1694/PNG/512/cocolombiaflag_111878.png" alt="" className="w-25 h-50"  />
                    <p>Nacional</p>
                  </section>
                  <section>
                    <p>y más</p>
                  </section>
                </section>
              <button>Revisar</button>
            </section>

            <section className="w-25 h-25" >
              <h6>Personaliza tu dominio</h6>
              <section>
                <a href="99aezi-k3.myshopify.com">99aezi-k3.myshopify.com</a>
                <button>🍯</button>
              </section>
              <button>Personalizar</button>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}
