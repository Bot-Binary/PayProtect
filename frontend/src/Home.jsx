import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/parent/signup">Parent signup</Link>
                    </li>
                    <li>
                        <Link to="/otp">Otp</Link>
                    </li>
                    <li>
                        <Link to="/parent/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Home
