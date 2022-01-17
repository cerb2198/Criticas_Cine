import {Fragment} from "react";

const Inicio = () => {
    return(
        <Fragment>
            <section className='container-fluid'>
                <div className='row text-center'>
                    <h1>Cineando...</h1>
                    <p>
                        Bienvenido a cineando, puedes explorar todas las opiniones que se han realizado
                        a diferentes peliculas realizadas por nuestros criticos, esperamos brindarte un
                        punto de vista objetivo.
                    </p>
                </div>
            </section>
            <section className='container-fluid'>
                <form>
                    <div className='input-group'>
                        <input className='form-control mb-5 mx-5' type='search' placeholder='Ejemplo: Frozen 2'></input>
                        <div>
                            <button className='btn btn-primary'>Buscar</button>
                        </div>
                    </div>
                </form>
            </section>
            <section className='container-fluid'>
                <div className='row'>
                <div className='col-4'>
                    <div className='card'>
                        <div className='card-header text-center'>
                            <p className='fs-4 fw-bold'>LOGAN</p>
                        </div>
                        <div className='card-body'>
                            <section className='container'>
                                <img className='img-fluid rounded' src='https://es.web.img2.acsta.net/pictures/17/01/30/11/31/059557.jpg'></img>
                            </section>
                        </div>
                        <div className='card-footer'>
                            <p>Año: 2017</p>
                            <p>Genero: Ciencia Ficción</p>
                            <button className='btn btn-primary'>Ver reseña...</button>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='card'>
                        <div className='card-header'>
                            Soy el titulo
                        </div>
                        <div className='card-body'>
                            Soy el titulo
                        </div>
                        <div className='card-footer'>
                            Soy el footer
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='card'>
                        <div className='card-header'>
                            Soy el titulo
                        </div>
                        <div className='card-body'>
                            Soy el titulo
                        </div>
                        <div className='card-footer'>
                            Soy el footer
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Inicio;