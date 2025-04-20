import './Navbar.css'
export const Navbar=()=>{
    return(
        <header>
        <div className="container">
          <div className="logo">LOGO</div>
  
          <input type="checkbox" id="menu-toggle" className="menu-toggle" />
          <label htmlFor="menu-toggle" className="hamburger">
            <span className="bar bar1"></span>
            <span className="bar bar2"></span>
            <span className="bar bar3"></span>
          </label>
  
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact Us</a></li>
              <li className="sign-in">
                <a href="#" className="sign-in-btn">Sign In</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
}