import { useParams } from 'react-router-dom'
import './ProductDetail.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useOrder } from '../../context/OrderContext';

const URL = import.meta.env.VITE_SERVER_URL;


export default function ProductDetail() {
    const { addProduct } = useOrder();


    const [product, setProduct] = useState()

    const { id } = useParams()

    useEffect(() => {
        getProduct();
    }, [])

    async function getProduct() {
        try {

            const response = await axios.get(`${URL}/products/${id}`)
            
            setProduct(response.data)

        } catch (error) {

            alert("Error al obtener el producto")
            console.log(error)

        }
    }

    if(!product) {
        return <Spinner></Spinner>
    }

    return (
        <main className="main-details-container">
            <section className="product-section">
                <h1 className="section-title"> Ferrari </h1>
                <span className="section-subtitle">
                    {" "}
                    Si puedes imaginarlo, puedes hacerlo{" "}
                </span>
                <div className="contenedor-info-ferrariSf90">
                    <div className="car-image">
                        <img src={product?.image} alt={product?.name} />
                    </div>
                    <div className='car-details'>
                        <div className="informacion-ferrarisf90">
                            <h2 className="section-title"> {product?.name} </h2>
                            <p>
                                {product?.description}
                            </p>
                        </div>
                        <div className="product-price-details">
                            Precio ${product?.price}
                        </div>
                        <div className="input-group">
                            <button onClick={ () => addProduct(product)} type="submit"> Agregar al carrito </button>
                        </div>
                        <div className="input-group">
                            <button type="submit" className="btn-pantalla-principal">
                                {" "}
                                Pantalla Principal{" "}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>


    )
}

