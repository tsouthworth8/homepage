import { Fragment } from "react";
import "./Main.css";

function Main(size) {
    const currentSize = size.size;
    return (
        <Fragment>
            <div className='Main'>
                <div className='content'>
                    Under construction - check back soon :)
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    hi, thanks for using your {currentSize}
                </div>
            </div>
        </Fragment>
        
    );
}

export default Main;