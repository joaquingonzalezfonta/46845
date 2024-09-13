
import { useOrder } from '../../context/OrderContext';
import './ProductCard.css';
import { Link, NavLink } from "react-router-dom"

export default function ProductCard({ prod }) {

  const { addProduct } = useOrder();
  
  return (
    
    <article className="product-card">
                <div className="card-header">
                    <NavLink to={`/product-detail/${prod.id}`}
                        className="enlace-vista-rapida">
                  <div className="product-image">
                        <img
                          src={prod.image}
                          alt={prod.name}
                        />
                      </div>
                    </NavLink>

                </div>
                <div className="card-body">
                    <div className="product-info">
                        <div className="product-category"> {prod.category} </div>
                        <div className="product-category"> {prod.createdAt} </div>
                    </div>
                    <div className="product-name">
                        <Link to={`/product-detail/${prod.id}`}> {prod.name} </Link>
                    </div>
                    <div className="product-price">
                        <div className="product-normal-price"> ${prod.price} </div>
                        <button onClick={() => addProduct(prod)}>añadir</button>
                    </div>
                </div>
            </article>
      
  )
}
