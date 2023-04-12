import { Link } from "react-router-dom";

export const Nav = () => {
    return (
        // <select id="dropdown">
        //     <option value={<Link to="/" />}>Home</option>
        //     <option value={<Link to="/products" />}>Products</option>
        //     <option value={<Link to="/photoCollection" />}>Photo</option>
        //     <option value={<Link to="/trafficLight" />}>Traffic</option>
        //     <option value={<Link to="/contact" />}>Contact</option>
        // </select>
        <>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/photoCollection">Photo</Link>
            <Link to="/trafficLight">Traffic</Link>
            <Link to="/contact">Contact</Link>
        </>
    );
}