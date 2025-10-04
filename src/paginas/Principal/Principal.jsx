import { Link } from "react-router-dom";

export default function Principal() {
  return (
    <>
      <section className="d-flex bg-black w-100 justify-content-around align-items-center">
        <section className="w-50 d-flex align-items-center">
          <figure style={{backgroundColor: "black"}}>
            <img
              className="w-50"
              src="https://cdn.shopify.com/b/shopify-brochure2-assets/d9340911ca8c679b148dd4a205ad2ffa.svg"
              alt="" 
            />
          </figure>
          <section className="w-50 d-flex justify-content-around">
            <a href="" className="text-white"  >Soluciones🔽</a>
            <a href="" className="text-white"  >Precios</a>
            <a href="" className="text-white"  >Recursos🔽</a>
          </section>
        </section>

        <section className="w-25 d-flex justify-content-around">
          <button className="btn btn-link text-white "><Link to={"/Home"} >Iniciar sección</Link> </button>
          <button className="btn btn-light rounded-4" ><Link to={"/Home"}>Comienza gratis</Link> </button>
        </section>
      </section>
    </>
  );
}
