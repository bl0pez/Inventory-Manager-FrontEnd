import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks';
import { Input } from '../components';


const initialState = {
    name: '',
    email: '',
    password: '',
    password2: ''
}

const emailValid = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

const formValidation = {
  name: [(value) => value.length >= 3, 'Nombre debe tener al menos 3 caracteres'],
  email: [(value) => value.match(emailValid), 'Email no valido'],
  password: [(value) => value.length >= 6, 'Contraseña debe tener al menos 6 caracteres'],
};


export const Register = () => {
  
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const { name, email , password, onInputChange, isFormValid, nameValid, emailValid, passwordValid } = useForm(initialState, formValidation);
  
  const onSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
  
    if (!isFormValid) return;

    console.log('Formulario enviado');
  
  }

  return (
    <div className='border-indigo-600 p-2 mt-11 md:w-1/2 mx-auto text-white'>
    <form 
      onSubmit={onSubmit} 
      className='flex flex-col mx-auto space-y-4'>

      <h1 className='text-3xl text-center'><i className="fa-solid fa-square-plus text-indigo-600"></i> Registrar</h1>
      <Input
        name='name'
        type='text'
        label='Nombre'
        value={name}
        onChange={onInputChange}
        error={nameValid && isFormSubmitted}
        message={nameValid}
        placeholder='Ingrese su nombre'
        />

      <Input 
        name='email'
        type='email'
        label='Email'
        value={email}
        onChange={onInputChange}
        error={emailValid && isFormSubmitted}
        message={emailValid}
        placeholder='Ingrese su email'
      />

      <Input 
        name='password'
        type='password'
        label='Password'
        value={password}
        onChange={onInputChange}
        placeholder='Ingrese su password'
        error={passwordValid && isFormSubmitted}
        message={passwordValid}
      />

      <input
        type="submit" value="Crear cuenta" className=' bg-indigo-600 p-2 relative cursor-pointer hover:bg-indigo-700 transition-colors duration-300 rounded-sm' />
      <div>
        <p className='text-center'>Olvidaste tu contraseña?
          <Link to="#" className='text-indigo-600'> Recuperar cuenta</Link></p>
      </div>
    </form>
  </div>
  )
}
