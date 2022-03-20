import { useField } from "formik"

const Radio = ({label, ...props}) =>{
    const [field] = useField(props)
    return(
        <div>
            <label>
                <input type='radio' {...field} {...props}/>
                {label}
            </label>
        </div>
    )
}

export default Radio