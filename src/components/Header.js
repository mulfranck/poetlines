const Header = () => {
    return (
        <header className="navbar navbar-expand-md navbar-dark bg-dark">
            <nav className="container">
                <a className="navbar-brand" href="#">Poetline</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapseContent" aria-controls="navbarCollapseContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapseContent">
                    <form className="d-flex mx-auto" role="search">
                        <div className="input-group">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </div>
                    </form>
                    <ul className="navbar-nav py-2">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Forms
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> Log in </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;