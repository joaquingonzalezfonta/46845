import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './AdminRow.css'
import { formatDate } from "../../../utils/formatDate"

const URL = import.meta.env.VITE_LOCAL_SERVER

export default function AdminRow({ producto, deleteProduct, handleEditProduct }) {
  return (
    <tr>
      <td className="car-image">
        <img src={`${URL}/images/products/${producto.image}`} alt={producto.name} />
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
      <td className="car-date">
        {formatDate(producto.createdAt)}
      </td>
      <td className="car-link">
        <button onClick={ () => handleEditProduct(producto) }> <FontAwesomeIcon icon={faPen} /> </button>
        <button onClick={ () => deleteProduct(producto._id) }> <FontAwesomeIcon icon={faTrash} /> </button>
      </td>
    </tr>
  )
}

