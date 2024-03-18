import './Nav.css';
export const Nav = () =>{
    return(
        <div className = "container">
            <nav>
                  <div className="nav_div1">
                    <img src="/images/brand_logo.png" alt="logo" id='logo' />
                  </div >
                  <div className='nav_div2'>

                    <ul>
                        <li>Menu</li>
                        <li>Location</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>

                  </div>

                    <button id="btn">Login</button>
            </nav>
        </div>
    )
}