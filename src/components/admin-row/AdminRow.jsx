import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './AdminRow.css'

export default function AdminRow({ producto, deleteProduct, handleEditProduct }) {
  return (
    <tr>
      <td className="car-image">
        <img src={producto.image} alt={producto.name} />
      </td>
      <td className="car-name">
        {producto.name}
      </td>
      <td className="car-description">
        {producto.description}
      </td>
      <td className="car-price">
        {producto.price}
      </td>
      <td className="car-category">
        {producto.category}
      </td>
      <td className="car.createdAt">
        {producto.createdAt}
      </td>
      <td className="car-link">
        <button onClick={ () => handleEditProduct(producto) }> <FontAwesomeIcon icon={faPen} /> </button>
        <button onClick={ () => deleteProduct(producto.id) }> <FontAwesomeIcon icon={faTrash} /> </button>
      </td>
    </tr>
  )
}

