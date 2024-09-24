import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
// import './AdminRow.css'

export default function UserRow({ user, deleteUser, handleEditUser}) {
  return (
    <tr>
      <td className="car-image">
        <img src={user.image} alt={user.name} />
      </td>
      <td className="car-name">
        {user.name}
      </td>
      <td className="car-description">
        {user.mail}
      </td>
      <td className="car-price">
        {user.password}
      </td>
      <td className="car-category">
        {user.number}
      </td>
      <td className="car.createdAt">
        {user.birthdate}
      </td>
      <td className="car.createdAt">
        {user.province}
      </td>
      <td className="car.createdAt">
        {user.budget}
      </td>
      <td className="car.createdAt">
        {user.comentary}
      </td>
      <td className="car-link">
        <button onClick={ () => handleEditUser(user) }> <FontAwesomeIcon icon={faPen} /> </button>
        <button onClick={ () => deleteUser(user.id) }> <FontAwesomeIcon icon={faTrash} /> </button>
      </td>
    </tr>
  )
}
