import React from 'react'
import { useHistory } from "react-router-dom";

const DashBoard = (props) => {
    const history = useHistory()
    const onLogout = () => {
        localStorage.removeItem('loginToken')
        history.push("/")
    }
    return (
        <div>
            <h1>DashBoard</h1>
            <button onClick={onLogout} className="btn btn-primary mr-1">Logout</button>
        </div>
    )

}

export default DashBoard