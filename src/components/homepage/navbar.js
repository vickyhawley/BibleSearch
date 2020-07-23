import React from 'react';
import './navbar.scss';
import Button from '../button';

const navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__btns">
                <div className="navbar__btns-home">
                    <Button id="btn-home">BibleSearch</Button>
                </div>
                <div className="navbar__btns-main">
                    <Button id="btn-db">Database</Button>
                    <Button id="btn-why">About</Button>
                </div>
            </div>

        </div>
    )
}

export default navbar;