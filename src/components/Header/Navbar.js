import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <header>
       <nav class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container">
    <Link to="/" class="navbar-brand" >Logo</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/" class="nav-link " >Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/about" class="nav-link" >About us</Link>
        </li>
        <li class="nav-item">
          <Link to="/contect" class="nav-link" >Contect us</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hooks
          </Link>
          <ul class="dropdown-menu">
            <li><Link to="/hooks/state" class="dropdown-item" >UseState</Link></li>
            <li><Link to="/hooks/effect" class="dropdown-item" >UseEffect</Link></li>
            <li><Link to="/hooks/ref" class="dropdown-item" >UseRef</Link></li>
            <li><Link to="/hooks/memo" class="dropdown-item" >UseMemo</Link></li>
            <li><Link to="/hooks/context" class="dropdown-item" >UseContext</Link></li>
            <li><Link to="/hooks/reducer" class="dropdown-item" >UseReducer</Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Auth
          </Link>
          <ul class="dropdown-menu">
            <li><Link to="/auth/login" class="dropdown-item" >Login</Link></li>
            <li><Link to="/auth/register" class="dropdown-item" >Register</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link to="/auth/forgetpassword" class="dropdown-item" >Forget Password</Link></li>
          </ul>
        </li>
       
      </ul>
      <form class="d-flex ms-auto" >
        <Link to="/dashboard/home" class="btn btn-dark" >Dashboard</Link>
      </form>
     
    </div>
  </div>
</nav>
    </header>
  )
}
