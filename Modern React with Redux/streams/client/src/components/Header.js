import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                [W O R L D] O F [S T R E A M E R S]
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    [A L L ] S T R E A M E R S
                </Link>
                <GoogleAuth />
            </div>
        </div>
    );
};

export default Header;