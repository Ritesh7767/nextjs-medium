'use client'

import { register } from "../../actions/user.actions"
import Cross from "./Cross"
import Input from "./Input"

const Signup = ({handleEmail}: {handleEmail: () => void}) => {

  return (
    <div className="get-container border flex flex-col justify-center items-center">
        <h2 className="auth-title" >Sign up with Email</h2>
        <form action={register} >
            <div className="flex flex-wrap items-center justify-center gap-4 px-5 mt-14">
                <Input type="text" name="firstname" />
                <Input type="text" name="lastname" />
                <Input type="text" name="username" />
                <Input type="email" name="email" />
                <Input type="password" name="password" />
            </div>
            <div className="flex justify-center items-center mt-14">
                <input type="submit" value={"Continue"} className="btn" />
            </div>
        </form>
        <Cross handleClick={handleEmail}/>
    </div>
  )
}

export default Signup