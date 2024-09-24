import './Aboutus.css'
import ImgCamaro from '../../assets/img/img-camaro.jpeg'
import ImgCanapino from '../../assets/img/img-canapino.jpeg'
import ImgPerfil from '../../assets/img/img-perfil.jpeg'
import ImgStc2000 from '../../assets/img/img-stc2000.jpeg'
import VideoFerrari from '../../assets/videos/video-ferrari.MOV'

export default function Aboutus() {
    return (
        <>
            <h1 className="section-title"> Nosotros </h1>
            <span className="section-subtitle-aboutus">
                Informacion sobre ImporCar y su creador
            </span>
            <div className="contenedor-aboutus">
                <div className="contenedor-izquierdo">
                    <div className="contenedor-imagen-perfil">
                        <img
                            src={ImgPerfil}
                            alt="perfil"
                            className="image-perfil"
                        />
                    </div>
                    <div className="contenedor-titulo-parrafo">
                        <h2>ImporCar</h2>
                        <p>
                            Este negocio es uno de los pocos en Argentina que importa autos de
                            todas partes del mundo incluyendo Japon, China, Korea del sur,
                            Dinamarca, Inglaterra, Alemania, Italia, entre otros.
                        </p>
                    </div>
                    <div className="contenedor-imagen-perfil">
                        <img
                            src={ImgCanapino}
                            alt="perfil"
                            className="image-perfil"
                        />
                        <img
                            src={ImgCamaro}
                            alt="perfil"
                            className="image-perfil"
                        />
                        <img
                            src={ImgStc2000}
                            alt="perfil"
                            className="image-perfil"
                        />
                    </div>
                    <div className="contenedor-titulo-parrafo">
                        <h2>Creador</h2>
                        <p>
                            Mi nombre es Joaquin Gonzalez, nacido en Buenos Aires, Argentina y
                            vivi gran parte de mi via en Concordia, Entre Rios. Tengo 19 años,
                            tengo dos cursos hechos los cuales son Diseño UX/UI, Desarrollo Web y
                            actualmente formandome como Full Stack Engineer en Educación IT. Este
                            E-commerce surgió a través de mi pasión por los autos ya que desde
                            pequeño me llamaron mucho la atencion su diseño exterior como
                            interior.
                        </p>
                    </div>
                </div>
                <div className="video-aboutus-auto">
                    <video
                        src={VideoFerrari}
                        controls= {true}
                        autoPlay= {true}
                        muted= {true}
                        loop= {true}
                    ></video>
                </div>
            </div>
        </>

    )
}
