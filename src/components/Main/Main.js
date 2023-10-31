import { Fragment, useState, useEffect } from "react";
import "./Main.css";
import axios from "axios";

function Main(screenSize) {
    // holds user devices creen size
    const currentSize = screenSize.size;
    const [data, setData] = useState();

    useEffect(() => {
        axios.get('http://45.33.89.127/hi')
        .then(resp => {
            if(resp) {
                setData(resp.data); 
            }
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <Fragment>
            <div className='Main'>
                <div className='content'>
                    Under construction - check back soon :)
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    hi, thanks for using your {currentSize}
                    <br />
                    here is data: {JSON.stringify(data)}
                </div>
            </div>
        </Fragment>
        
    );
}

export default Main;