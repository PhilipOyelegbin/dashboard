export const FormInput = ({label, type, name, value, classname, onchange, placeholder}) => {
  return (
    <div className="form-control w-full">
      <label htmlFor={name}>{label}</label>
      <input className={`${classname}`} type={type} name={name} value={value} onChange={onchange} placeholder={placeholder}/>
    </div>
  )
}

export const FormSelect = ({label, name, value, onchange, children}) => {
  return (
    <div className="form-control w-full">
      <label htmlFor={name}>{label}</label>
      <select name={name} value={value} onChange={onchange}>
        {children}
      </select>
    </div>
  )
}
