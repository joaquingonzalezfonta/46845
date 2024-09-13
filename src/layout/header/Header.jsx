import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useOrder } from "../../context/OrderContext";
// import userImg from '../../assets/img/imgUser.png'

export default function Header() {

    const { setToggleModal } = useOrder()

    return (
        <header className="header-principal">
            <input type="checkbox" id="responsive-menu" className="input-burger" />
            <label className="burger-menu" htmlFor="responsive-menu">
                <div className="burger-line" />
            </label>
            <div className="main-header-left">
                <a className="main-logo" href="/">
                    <img
                        className="main-logo-img"
                        src="https://static.vecteezy.com/system/resources/thumbnails/027/385/442/small/car-stainless-logo-png.png"
                        alt="logoImg"
                    />
                </a>
                <nav className="nav-principal">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">
                                HOME
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/Register' className="nav-link">
                                REGISTER
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/Contact' className="nav-link">
                                CONTACT
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/Aboutus' className="nav-link">
                                ABOUT US
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/Adminproduct' className="nav-link">
                                ADMIN PRODUCT
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="user-info">
                <span className="user-name">Joaquin</span>
                <FontAwesomeIcon className="cart-icon" data-count="0" icon={faCartShopping} onClick={() => setToggleModal(estado => !estado)}/>
            </div>
        </header>
    )
}
