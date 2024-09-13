import './Aboutus.css'

export default function Aboutus() {
    return (
        <>
            <h1 className="section-title"> Nosotros </h1>
            <span className="section-subtitle-aboutus">
                {" "}
                Informacion sobre ImporCar y su creador{" "}
            </span>
            <div className="contenedor-aboutus">
                <div className="contenedor-izquierdo">
                    <div className="contenedor-imagen-perfil">
                        <img
                            src="/assets/images/img-perfil.jpeg"
                            alt="perfil"
                            className="image-perfil"
                        />
                    </div>
                    <div className="contenedor-titulo-parrafo">
                        <h2>ImporCar</h2>
                        <p>
                            {" "}
                            Este negocio es uno de los pocos en Argentina que importa autos de
                            todas partes del mundo incluyendo Japon, China, Korea del sur,
                            Dinamarca, Inglaterra, Alemania, Italia, entre otros.{" "}
                        </p>
                    </div>
                    <div className="contenedor-imagen-perfil">
                        <img
                            src="/assets/images/img-canapino.jpeg"
                            alt="perfil"
                            className="image-perfil"
                        />
                        <img
                            src="/assets/images/img-stc2000.jpeg"
                            alt="perfil"
                            className="image-perfil"
                        />
                        <img
                            src="/assets/images/img-tc2000.jpeg"
                            alt="perfil"
                            className="image-perfil"
                        />
                    </div>
                    <div className="contenedor-titulo-parrafo">
                        <h2>Creador</h2>
                        <p>
                            {" "}
                            Mi nombre es Joaquin Gonzalez, nacido en Buenos Aires, Argentina y
                            vivi gran parte de mi via en Concordia, Entre Rios. Tengo 19 años,
                            tengo dos cursos hechos los cuales son Diseño UX/UI, Desarrollo Web y
                            actualmente formandome como Full Stack Engineer en Educación IT. Este
                            E-commerce surgió a través de mi pasión por los autos ya que desde
                            pequeño me llamaron mucho la atencion su diseño exterior como
                            interior.{" "}
                        </p>
                    </div>
                </div>
                <div className="video-aboutus-auto">
                    <video
                        src="/assets/videos/video-ferrari.MOV"
                        controls=""
                        autoPlay=""
                        muted=""
                        loop=""
                    ></video>
                </div>
            </div>
        </>

    )
}
