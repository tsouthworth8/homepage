import { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Header.css";

function Header() {
    return (
        <Fragment>
            <div className='Header'>
                <div className='title'>
                    Trevor Southworth
                </div>
                <div className='links'>
                    <FontAwesomeIcon icon="otter" />
                </div>
            </div>
        </Fragment>
        
    );
}

export default Header;