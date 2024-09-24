import { useOrder } from '../../context/OrderContext';
import OrderItem from '../oder-item/OrderItem';
import './OrderDialog.css'

export default function OrderDialog()  {


    const { order, toggleModal, setToggleModal, total } = useOrder()

    
    if(!toggleModal) return;

    

    return (
    <div className='modal-overlay' onClick={() => setToggleModal(!toggleModal)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation() }>

            <div className="modal-header"> Carrito de compras </div>

            <div className="modal-body">
                <ul className="order-list">
                    {
                        order.map(item => (
                            <OrderItem key={item.id} item={item} />
                        ))
                    }
                    <div className='order-total'>
                        TOTAL <strong> ${total} </strong>
                    </div>
                </ul>
            </div>

            <div className="modal-footer">
                <button className='btn-order' onClick={() => setToggleModal(!toggleModal)}>Cerrar</button>
                <button className="btn-order"> Finalizar compra </button>
            </div>

        </div>
    </div>
  )
}
