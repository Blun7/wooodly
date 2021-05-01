import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div>
            <nav>
                <ul className="space-x-4">
                    <li className="inline-block">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="inline-block">
                        <NavLink to="/login">Login</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;
