import { Fragment} from "react";

const Navbar = (props) => {
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
    props.logOUt(false)
}
const auth = props.isAuth
    return(
    <Fragment>

   <ul className="nav nav-pills nav-stacked">
    <li className="nav-item">
        <a href="#a" className="nav-link active" onClick={home}>home</a>
    </li>
    { auth &&
    (<li className="nav-item">
        <a href="#a" className="nav-link" onClick={userProfile}>dashboard</a>
    </li>)
     }
     { !auth ?
       
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