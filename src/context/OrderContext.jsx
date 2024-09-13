import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';


const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext)

export default function OrderProvider({ children }) {
    const [ count, setCount ] = useState(0)
    const [ order, setOrder ] = useState([]);
    const [ toggleModal, setToggleModal  ] = useState(false)

    function addProduct(product) {
        console.log("Add product", product.name)

        const productExists = order.find(prod => prod.id === product.id)

        if (productExists) {
            productExists.quantity++;
            // const updateOrder = order.map(prod => {
                
            //     if(prod.id === product.id) {
            //         prod.quantity++;
            //     }

            //     return prod;
            // })

            setOrder([...order])


        } else {
            product.quantity = 1;
            setOrder([...order, product ])
        }
        
        
    }

    return (
        <OrderContext.Provider value={{ order, addProduct, toggleModal, setToggleModal }}>
            { children }
        </OrderContext.Provider>
    )
}