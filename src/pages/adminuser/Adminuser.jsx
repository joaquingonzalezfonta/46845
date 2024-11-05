import { useEffect, useState } from "react"
import UserTable from "../../components/user-table/UserTable"
import { useForm } from "react-hook-form"
import axios from "axios";
import Swal from "sweetalert2";
import '../../services/interceptor/interceptor';
import useApi from "../../services/interceptor/interceptor";


const URL = import.meta.env.VITE_LOCAL_SERVER;

export default function Adminuser() {

  const api = useApi()
  const [users, setUsers] = useState([]);
  const { register, setValue, reset, handleSubmit, formState: { errors } } = useForm()
  const [selectedUser, setSelectedUser] = useState(null);
  const {setTotalItems} = useState([])


  useEffect(() => { getUsers(); }, [])

  useEffect(() => {
    if (selectedUser) {
      setValue("name", selectedUser.name)
      setValue("mail", selectedUser.mail)
      setValue("password", selectedUser.password)
      setValue("number", selectedUser.number)
      setValue("birthdate", selectedUser.birthdate)
      setValue("porvince", selectedUser.province)
      setValue("comentary", selectedUser.comentary)
      setValue("image", selectedUser.image)
      setValue("budget", selectedUser.budget)
    } else {
      reset()
    }

  }, [selectedUser, setValue, reset])


  async function getUsers() {
    try {
      const response = await api.get(`$/users`)

      const { users, total } = response.data;

      setUsers(users)
      setTotalItems(total)
      
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }


  function deleteUser(id) {

    Swal.fire({
      title: "Borrar usuario",
      text: "Realmente desea borrar",
      icon: "warning",
      reverseButtons: true,
      showCancelButton: true,
    }).then(async (result) => {
      try {
        if (result.isConfirmed) {

          const response = await axios.delete(`${URL}/users/${id}`);

          console.log(response.data)

          getUsers()
        }
      } catch (error) {
        console.log(error)

        Swal.fire({
          title: "Error al borrar",
          text: "El usuario no fue borrado",
          icon: "error"
        })
      }
    })
  }


  async function onUsersSubmit(user) {
    console.log(user)

    try {
      if (selectedUser) {

        const { _id } = selectedUser;

        const response = await axios.put(`${URL}/users/${_id}`, user)
        console.log(response.data)

        Swal.fire({
          title: "Actualización correcta",
          text: "El usuario fue actualizado con éxito",
          icon: "success",
          timer: "1500"
        })

        setSelectedUser(null)

      } else {

        const response = await axios.post(`${URL}/users`, user)
        console.log(response.data)

      }

      getUsers();

    } catch (error) {
      console.log(error)
    }
  }



  function handleEditUser(user) {
    console.log("User a editar", user)
    setSelectedUser(user);
  }


  return (
    <section className="form-section">
      <h1 className="section-title"> Registro </h1>
      <div className="section-subtitle">Registrate para una mejor experiencia</div>
      <div className="admin-container">
        <div className="form-container-center">
          <div className="form-subcontainer">
            <h2 className="form-title"> ADMIN USER </h2>
            <form onSubmit={handleSubmit(onUsersSubmit)}>
              <div className="input-group">
                <label className="input-label" htmlFor="name">
                  Nombre completo
                </label>
                <input type="text" id="name"
                  {...register("name", { autoFocus: true, autoComplete: true, autoCapitalize: true, required: true, minLength: 5, maxLength: 40 })}
                />

                {errors.name?.type === "required" && <div className="input-error"> El campo es requerido </div>}
                {errors.name?.type === "minLength" && <div className="input-error"> El minimo de caracteres es 3 </div>}
                {errors.name?.type === "maxLength" && <div className="input-error"> El maximo de caracteres es 40 </div>}

              </div>
              <div className="input-group">
                <label className="input-label" htmlFor="mail">
                  Correo electronico
                </label>
                <input type="text" id="mail"
                  {...register("mail", { autoComplete: true, autoCapitalize: true, required: true, minLength: 10, maxLength: 30, pattern: "[A-Za-z0-9._+-']+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$" })}
                />

                {errors.mail?.type === "required" && <div className="input-error"> El campo es requerido </div>}
                {errors.mail?.type === "minLength" && <div className="input-error"> El minimo de caracteres es 10 </div>}
                {errors.mail?.type === "maxLength" && <div className="input-error"> El maximo de caracteres es 30 </div>}

              </div>
              <div className="input-group">
                <label className="input-label" htmlFor="password">
                  Contraseña
                </label>
                <input type="password" id="password"
                  {...register("password", { autoComplete: true, autoCapitalize: true, required: true, minLength: 8, maxLength: 25, })}
                />

                {errors.password?.type === "required" && <div className="input-error"> El campo es requerido </div>}
                {errors.password?.type === "minLength" && <div className="input-error"> El minimo de caracteres es 8 </div>}
                {errors.password?.type === "maxLength" && <div className="input-error"> El maximo de caracteres es 25 </div>}

              </div>
              <div className="input-group">
                <label className="input-label" htmlFor="number">
                  Numero de teléfono
                </label>
                <input type="number" id="number"
                  {...register("number", { autoComplete: true, required: true, minLength: 6, maxLength: 20, })}
                />

                {errors.number?.type === "required" && <div className="input-error"> El campo es requerido </div>}
                {errors.number?.type === "minLength" && <div className="input-error"> El minimo de caracteres es 6 </div>}
                {errors.number?.type === "maxLength" && <div className="input-error"> El maximo de caracteres es 20 </div>}

              </div>
              <div className="input-group">
                <label className="input-label" htmlFor="birthdate">
                  Fecha de cumpleaños
                </label>
                <input type="date" id="birthdate"
                  {...register("birthdate", { required: true, minLength: 8, })}
                />

                {errors.birthdate?.type === "required" && <div className="input-error"> El campo es requerido </div>}

              </div>
              <div className="input-group">
                <label className="input-label" htmlFor="province">
                  Seleccione su provincia
                </label>
                <select name="province" id="province"
                  {...register("province", { autoComplete: true, required: true, minLength: 1, })}
                >
                  <option value="" />
                  <option value="Buenos Aires">Buenos Aires</option>
                  <option value="Entre Rios">Entre Rios</option>
                  <option value="Misiones">Misiones</option>
                  <option value="Corrientes">Corrientes</option>
                  <option value="Formosa">Formosa</option>
                  <option value="Salta">Salta</option>
                  <option value="Jujuy">Jujuy</option>
                  <option value="Santiago del Estero">Santiago del Estero</option>
                  <option value="San Juan">San Juan</option>
                  <option value="Catamarca">Catamarca</option>
                  <option value="La Pampa">La Pampa</option>
                  <option value="La Rioja">La Rioja</option>
                  <option value="Mendoza">Mendoza</option>
                  <option value="Neuquen">Neuquen</option>
                  <option value="San Luis">San Luis</option>
                  <option value="Cordoba">Cordoba</option>
                  <option value="Santa fe">Santa Fe</option>
                </select>

                {errors.province?.type === "required" && <div className="input-error"> El campo es requerido </div>}

              </div>
              <div className="input-group">
                <label className="input-label" htmlFor="budget">
                  Presupuesto
                </label>
                <div>
                  <input type="radio" name="gbudget" value={-30000} {...register("budget")} /> -$30.000
                </div>
                <div>
                  <input type="radio" name="gbudget" value={-100000} {...register("budget")} /> -$100.000
                </div>
                <div>
                  <input type="radio" name="gbudget" value={-500000} {...register("budget")} /> -$500.000
                </div>
                <div>
                  <input type="radio" name="gebudget" value={-1000000} {...register("budget")} /> -$1.000.000
                </div>
                <div>
                  <input type="radio" name="gbudget" value={-3000000} {...register("budget")} /> -$3.000.000
                </div>
                <div>
                  <input type="radio" name="budget" value={-10000000} {...register("budget")} /> -$10.000.000
                </div>
              </div>
              <div className="input-group">
                <label className="input-label" htmlFor="obs">
                  Comentario
                </label>
                <textarea type="text" id="comentary"
                  {...register("comentary", { maxLength: 300, })}

                />

                {errors.comentary?.type === "maxLength" && <div className="input-error"> El maximo de caracteres es 300 </div>}
              </div>

              <div className="input-group">
                <label className="input-label" htmlFor="image"> Imagen </label>
                <input type="url" {...register("image", { required: true })} />

                {errors.image?.type === "required" && <div className="input-error">El campo es requerido</div>}
              </div>

              <div className="input-group">
                <button className={`${selectedUser && 'btn-success'}`} type='submit' >
                  {
                    selectedUser ? "Editar" : "Crear"
                  }
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="contenedor-tabla">
          <UserTable
            users={users} deleteUser={deleteUser} handleEditUser={handleEditUser} />

        </div>

      </div>
    </section>
  )
}

