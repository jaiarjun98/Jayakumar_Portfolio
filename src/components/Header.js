import React from 'react';
import Projects from './Projects';
import Button from '@mui/material/Button';

const Header = () => {
    return (
        <div>
            My Header Function component called
            <div><Button variant="contained">Hello World</Button></div>
            <Projects></Projects>
        </div>
    )
}

export default Header