import {  NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <h1 className="logo">LOGO</h1>
            <nav>
                <h1><NavLink to='/' style={({ isActive }) =>({textDecoration: isActive ? 'underline' : 'none'})}>Products</NavLink ></h1>
                <h1><NavLink to='/about' style={({ isActive }) =>({textDecoration: isActive ? 'underline' : 'none'})}>About Us</NavLink ></h1>
            </nav>
        </header>
    )
}