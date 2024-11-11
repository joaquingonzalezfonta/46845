import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

const URL = import.meta.env.VITE_LOCAL_SERVER

export default function UserRow({ user, deleteUser, handleEditUser}) {
  return (
    <tr>
      <td className="car-image">
        <img src={`${URL}/images/users/${user.image}`} alt={user.name} />
      </td>
      <td className="car-name">
        {user.name}
      </td>
      <td className="car-price">
        {user.email}
      </td>
      <td className="car-price">
        {user.password}
      </td>
      <td className="car-price">
        {user.number}
      </td>
      <td className="car-birthdate">
        {user.birthdate}
      </td>
      <td className="car-price">
        {user.budget}
      </td>
      <td className="car-price">
        {user.comentary}
      </td>
      <td className="car-price">
        {user.province}
      </td>
      <td className="car-link">
        <button onClick={ () => handleEditUser(user) }> <FontAwesomeIcon icon={faPen} /> </button>
        <button onClick={ () => deleteUser(user._id) }> <FontAwesomeIcon icon={faTrash} /> </button>
      </td>
    </tr>
  )
}
