import UserRow from '../user-row/UserRow'


export default function UserTable({ users, deleteUser, handleEditUser} ) {
    return (
        <table className="car-table">

            <thead>
                <tr>
                    <th>
                        Imagen
                    </th>
                    <th>
                        Nombre
                    </th>
                    <th>
                        Correo electronico
                    </th>
                    <th>
                        Contraseña
                    </th>
                    <th>
                        Telefono
                    </th>
                    <th>
                        Fecha de cumpleaños
                    </th>
                    <th>
                        Presupuesto
                    </th>
                    <th>
                        Comentario
                    </th>
                    <th>
                        provincia
                    </th>
                    <th>
                        Acciones
                    </th>
                </tr>
            </thead>

            <tbody>
                {
                    users.map(user => {
                        return <UserRow key={user.id} user={user} deleteUser={deleteUser} handleEditUser={handleEditUser} />
                    })
                }
            </tbody>



        </table>

    )


}
