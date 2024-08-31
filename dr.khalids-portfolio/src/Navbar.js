import {Link} from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Dr.Khalid Elgazzar</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/papers"> Papers </Link>
                <Link to="/contact"> Contact </Link>
           
            </div>
        </nav>
    );
}
 
export default Navbar;