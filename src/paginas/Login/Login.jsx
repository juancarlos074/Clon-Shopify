import React from "react";
import "./Login.css";
import { UserAuth } from "../../supabase/AutenContextProvider";

export default function Login() {

  const {signInWithGoogle} = UserAuth();

  return (
    <div className="login-wrapper">
      {/* Fondo animado */}
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster="https://cdn.shopify.com/static/images/identity/merchant-moving-bg.webp"
      >
        <source
          src="https://cdn.shopify.com/static/images/identity/merchant-moving-bg.mp4"
          type="video/mp4"
        />
      </video>

      {/* Carta centrada */}
      <div className="login-card p-5 text-center">
        <br />
        <h1 className="fw-bold mb-3" style={{fontSize:"1.8vw"}} >Comienza tu prueba gratis</h1>
        <br /><br />
        <p className="text-muted mb-4">
          Disfruta de <strong>3 días gratis</strong> y, después,{" "}
          <strong>3 meses por 1 $/mes</strong>
        </p>

        {/* Input principal */}
        <div className="input-group mb-3" style={{ maxWidth: "400px", margin: "auto" }}>
          <input
            type="email"
            className="form-control"
            placeholder="Correo electrónico"
          />
          <button className="btn btn-dark">Comenzar</button>
        </div>

        {/* Botones alternativos */}
        <div className="d-flex flex-column gap-2 mt-4" style={{ maxWidth: "400px", margin: "auto" }}>
          <button className="btn btn-outline-dark d-flex align-items-center justify-content-center gap-2" onClick={signInWithGoogle} >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
              alt="Google"
              width="20"
              height="20"
            />
            Continuar con Google
          </button>

          <button className="btn btn-outline-dark d-flex align-items-center justify-content-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/731/731985.png"
              alt="Apple"
              width="20"
              height="20"
            />
            Continuar con Apple
          </button>

          <button className="btn btn-outline-primary d-flex align-items-center justify-content-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
              alt="Facebook"
              width="20"
              height="20"
            />
            Continuar con Facebook
          </button>
        </div>

        <p className="text-muted mt-3">
          o <a href="#">¿Ya tienes una cuenta de Shopify?</a>
        </p>

        <small className="text-muted mt-3 px-3 d-block">
          Al continuar, aceptas los{" "}
          <a href="#">Términos y Condiciones</a> y la{" "}
          <a href="#">Política de privacidad</a>.
        </small>

        <footer className="footer mt-5">
          <div className="d-flex justify-content-center gap-3">
            <a href="#">Ayuda</a>
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
