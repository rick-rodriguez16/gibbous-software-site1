import '../styles/gibbous-logo.css'

function Navbar() {

    return (
        <>
            <nav className="navbar bg-body-teriary">
                <div className="container-fluid">
                    <div className="gibbous-logo ms-4 d-inline-flex">
                        <div className="gibbous-icon-border mt-2">
                            <div className="gibbous-icon"></div>
                        </div>
                        <div className="gibbous-name">gibbous</div>
                    </div>
                </div> 
            </nav>
        </>
    )
}

export default Navbar

/* <a className="navbar-brand" href="#">
                    <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="" />
                    Bootstrap
                    </a> */