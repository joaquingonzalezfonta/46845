import { useEffect, useState } from 'react';
import ProductCard from '../product-card/ProductCard';
import axios from 'axios';

const URL = import.meta.env.VITE_SERVER_URL;


export default function ProductGallery() {

    const [ products, setProducts ] = useState([]);

    useEffect(() => { getProducts() }, [])

    async function getProducts() {
        try {
            
            const response = await axios.get(`${URL}/products`)

            setProducts(response.data)

        } catch (error) {
            alert("Error al obtener productos")
            console.log(error)
        }

    }


    return (
        <div className="product-card-container">
            {
                products.map(producto => (<ProductCard key={producto.id} prod={producto} />))
            }
        </div>
    )
}
