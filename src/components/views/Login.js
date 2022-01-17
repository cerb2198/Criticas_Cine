import react from "react";
import { Link } from 'react-router-dom';

const Login = () => {
    const enviar = (e) => {
        e.preventDefault();
    }


    return(
        <div className='container-fluid p-5'>
                <div className='row'>

                    <div className='col-6'>
                        <section className='card'>
                            <section className="card-header text-center">
                                <h1 className='display-5'>Inicie Sesión</h1>
                            </section>
                            <section className='card-body'>
                                <form>
                                    <label className='form-label' htmlFor='correo'>Ingrese su correo:</label>
                                    <input id='correo' className='form-control m-1' type='text' placeholder='ejemplo@gmail.com'></input>
                                    <label className='form-label' htmlFor='contra'>Ingrese su contraseña:</label>
                                    <input id='contra' className='form-control m-1' type='password' placeholder='*******'></input>

                                    <div className='m-3'>
                                        <p className='text-primary'>
                                            ¿No tienes cuenta? <Link to='/singin'>Registrate aquí.</Link>
                                        </p>
                                    </div>

                                    <div className="btn-group mt-3">
                                        <button className='btn btn-success' type='submit' onClick={enviar}>Enviar</button>
                                        <button className='btn btn-secondary' type='reset'>Limpiar</button>
                                    </div>

                                </form>
                            </section>
                        </section>
                    </div>

                    <div className='col-6'>
                        <section className="container">
                            <img className='img-fluid rounded' src='https://i.pinimg.com/564x/27/1a/1b/271a1b0f19e425fc7b2bf5233ddacc93.jpg'></img>
                        </section>
                    </div>

                </div>
                

            </div>
    )
}

export default Login;