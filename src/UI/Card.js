import { Fragment } from "react";

const Card = (props) => {
const classes = props.className
return (
    <Fragment>
    <div className="row mb-5 mt-5">
        <div className="col-md-8 col-sm-12 offset-md-2">
        <div className={`card rounded-5 shadow p-4 ${classes}`}>{props.children}</div>
        </div>
    </div>
    </Fragment>
)
}

export default Card