import { useState } from 'react';
import './Password.css'
import { Visibility, VisibilityOff } from "@material-ui/icons";


export default function Password({ value }) {

    const [show, setShow] = useState(false)

    return (
        <div className='passwordWrapper'>
            <input className="password"
                placeholder="Password"
                type={show ? "text" : "password"}
                required
                minLength="6"
                ref={value}
            />
            <div className="visibility" onClick={() => { setShow(!show) }}>
                {show ? <VisibilityOff /> : <Visibility />}
            </div>
        </div>
    )
}