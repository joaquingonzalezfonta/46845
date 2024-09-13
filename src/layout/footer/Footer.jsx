export default function Footer() {
  return (
    <footer className="main-footer">
      <section className="service-features">
        <article className="footer-articles">
          <div className="feature-description">
            <a href="#" className="link-icons">
              {" "}
              <i className="fa-solid fa-phone" /> 3456-471626{" "}
            </a>
            <a href="#" className="link-icons">
              {" "}
              <i className="fa-solid fa-location-dot" /> San Lorenzo 336 Este
            </a>
            <a href="#" className="link-icons">
              {" "}
              <i className="fa-solid fa-envelope" />
              imporcar@concordia.com.ar
            </a>
          </div>
        </article>
        <article className="footer-articles">
          <div className="feature-description">
            <a className="main-logo footer-logo" href="/">
              <img
                className="main-logo-img"
                src="https://static.vecteezy.com/system/resources/thumbnails/027/385/442/small/car-stainless-logo-png.png"
                alt="logoImg"
              />
            </a>
          </div>
        </article>
        <article className="footer-articles">
          <div className="feature-description">
            <a href="#" className="link-icons">
              {" "}
              <i className="fa-brands fa-square-x-twitter" /> Twitter{" "}
            </a>
            <a href="#" className="link-icons">
              {" "}
              <i className="fa-brands fa-square-facebook" /> Facebook{" "}
            </a>
            <a href="#" className="link-icons">
              {" "}
              <i className="fa-brands fa-instagram" /> Instagram{" "}
            </a>
          </div>
        </article>
      </section>
    </footer>

  )
}
