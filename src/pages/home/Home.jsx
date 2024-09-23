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
          <div className="carousel-item active" data-bs-interval={3000}>
            <img src="https://cdn.whichcar.com.au/assets/w_4096/1d031226/aston-martin-db12-volante-1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval={3000}>
            <img src="https://motor.elpais.com/wp-content/uploads/2022/08/Audi-R8_Coupe-2019-1600-01.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval={3000}>
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
        <h1 className="section-title"> IMPORCAR </h1>
        <span className="section-subtitle">
          {" "}
          vehículos deprtivos disponibles{" "}
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
