import { Fragment, useContext } from "react";
import authContext from "../../context/AuthContext";
const Navbar = (props) => {
const ctx = useContext(authContext)

    const home = (event) => {
    event.preventDefault();
    props.homeView(false)
}

const login = (event) => {
    event.preventDefault();
    props.loginView(true)
}

const userProfile = (event) => {
    event.preventDefault();
    props.profileView(true)
}

const logout = (event) => {
    event.preventDefault();
    ctx.logOut(false)
}
    return(
    <Fragment>

   <ul className="nav nav-pills nav-stacked">
    <li className="nav-item">
        <a href="#a" className="nav-link active" onClick={home}>home</a>
    </li>
    { ctx.isAuthenticated &&
    (<li className="nav-item">
        <a href="#a" className="nav-link" onClick={userProfile}>dashboard</a>
    </li>)
     }
     { !ctx.isAuthenticated ?
       
    (<li className="nav-item">
        <a href="#a" className="nav-link" onClick={login}>login</a>
    </li>) :
   (<li className="nav-item">
        <a href="#a" className="nav-link" onClick={logout}>logout</a>
    </li> )
     }
</ul>
        </Fragment>
    )
}

export default Navbar