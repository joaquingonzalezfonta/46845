import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './OrderItem.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useOrder } from '../../context/OrderContext'

export default function OrderItem({ item, }) {

    const { removeItem, changeItemQuantity } = useOrder()

    return (
        <li className="order-item">
            <div className="item-image">
                <img src={item.image} alt="" />
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
                        min="1" onChange={(evt) => changeItemQuantity(item.id, evt.target.valueAsNumber)} />
            </div>

            <div className="item-actions">
                <button onClick={() => removeItem(item.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </li>
    )
}
