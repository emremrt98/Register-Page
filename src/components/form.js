import { BiUserCircle } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export default function Form() {
    return (
        <div className="container">
            <BiUserCircle className="icon" />
            <h1>Sign In</h1>
            <form className="form">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="E-mail" required />
                <input type="Number" placeholder="Phone Number" required /><AiFillEyeInvisible className="eye-icon" />
                <input type="Password" placeholder="Password" required /><AiFillEyeInvisible className="eye-icon" />
                <input type="Password" placeholder="Password Control" required />
                <button>Sign In</button>
            </form>
        </div>
    )
}