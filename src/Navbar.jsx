import React from "react";


const Navbar = () =>{
    return(
        <ul className="navy">
            <li><a id="zero">Read Quotes</a></li>
            <li><a id="one" href="#">Home</a></li>
            <li><a id="two" href="#">About</a></li>
            <li><a id="three" href="#">Profile</a></li>
            <button class="butt">Contact</button>
        </ul>

    );
};

export default Navbar;