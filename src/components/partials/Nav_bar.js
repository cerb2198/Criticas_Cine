import react from "react";
import { Link } from 'react-router-dom';

const Nav_bar = () => {
    return(
        <react.Fragment>
            <nav className='navbar navbar-expand-md bg-primary navbar-dark'>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>    
                <div className='container-fluid'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/'>Inicio</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/login'>Inicio Sesion</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/singin'>Registro</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/about'>Nosotros</Link>
                        </li>
                    </ul>
                </div>
                </div>

            </nav>
        </react.Fragment>
    )
}

export default Nav_bar;