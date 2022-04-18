import React from "react";
import {Routes, Route, NavLink, useNavigate, useParams} from "react-router-dom";

const RouterComponent: React.FC = () => {
    const navigate = useNavigate()

    const params = useParams()

    const handle = () => {
        navigate(`/user/${1}`)
    }

    console.log(params)
    
    return (
        <>
            <Routes>
                <Route path='/' element={<div>Home</div>}/>
                <Route path='/about' element={<div>About</div>}/>
                <Route path='/user/:id' element={<div>User</div>}/>
            </Routes>
            <NavLink to='/'>Link to '/'</NavLink>
            <br/>
            <br/>
            <NavLink to='/about'>Link to '/about'</NavLink>
            <br/>
            <br/>
            <button onClick={handle}>Click</button>
        </>
    )
}

export default RouterComponent