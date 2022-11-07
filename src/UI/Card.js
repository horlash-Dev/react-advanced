import { Fragment } from "react";

const Card = (props) => {
const classes = props.className
return (
    <Fragment>
    <div className="d-flex justify-content-center">
        <div className="col-md-auto">
        <div className={`card rounded-5 shadow-lg p-4 ${classes}`}>{props.children}</div>
        </div>
    </div>
    </Fragment>
)
}

export default Card     