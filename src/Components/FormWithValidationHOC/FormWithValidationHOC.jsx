import { useState } from "react"

const withFormValidation = (WrappedComponent) => {
    const WithFormValidation = (props) => {
        const [errors, setErrors] = useState({})

        const validateForm = () => {
            const newErrors = {}
            if(!props.formdata.nombre) {
                newErrors.nombre = 'El nombre es requerido'
            }
            if(!props.formdata.email) {
                newErrors.email = 'El email es requerido'
        }

        setErrors(newErrors)
    }

    return(
        <WrappedComponent
        {... props}
        errors={errors}
        validateForm={validateForm}
        />
    )
}
    return WithFormValidation
}

const Form = ({ formdata, errors, validateForm, onChange}) => {
    const handleSubmit = (event) => {
        event.preventDefault()
        validateForm && validateForm()
    }

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label>Nombre:</label>
            <input type="text" name="nombre" value={formdata.nombre} onChange={(e) => onChange(e)} />
            {errors && errors.nombre && <div>{errors.nombre}</div>}
        </div>
        <div>
            <label>Email:</label>
            <input type="email" name="email" value={formdata.email} onChange={(e) => onChange(e)} />
            {errors && errors.email && <div>{errors.email}</div>}
        </div>
        <button type="submit">Enviar</button>
        </form>
    )
}

const FormWithValidation = withFormValidation(Form)

const FormWithValidationHOC = () => {
    const [formdata, setFormData] = useState({
        nombre: '',
        email: ''
    })

    const handleChange = (event) => {
        setFormData({
            ...formdata,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div>
            <FormWithValidation formdata={formdata} onChange={handleChange} />
            <form formdata={formdata} onChange={handleChange}/>
        </div>
    )
}

export default FormWithValidationHOC