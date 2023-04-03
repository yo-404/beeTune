import React from 'react'
import { loginEndpoint } from '../../spotify.js'
import './login.css'

export default function Login() {
  return (
    <div classname="login-page">
      <img src = "https://static.vecteezy.com/system/resources/previews/001/200/758/original/music-note-png.png" alt="logo-beetune" className="logo"/>
      <a href={loginEndpoint}>
        <div className="login-btn"> Login</div></a> 
    </div>
  )
}
