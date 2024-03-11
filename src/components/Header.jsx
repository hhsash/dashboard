import React, { useState, useEffect } from 'react';

const Header = ({ store }) => {
    return (
        <div>
            <select value='Test' onChange={(e) => console.log(e.target.value)}>
                <option value='system'>System</option>
                <option value='dark'>Dark</option>
                <option value='light'>Light</option>
            </select>
        </div>
    );
};

export default Header;
