import { NavLink } from "react-router-dom";

function Login() {
    return (
        <div className="space-x-4">
            <div className="flex flex-col">
                <form>
                    <label>
                        Username
                        <input type="text" value="test" />
                    </label>
                    <input type="submit" value="Login" />
                </form>
            </div>
            <div className="inline-block">Not a member? </div>
            <NavLink className="inline-block text-red-500" to="/signup">
                Sign up
            </NavLink>
        </div>
    );
}

export default Login;
