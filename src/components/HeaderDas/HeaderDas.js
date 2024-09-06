import React from 'react'
import {Link} from "react-router-dom"
export default function HeaderDas() {
  return (
    <header>
         <nav class="navbar navbar-expand-lg bg-dark navbar-dark ">
  <div class="container">
    <Link to="/" class="navbar-brand" >Frontend</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/dashboard/home" class="nav-link " >Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/dashboard/about" class="nav-link" >About us</Link>
        </li>
        <li class="nav-item">
          <Link to="/dashboard/contect" class="nav-link" >contect</Link>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
    </header>
  )
}
