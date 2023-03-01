import SearchContact from "./contact/SearchContact";

import {PURPLE, BACKGROUND} from '../helpers/colors'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-sm shadow-lg" style={{ backgroundColor: BACKGROUND }}>
            <div className="container">
                <div className="row w-100">
                    <div className="col">
                        <i className="fas fa-id-badge" style={{ color: PURPLE }}/>
                        وب اپلیکیشن مدیریت{"  "}
                        <span style={{ color: PURPLE }}>مخاطبین</span>
                    </div>
                    <div className="col">
                        <SearchContact />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;