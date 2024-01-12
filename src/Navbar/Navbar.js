import "./Navbar.css"

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">

                {/* Brand */}
                <a className="navbar-brand" href="/">GauravMDB</a>

                {/* Toggle Button */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Searchbox */}
                <div className="navbar-search">
                    <input className="mr-2" type="search" placeholder="Search Movie/Series" aria-label="Search" />
                    <button className="btn my-2 my-sm-0" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

                {/* nav-items */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="/">
                                Dropdown
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="/" >Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;