import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
    return(
        <div className='container d-grid gap-2 mt-3'>
          <Link className={props.style} >
            {props.name}
          </Link>
        </div>
    )
}

export default Button