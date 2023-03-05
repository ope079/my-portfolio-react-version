import { NavLink } from "react-router-dom";

function Header() {
    return <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Ope's Site</a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {/*<a href="/">Home</> */}
                            <NavLink to="/" end>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            {/*<a href="/contact">Contact</> */}
                            <NavLink to="/contact" end>Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            {/*<a href="/projects">Projects</> */}
                            <NavLink to="/projects" end>Projects</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}


export default Header;