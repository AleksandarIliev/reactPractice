import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";

export default function Headers() {
    return (
        <>
            {/* <img src="" alt="Logo" /> */} //add logo
            <Link to="/">Aleks-M</Link>
            <Nav />
        </>
    );
}