import React from "react";
import {Link} from 'react-router-dom';

const Navbar = ()=>{

    return <nav className= 'navbar navbar-dark bg-primary'>
        <Link to='/' className='navbar-brand ml-5'>
         To do List
        </Link>
       
    </nav>
};

export default Navbar;