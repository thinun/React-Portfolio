import React from 'react';
import './Footer.css'

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div className={"footer"}>
            <p>Copyright © {date} Thinun Tharushika. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;
