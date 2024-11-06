
import { useOrder } from '../../context/OrderContext';
import { Link, NavLink } from "react-router-dom"

// const URL = import.meta.env.VITE_LOCAL_SERVER

export default function ProductCard({ prod, category }) {

  const { addProduct } = useOrder();
  
  return (
    
    <article className="product-card">
                <div className="card-header">
                    <NavLink to={`/product-detail/${prod._id}`}
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
                        <div className="product-category"> {category} </div>
                        <div className="product-category"> {category} </div>
                    </div>
                    <div className="product-name">
                        <Link to={`/product-detail/${prod._id}`}> {prod.name} </Link>
                    </div>
                    <div className="product-price">
                        <div className="product-normal-price"> ${prod.price} </div>
                        <button onClick={() => addProduct(prod)}>añadir</button>
                    </div>
                </div>
            </article>
      
  )
}
