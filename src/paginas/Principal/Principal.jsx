import { ShoppingBag, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';
import { ChevronDown, PlayCircle } from 'lucide-react';
import { Link, Links, Navigate } from "react-router-dom";
import './Principal.css';
import { useEffect } from 'react';
import { UserAuth } from '../../supabase/AutenContextProvider';

export default function Principal() {

  const { Userid } = UserAuth();

  useEffect(() => {
  async function verificar() {
    
    console.log("Estoy aqui mismo bro ");
    console.log(Userid);

    if (Userid != null) {
      Navigate("/Home");
    }
  }
  verificar();
}, []);


  return (
    <>
      <section className="principal-page ">
          <main>
            <div className="hero-container">
            <video
              className="video-background"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="5542eb87-c72c-43b0-8f3c-f5a9a49a6fd7.mp4" type="video/mp4" />
            </video>

            <div className="video-overlay"></div>

            <nav className="navbar">
              <div className="navbar-left">
                <a href="/" className="logo">
                  <div className="logo-icon">S</div>
                  <span>shopify</span>
                </a>
                <ul className="nav-links">
                  <li>
                    <a href="#" className="nav-link">
                      Soluciones
                      <ChevronDown />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link">
                      Precios
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link">
                      Recursos
                      <ChevronDown />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="navbar-right">
                <button className="btn-login"> <Link to={"/Login"} >Iniciar sección</Link> </button>
                <button className="btn-signup"><Link to={"/Login"}>Comienza gratis</Link> </button>
              </div>
            </nav>

            <div className="hero-content">
              <div className="hero-main">
                <h1 className="hero-title">
                  Tu negocio puede ser la tienda
                </h1>
                <p className="hero-subtitle">
                  Sueña en grande, construye rápido y llega lejos con Shopify.
                </p>
                <div className="hero-buttons">
                  <button className="btn-primary">
                    Comienza gratis
                  </button>
                  <button className="btn-secondary">
                    Ver planes
                  </button>
                </div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-card-title">
                <PlayCircle />
                <span>Por qué creamos Shopify</span>
              </div>
            </div>
          </div>

            <div className="container ">
              <section className="commerce-section">
                <div className="content-wrapper">
                  <h1 className="main-title">
                    La plataforma de comercio detrás de todo
                  </h1>

                  <p className="description">
                    <span className="light-text">Vende online y en persona.</span>{' '}
                    <span className="bold-text">Vende a nivel local y mundial.</span>{' '}
                    <span className="light-text">
                      Vende de forma directa y mayorista. Vende a través de computadoras y dispositivos móviles.
                    </span>
                  </p>

                  <div className="mockups-grid">
                    <div className="mockup-card">
                      <img
                        src="https://cdn.shopify.com/b/shopify-brochure2-assets/e919a4c2c7484b87699b2e6f5d020690.webp?originalWidth=454&originalHeight=800"
                        alt="E-commerce website mockup 1"
                      />
                    </div>
                    <div className="mockup-card">
                      <img
                        src="https://cdn.shopify.com/b/shopify-brochure2-assets/268717f14ffc87467a9aeb1e6f5a7719.webp?originalWidth=1046&originalHeight=800&width=200%20200w,%20https://cdn.shopify.com/b/shopify-brochure2-assets/268717f14ffc87467a9aeb1e6f5a7719.webp?originalWidth=1046&originalHeight=800&width=400%20400w,%20https://cdn.shopify.com/b/shopify-brochure2-assets/268717f14ffc87467a9aeb1e6f5a7719.webp?originalWidth=1046&originalHeight=800&width=600%20600w,%20https://cdn.shopify.com/b/shopify-brochure2-assets/268717f14ffc87467a9aeb1e6f5a7719.webp?originalWidth=1046&originalHeight=800&width=800%20800w,%20https://cdn.shopify.com/b/shopify-brochure2-assets/268717f14ffc87467a9aeb1e6f5a7719.webp?originalWidth=1046&originalHeight=800&width=1000%201000w"
                        alt="E-commerce mobile mockup"
                      />
                    </div>
                    <div className="mockup-card">
                      <img
                        src="https://cdn.shopify.com/b/shopify-brochure2-assets/f11495397635517ec5ee47c2b360dd04.webp?originalWidth=1032&originalHeight=800&width=1000%201000w%22"
                        alt="E-commerce website mockup 3"
                      />
                    </div>
                  </div>
                </div>
              </section>

              <section className="businesses-section">
                <div className="content-wrapper">
                  <div className="businesses-header">
                    <h2 className="businesses-title">
                      Para todos, desde emprendedores hasta empresas
                    </h2>
                    <p className="businesses-stats">
                      Millones de comerciantes de todos los tamaños han generado colectivamente US$1.000.000.000.000 en ventas en Shopify.
                    </p>
                  </div>

                  <div className="businesses-grid">
                    <div className="business-card">
                      <div className="business-image">
                        <img
                          src="https://cdn.shopify.com/b/shopify-brochure2-assets/4ce35eba1e546a23ff875c3eba8b5705.jpg?originalWidth=914&originalHeight=600"
                          alt="Emprendedora"
                        />
                      </div>
                      <h3 className="business-card-title">Comienza con rapidez</h3>
                      <p className="business-card-description">
                        Megan Brie Carmo, vendedora en solitario, pudo en meses sumar Solace Tallow para vender sus velas y productos para el cuidado de la piel orgánicos tanto online como en mercados locales.
                      </p>
                    </div>

                    <div className="business-card">
                      <div className="business-image">
                        <img
                          src="https://cdn.shopify.com/b/shopify-brochure2-assets/2083b4178afc5db338c7d6081f8a5838.jpg?originalWidth=916&originalHeight=600"
                          alt="Equipo de empresa"
                        />
                      </div>
                      <h3 className="business-card-title">Crece todo lo que quieras</h3>
                      <p className="business-card-description">
                        La marca de atletismo Gymshark pasó de trabajar en un garaje a convertirse en la empresa mundial que es hoy, con más de 0,5.000 millones en ventas anuales.
                      </p>
                    </div>

                    <div className="business-card">
                      <div className="business-image">
                        <img
                          src="https://cdn.shopify.com/b/shopify-brochure2-assets/7c3d68ca99f2f743df8cb1187bbd2cb1.jpg?originalWidth=914&originalHeight=600"
                          alt="Tienda Mattel"
                        />
                      </div>
                      <h3 className="business-card-title">Aumenta las expectativas</h3>
                      <p className="business-card-description">
                        Con la ayuda de Shopify para empresas, Mattel vendió sus icónicos juguetes directamente a clientes en todo el mundo.
                      </p>
                    </div>
                  </div>

                  <div className="businesses-cta">
                    <button className="cta-button">
                      Elige un plan que se adapta a tus necesidades
                    </button>
                  </div>
                </div>
              </section>
            </div>

          </main>

          <footer className="footer">
            <div className="footer-container">
              <div className="footer-grid">
                <div className="footer-column">
                  <ShoppingBag className="footer-logo" />
                  <nav className="footer-nav">
                    <h3 className="footer-title">Shopify</h3>
                    <ul className="footer-list">
                      <li><a href="#" className="footer-link">Acerca de nosotros</a></li>
                      <li><a href="#" className="footer-link">Empleos</a></li>
                      <li><a href="#" className="footer-link">Inversores</a></li>
                      <li><a href="#" className="footer-link">Prensa y medios</a></li>
                      <li><a href="#" className="footer-link">Socios</a></li>
                      <li><a href="#" className="footer-link">Afiliados</a></li>
                      <li><a href="#" className="footer-link">Legal</a></li>
                      <li><a href="#" className="footer-link">Estado del servicio</a></li>
                    </ul>
                  </nav>
                </div>

                <div className="footer-column">
                  <nav className="footer-nav">
                    <h3 className="footer-title">Atención al cliente</h3>
                    <ul className="footer-list">
                      <li><a href="#" className="footer-link">Atención al cliente para comerciantes</a></li>
                      <li><a href="#" className="footer-link">Centro de ayuda de Shopify</a></li>
                      <li><a href="#" className="footer-link">Contrata a un socio</a></li>
                      <li><a href="#" className="footer-link">Shopify Academy</a></li>
                      <li><a href="#" className="footer-link">Comunidad de Shopify</a></li>
                    </ul>
                  </nav>
                </div>

                <div className="footer-column">
                  <nav className="footer-nav">
                    <h3 className="footer-title">Desarrolladores</h3>
                    <ul className="footer-list">
                      <li><a href="#" className="footer-link">Shopify.dev</a></li>
                      <li><a href="#" className="footer-link">Documentación de API</a></li>
                      <li><a href="#" className="footer-link">Dev Degree</a></li>
                    </ul>
                  </nav>
                </div>

                <div className="footer-column">
                  <nav className="footer-nav">
                    <h3 className="footer-title">Productos</h3>
                    <ul className="footer-list">
                      <li><a href="#" className="footer-link">Shop</a></li>
                      <li><a href="#" className="footer-link">Shopify Plus</a></li>
                      <li><a href="#" className="footer-link">Shopify para empresas</a></li>
                    </ul>
                  </nav>
                </div>

                <div className="footer-column">
                  <nav className="footer-nav">
                    <h3 className="footer-title">Soluciones</h3>
                    <ul className="footer-list">
                      <li><a href="#" className="footer-link">Creador de tiendas online</a></li>
                      <li><a href="#" className="footer-link">Creador de sitios web</a></li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="footer-bottom">
                <div className="footer-bottom-content">
                  <div className="footer-info">
                    <div className="footer-locale">
                      <span className="footer-text">🌐 Colombia</span>
                      <span className="footer-separator">|</span>
                      <button className="footer-language">Español ▾</button>
                    </div>
                    <a href="#" className="footer-text">Términos del servicio</a>
                    <a href="#" className="footer-text">Política de privacidad</a>
                    <a href="#" className="footer-text">Mapa del sitio</a>
                  </div>

                  <div className="footer-social">
                    <a href="#" className="footer-social-link" aria-label="Facebook">
                      <Facebook className="footer-icon" />
                    </a>
                    <a href="#" className="footer-social-link" aria-label="Twitter">
                      <Twitter className="footer-icon" />
                    </a>
                    <a href="#" className="footer-social-link" aria-label="YouTube">
                      <Youtube className="footer-icon" />
                    </a>
                    <a href="#" className="footer-social-link" aria-label="Instagram">
                      <Instagram className="footer-icon" />
                    </a>
                    <a href="#" className="footer-social-link" aria-label="LinkedIn">
                      <svg className="footer-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="#" className="footer-social-link" aria-label="TikTok">
                      <svg className="footer-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>
                    <a href="#" className="footer-social-link" aria-label="Pinterest">
                      <svg className="footer-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
      </section>
      
    </>
  );
}
