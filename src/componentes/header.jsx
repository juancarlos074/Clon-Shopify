export default function Header() {
  return (
    <div className="encabezado bg-black d-flex w-100 justify-content-between align-items-center p-2">
      
      {/* Logo */}
      <figure className="d-flex align-items-center m-0">
        <img
          src="https://cdn.shopify.com/shopifycloud/web/assets/v1/vite/client/es/assets/shopify-glyph-white-DZNyE9BvHIk-.svg"
          alt=""
          className="me-2"
        />
        <img
          src="https://cdn.shopify.com/shopifycloud/web/assets/v1/vite/client/es/assets/shopify-wordmark-monochrome-CpVsfBAAmxEP.svg"
          alt=""
        />
      </figure>

      {/* Barra de búsqueda */}
      <section className="w-50">
        <form role="search">
          <div className="input-group">
            <input
              type="search"
              className="busqueda bg-dark text-light form-control border-start-0"
              placeholder="🔍 Buscar"
              aria-label="Search"
            />
            <span className="input-group-text bg-dark text-light border-start-0 d-flex align-items-center">
              <button className="btn btn-outline-light btn-sm rounded-pill me-1 border-0.5">
                Ctrl
              </button>
              <button className="btn btn-outline-light btn-sm rounded-pill border-1">
                K
              </button>
            </span>
          </div>
        </form>
      </section>

      {/* Botones de la derecha */}
      <section className="padreBotones d-flex align-items-center justify-content-around" style={{width:"20vw"}}>
        <button className="border border-black bg-black rounded-3 boton1">
          <img
            className="imagen1"
            src="https://images.icon-icons.com/626/PNG/512/sunglasses-black-emoticon-face_icon-icons.com_57425.png"
            alt=""
          />
        </button>
        <button className="border border-black bg-black rounded-3 boton1">
          <img
            className="imagen1"
            src="https://images.icon-icons.com/3283/PNG/512/christmas_bell_bells_icon_208143.png"
            alt=""
          />
        </button>
        <button className="border border-black bg-black rounded-3 boton2 d-flex align-items-center justify-content-around px-2">
          <p className="text-light bg-info px-2 rounded-3 m-0">Mt</p>
          <p className="text-light m-0">Mi tienda</p>
        </button>
      </section>
    </div>
  );
}
