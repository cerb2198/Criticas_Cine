import {Fragment} from "react";

const Inicio = () => {
    return(
        <Fragment>
            <section className='container-fluid'>
                <div className='row text-center text-white'>
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
                        <div className='card text-white bg-primary mb-3'>
                            <div className='d-flex justify-content-center'>
                                <img className='card-img-top w-75' src='https://es.web.img2.acsta.net/pictures/17/01/30/11/31/059557.jpg'></img>
                            </div>
                            <div className='card-body'>
                                <h5 className='card-title text-center'>LOGAN</h5>
                                <p className='card-subtitle text-muted mb-2'>Año: 2017</p>
                                <p className='card-subtitle text-muted mb-2'>Genero: Ciencia Ficción</p>
                                <p>Sinopsis:</p>
                                <p className='card-text'>Han pasado los años y los mutantes están en declive. Logan, débil y cansado, vive alejado de todos hasta que acepta una última misión de Charles Xavier: la de proteger a una joven especial, de nombre Laura Kinney pero conocida como X-23, la última esperanza de la raza mutante.</p>
                            </div>
                            <div className='card-footer'>
                                <button className='btn btn-success'>Ver reseña...</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='card text-white bg-primary mb-3'>
                            <div className='d-flex justify-content-center'>
                                <img className='card-img-top w-75' src='https://es.web.img2.acsta.net/pictures/17/01/30/11/31/059557.jpg'></img>
                            </div>
                            <div className='card-body'>
                                <h5 className='card-title text-center'>LOGAN</h5>
                                <p className='card-subtitle text-muted mb-2'>Año: 2017</p>
                                <p className='card-subtitle text-muted mb-2'>Genero: Ciencia Ficción</p>
                                <p>Sinopsis:</p>
                                <p className='card-text'>Han pasado los años y los mutantes están en declive. Logan, débil y cansado, vive alejado de todos hasta que acepta una última misión de Charles Xavier: la de proteger a una joven especial, de nombre Laura Kinney pero conocida como X-23, la última esperanza de la raza mutante.</p>
                            </div>
                            <div className='card-footer'>
                                <button className='btn btn-success'>Ver reseña...</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='card text-white bg-primary mb-3'>
                            <div className='d-flex justify-content-center'>
                                <img className='card-img-top w-75' src='https://es.web.img2.acsta.net/pictures/17/01/30/11/31/059557.jpg'></img>
                            </div>
                            <div className='card-body'>
                                <h5 className='card-title text-center'>LOGAN</h5>
                                <p className='card-subtitle text-muted mb-2'>Año: 2017</p>
                                <p className='card-subtitle text-muted mb-2'>Genero: Ciencia Ficción</p>
                                <p>Sinopsis:</p>
                                <p className='card-text'>Han pasado los años y los mutantes están en declive. Logan, débil y cansado, vive alejado de todos hasta que acepta una última misión de Charles Xavier: la de proteger a una joven especial, de nombre Laura Kinney pero conocida como X-23, la última esperanza de la raza mutante.</p>
                            </div>
                            <div className='card-footer'>
                                <button className='btn btn-success'>Ver reseña...</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='card text-white bg-primary mb-3'>
                            <div className='d-flex justify-content-center'>
                                <img className='card-img-top w-75' src='https://es.web.img2.acsta.net/pictures/17/01/30/11/31/059557.jpg'></img>
                            </div>
                            <div className='card-body'>
                                <h5 className='card-title text-center'>LOGAN</h5>
                                <p className='card-subtitle text-muted mb-2'>Año: 2017</p>
                                <p className='card-subtitle text-muted mb-2'>Genero: Ciencia Ficción</p>
                                <p>Sinopsis:</p>
                                <p className='card-text'>Han pasado los años y los mutantes están en declive. Logan, débil y cansado, vive alejado de todos hasta que acepta una última misión de Charles Xavier: la de proteger a una joven especial, de nombre Laura Kinney pero conocida como X-23, la última esperanza de la raza mutante.</p>
                            </div>
                            <div className='card-footer'>
                                <button className='btn btn-success'>Ver reseña...</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Inicio;