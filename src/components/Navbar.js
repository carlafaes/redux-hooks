import React from "react";
import {Link} from 'react-router-dom';

const Navbar = ()=>{

    return <nav className= 'navbar navbar-dark bg-primary'>
        <Link to='/' className='navbar-brand m-2'>
         To do List
        </Link>
       
    </nav>
};

export default Navbar;