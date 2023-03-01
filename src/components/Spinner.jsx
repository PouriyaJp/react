import SpinnerGIF from  "../assets/Spinner.gif";
import {Fragment} from "react";

const Spinner = () => {
    return (
        <Fragment>
            <img src={SpinnerGIF} className="d-block m-auto" style={{ width: "200px" }} alt=""/>
        </Fragment>
    )
}

export default Spinner;