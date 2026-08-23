function Navigation() {
    return (
        <nav className="navbar bg-dark navbar-dark">
            <div className="container">
                <h2 className="navbar-brand mb-0">Age Calculator</h2>

                <div className="navbar-nav d-flex flex-row gap-3">
                    <a className="nav-link" href="#">Home</a>
                    <a className="nav-link" href="#services">Services</a>
                    <a className="nav-link" href="About">About us</a>
                    <a className="nav-link" href="Sumdemo">Sumdemo</a>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;