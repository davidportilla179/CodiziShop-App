import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="row bg-dark text-white py-4">
        <section className="col-md-4 text-center">
          <img src="https://shop.codiziapp.com/wp-content/uploads/2021/07/logocodizi_v2.png" className="img-fluid mb-3" alt="marca personal" width="150"/>
          <p>Con <span className="text-danger">❤</span> desde México</p>
        </section>
        <section className="col-md-4">
          <h3>Más de CODIZI Shop</h3>
          <p><Link to="/contact">Contacto</Link></p>
          <p><Link to="/measurements">Medidas de tallas</Link></p>
          <p><Link to="/termsandconditions">Términos y Condiciones</Link></p>
          <p><Link to="/changes">Devoluciones o cambios</Link></p>
          <p><Link to="/privacity">Política de privacidad</Link></p>
          <p><Link to="/faq">Preguntas frecuentes</Link></p>
        </section>
        <section className="col-md-4">
          <h3>Conoce CODIZI</h3>
          <p><a href="https://codiziapp.com/aboutus">Acerca de nosotros</a></p>
          <p><Link to="/measurements">Medidas de tallas</Link></p>
          <p><Link to="/termsandconditions">Términos y Condiciones</Link></p>
          <p><Link to="/changes">Devoluciones o cambios</Link></p>
          <p><Link to="/privacity">Política de privacidad</Link></p>
          <p><Link to="/faq">Preguntas frecuentes</Link></p>
        </section>
    </footer>
  );
};

export default Footer;
