export const Input = ({name, onChange, type, label, placeholder, error, message}) => {
    return (
        <div>
            <label htmlFor={name} className='text-xl'>{label}</label>
            <input 
                type={type} 
                name={name} 
                id={name}
                onChange={onChange} 
                className={`p-2 block w-full text-gray-900 text-lg ${error ? 'border border-red-500' : ''}`}
                placeholder={placeholder}
            />
            <span 
                className={`text-red-500 text-sm p-1 ${error ? 'block' : 'hidden'}`}
                > * {message}
                </span>
        </div>
    )
}
