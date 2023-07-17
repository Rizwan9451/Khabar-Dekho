import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Navbar extends Component {
  render() {
    let {mode,toggle,changeCountry}=this.props;
    return (
      <div>
        <nav class={`navbar fixed-top navbar-expand-lg navbar-${mode} bg-${mode}`}>
  <div class="container-fluid">
    <Link class="navbar-brand ml-3" to="/">Khabar Dekho</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                    <Link className="nav-link active" to={"/general"}>Home </Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link active" to={"/business"} >Business </Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link active" to={"/sport"}>Sport </Link>
                </li>
                <li className="nav-item ml-3">
                    <Link className="nav-link active" to={"/entertainment"}>Entertainment</Link>
                </li>
                <li className="nav-item ml-3">
                    <Link className="nav-link active" to={"/health"}>Health</Link>
                </li>
                <li className="nav-item ml-3">
                    <Link className="nav-link active" to={"/science"}>Science</Link>
                </li>
                <li className="nav-item ml-3">
                    <Link className="nav-link active" to={"/technology"}>Technology</Link>
                </li>
                <li className="nav-item ml-3">
                    <Link className="nav-link active" to={"/Global"}>Global</Link>
                </li>
                <li class="nav-item dropdown">
          <a id="desh" class="nav-link dropdown-toggle" href="!#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Select Country
          </a>
          <ul class={`dropdown-menu dropdown-menu-${mode==="light"?"light":"dark"}`}>
            <li className="dropdown-item" ><Link onClick={()=>changeCountry('in')} className="nav-link " to={"/"}>India </Link></li>
            <li className="dropdown-item" ><Link onClick={()=>changeCountry('us')} className="nav-link " to={"/"}>USA </Link></li>
            <li className="dropdown-item"><Link onClick={()=>changeCountry('cn')} className="nav-link " to={"/"}>China</Link></li>
            <li className="dropdown-item"><Link onClick={()=>changeCountry('kr')} className="nav-link " to={"/"}>Korea </Link></li>
            <li className="dropdown-item"><Link onClick={()=>changeCountry('sa')} className="nav-link " to={"/"}>Saudi Arabia </Link></li>
            <li className="dropdown-item"><Link onClick={()=>changeCountry('ae')} className="nav-link " to={"/"}>UAE </Link></li>
            <li className="dropdown-item"><Link onClick={()=>changeCountry('it')} className="nav-link " to={"/"}>Itlay </Link></li>
            <li className="dropdown-item"><Link onClick={()=>changeCountry('ru')} className="nav-link " to={"/"}>Russia </Link></li>
            <li className="dropdown-item"><Link onClick={()=>changeCountry('ua')} className="nav-link " to={"/"}>Ukraine </Link></li>
          </ul>
        </li>
                </ul>
    <div className={`form-check form-switch text-${mode==="light"?"dark":"light"}`}>
        <input className="form-check-input" onClick={toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {mode==="dark"?"light":"dark"} mode</label>
    </div>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
