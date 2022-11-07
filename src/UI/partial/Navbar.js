import { Fragment, useContext } from "react";
import authContext from "../../context/AuthContext";
import NavItem from "./NavItem";
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

   <ul className="nav nav-pills nav-stacked justify-content-center m-4 text-capitalize">
    <NavItem id={'1'} navActive={props.navActive} name={`home`} onClick={home} />
    { ctx.isAuthenticated &&
    (<NavItem id={'2'} navActive={props.navActive} name={`dashboard`} onClick={userProfile} />)
     }
     { !ctx.isAuthenticated ?
       
    ( <NavItem id={'3'} navActive={props.navActive} name={`login`} onClick={login} />) :
   (<NavItem id={'4'} name={'logout'}  navActive={props.navActive} onClick={logout} /> )
     }
</ul>
        </Fragment>
    )
}

export default Navbar