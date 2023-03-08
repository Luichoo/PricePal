import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faUserEdit, faShippingFast, faBackspace, faFileAlt } from '@fortawesome/free-solid-svg-icons'
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


function Footer() {
  return (
    <footer className="bg-dark text-center text-lg-start text-white">
      <div className="container p-4">
        <div className="row mt-4">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">PricePaw</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white"><FontAwesomeIcon icon={faBook} className="fa-fw me-2" />Registrate</a>
              </li>
              <li>
                <a href="#!" className="text-white"><FontAwesomeIcon icon={faUserEdit} className="fa-fw me-2" />Iniciar sesión</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase"></h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-white"><FontAwesomeIcon icon={faShippingFast} className="fa-fw me-2" />Inicio</a>
              </li>
              <li>
                <a href="#!" className="text-white"><FontAwesomeIcon icon={faBackspace} className="fa-fw me-2" />Quienes somos</a>
              </li>
              <li>
                <a href="#!" className="text-white"><FontAwesomeIcon icon={faFileAlt} className="fa-fw me-2" />Uso</a>
              </li>
              <li>
                <a href="#!" className="text-white"><FontAwesomeIcon icon={faFileAlt} className="fa-fw me-2" />Trabaja con nosotros</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        Derechos de autor © 2023. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
