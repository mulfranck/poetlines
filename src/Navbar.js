const Navbar = () => {


    return (
        <header className="header">
            <h2>multra</h2>

            <nav className="nav-bar">
                <ul>
                    <li className="nav-list"><a href='/' className="nav-link">Home</a></li>
                    <li className="nav-list"><a href='/new' className="nav-link">New blog</a></li>
                    <li className="nav-list"><a href='/search' className="nav-link">search</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;