import React from 'react'
import logo from '../images/logo.png'


export default function NavBar({ transparent, backgroundColor }) {
    return (
        <div style={{
            background: transparent ? "transparent" : backgroundColor,
            textAlign: "center",
            width: "100%",
            position: "fixed",
            top: 0,
            overflow: "hidden",
            zIndex: 9999
        }}>
            <img alt="Hogwarts" src={logo} style={{ width: "100px", marginTop: "20px", marginBottom: "20px" }} />
        </div>
    )
}