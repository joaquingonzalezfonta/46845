import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGears } from "@fortawesome/free-solid-svg-icons"
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons"
import { faHeadset } from "@fortawesome/free-solid-svg-icons"
import ProductGallery from "../../components/product-gallery/ProductGallery"




export default function Home() {
  return (
    <>

      <div
        id="carouselExampleInterval"
        className="carousel slide main-carousel"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={10000}>
            <img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/QZOZR2ONURFUXEU74I64HZEE7E.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src="https://media.gq.com.mx/photos/5d6ec5c43d0c810008e7008c/4:3/w_2248,h_1686,c_limit/bugatti.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://www.clarin.com/2024/05/03/BBRlsddsh_2000x1500__1.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="product-section">
        <h1 className="section-title"> Vehículos desportivos disponibles </h1>
        <span className="section-subtitle">
          {" "}
          (La innovación sin ejecución es alucinación){" "}
        </span>
        <span className="subtitle-pag-principal">
          {" "}
          (Presione el vehículo para mas Información){" "}
        </span>

        <ProductGallery />

      </section>
      <div className="service-features">
        <article className="feature">
          <FontAwesomeIcon className="feature-image" icon={faGears} />
          <div className="feature-description">Solución a problemas mecánicos</div>
        </article>
        <article className="feature">
          <FontAwesomeIcon className="feature-image" icon={faCalendarCheck} />
          <div className="feature-description">Garantía de 2 años</div>
        </article>
        <article className="feature">
          <FontAwesomeIcon className="feature-image" icon={faHeadset} />
          <div className="feature-description">
            Disponibles todos los días de 8 a 16 horas
          </div>
        </article>
      </div>
    </>

  )
}
