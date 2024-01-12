import "./Navbar.css"

const Navbar = (props) => {

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top">

                {/* Brand */}
                <a className="navbar-brand" href="/">GauravMDb</a>

                {/* Toggle Button */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars"></i>
                </button>

                {/* Searchbox */}
                <div className="navbar-search">
                    <input className="mr-2" type="search" placeholder="Search Movie/Series" aria-label="Search" id="navSearch" />
                    <button className="btn my-2 my-sm-0" type="submit"><i className="fa-solid fa-magnifying-glass" onClick={props.search}></i></button>
                </div>

                {/* nav-items */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="https://joshigaurav.site/" target="_blank" rel="noreferrer">
                                Developer
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;