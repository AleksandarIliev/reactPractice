import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import styles from "./Header.module.css"

export default function Header({winSize}) {
    return (
        <div className={styles.header}>
            {/* <img src="/Logo.png" alt="Home" /> */}
            <Link className={styles.fname} to="/">Aleks-M</Link>
            <Nav winSize={winSize}/>
        </div>
    );
}