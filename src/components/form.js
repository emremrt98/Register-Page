import { BiUserCircle } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useState } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import toast, { Toaster } from 'react-hot-toast';
export default function Form() {

    const [eyeState, setEyeState] = useState(true);
    const [eyeState2, setEyeState2] = useState(true);
    const [value, setValue] = useState()

    const control = () => { toast('Kayıt Başarılı', { style: { background: "green", color: "white" } }); }

    return (
        <div className="container">
            <BiUserCircle className="icon" />
            <h1>Sign In</h1>
            <form onSubmit={(e) => { e.preventDefault(); control(); }} className="form">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="E-mail" required />

                <PhoneInput style={{ color: "white" }} value={value} onChange={setValue} placeholder="Phone Number" required />
                <input type={eyeState ? "Password" : "text"} placeholder="Password" required />
                {eyeState ?
                    <AiFillEyeInvisible onClick={() => setEyeState(!eyeState)} className="eye-icon eye1" />
                    :
                    <AiFillEye onClick={() => setEyeState(!eyeState)} className="eye-icon eye1" />
                }
                <input type={eyeState2 ? "Password" : "text"} placeholder="Password Control" required />
                {eyeState2 ?
                    <AiFillEyeInvisible onClick={() => setEyeState2(!eyeState2)} className="eye-icon eye2" />
                    :
                    <AiFillEye onClick={() => setEyeState2(!eyeState2)} className="eye-icon eye2" />
                }
                <button type="submit">Sign In</button>
                <Toaster duration={5000} />
            </form>
        </div>
    )
}