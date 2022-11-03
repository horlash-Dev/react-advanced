import { Fragment} from "react";

const Navbar = () => {

    return(
    <Fragment>

   <ul className="nav nav-pills nav-stacked">
    <li className="nav-item">
        <a href="#a" className="nav-link active">home</a>
    </li>
    <li className="nav-item">
        <a href="#a" className="nav-link">dashboard</a>
    </li>
    <li className="nav-item">
        <a href="#a" className="nav-link">login</a>
    </li>
    <li className="nav-item">
        <a href="#a" className="nav-link">logout</a>
    </li>
</ul>
        </Fragment>
    )
}

export default Navbar