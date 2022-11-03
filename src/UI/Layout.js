import React, { Fragment} from "react";

const Main = (props) => {

    return(
        <Fragment>
        <div className="container bg-dark text-white rounded-3 py-4 px-4">{props.children}</div>
        </Fragment>
    )
}

export default Main