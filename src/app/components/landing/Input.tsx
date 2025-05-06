const Input = ({name, type, handleChange}: {name: string, type: string, handleChange?: () => void}) => {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-semibold text-sm">{name}</label>
            <input onChange={handleChange} type={type} placeholder={name} name={name} className="input " />
        </div>
    )
}

export default Input