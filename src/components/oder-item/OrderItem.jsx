import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './OrderItem.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useOrder } from '../../context/OrderContext'

const URL = import.meta.env.VITE_LOCAL_SERVER

export default function OrderItem({ item, }) {

    const { removeItem, changeItemQuantity } = useOrder()

    return (
        <li className="order-item">
            <div className="item-image">
                <img src={`${URL}/images/products/${item.image}`} alt="" />
            </div>

            <div className="item-info">
                {item.name}
            </div>
            <div className="item-price">
                $ {item.price}
            </div>
            <div className="item-subtotal">
                $ {item.price * item.quantity}
            </div>

            <div className="item-count">
                <input className='item-input-dialog' type='number' 
                        defaultValue={item.quantity} 
                        min="1" onChange={(evt) => changeItemQuantity(item._id, evt.target.valueAsNumber)} />
            </div>

            <div className="item-actions">
                <button onClick={() => removeItem(item._id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </li>
    )
}
