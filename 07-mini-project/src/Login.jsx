import Layout from "./Layout"
import { useContext } from "react"
import { Context } from "./UserContext"
import { useState } from 'react'

const Login = () => {
    // You have to pass data to signup() function to successful login.
    const { login } = useContext(Context)
    // example of login with button onClick event listerner.
    // <button onClick={() => signup({
    //     username: 'mock',
    //     password: 'mock',
    // })}>Text</button>
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    return (
        <Layout>

            <div>
                <h4>Username</h4>
                <input onChange={(event) => setUsername(event.target.value)} type="text" name="username" />
            </div>

            <div>
                <h4>Password</h4>
                <input onChange={(event) => setPassword(event.target.value)}type="text" name="password" />
            </div>
            
            {/* already have button */}
            <div>
                <button onClick={() => login({ username: 'admin', password: 'admin' })}>Login</button>
            </div>
        </Layout>
    )
}

export default Login