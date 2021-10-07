import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="container vh-100">
      <div className="text-center mt-5">
        <h2>Gracias por tu compra :D</h2>
        <p className="my-5">Tu pedido llegara en 3 dias a tu dirección ✅</p>
        <Link to="/">
          <button className="btn btn-dark" type="button" > Regresar a la tienda </button>
        </Link>
      </div>
    </div>
  )
}

export default Success
