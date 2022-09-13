import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="navbar navbar-expand-md navbar-dark bg-dark">
            <nav className="container">
                <h1 className="navbar-brand" href="#">Poetline</h1>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapseContent" aria-controls="navbarCollapseContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapseContent">
                    <form className="d-flex mx-auto" role="search">
                        <div className="input-group">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary text-light" type="submit"><span className="bi bi-search"></span></button>
                        </div>
                    </form>
                    <ul className="navbar-nav py-2">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Forms
                            </span>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/action">Action</Link></li>
                                <li><Link className="dropdown-item" to="/another">Another action</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/something">Something else here</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login"> Log in </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;