import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
// import './AdminRow.css'

export default function UserRow( users, deleteUser, handleEditUser) {
  return (
    <tr>
      <td className="car-image">
        <img src={users.image} alt={users.name} />
      </td>
      <td className="car-name">
        {users.name}
      </td>
      <td className="car-description">
        {users.mail}
      </td>
      <td className="car-price">
        {users.password}
      </td>
      <td className="car-category">
        {users.number}
      </td>
      <td className="car.createdAt">
        {users.birthdate}
      </td>
      <td className="car.createdAt">
        {users.province}
      </td>
      <td className="car.createdAt">
        {users.budget}
      </td>
      <td className="car.createdAt">
        {users.comentary}
      </td>
      <td className="car-link">
        <button onClick={ () => handleEditUser(users) }> <FontAwesomeIcon icon={faPen} /> </button>
        <button onClick={ () => deleteUser(users.id) }> <FontAwesomeIcon icon={faTrash} /> </button>
      </td>
    </tr>
  )
}
