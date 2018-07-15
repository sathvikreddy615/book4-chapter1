import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default props => {
    return (
        <div className="card" style={{width: `18rem`}}>
            <div className="card-body">
                <h5 className="card-title">
                    {props.location.name}
                </h5>
                <p className="card-text">{props.location.zipcode}</p>
                {
                <Link className="card-link"
                    to={{
                        pathname: `/employees/${props.location.id}`,
                        state: { location: props.location }
                    }}>
                    Details
                </Link>
                }
            </div>
        </div>
    )
}

// exports to locationList.js
