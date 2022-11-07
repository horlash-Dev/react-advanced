import React, { Fragment} from "react";

const Main = (props) => {

    return(
        <Fragment>
        <div className="container mt-5 bg-dark text-white rounded-5 py-4 px-4">
        {props.children}
       </div>
        </Fragment>
    )
}

export default Main