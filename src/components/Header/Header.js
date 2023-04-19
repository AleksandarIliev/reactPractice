import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import styles from "./Header.module.css"
import { UserNav } from "../Nav/UserNav";

export default function Header({ winSize }) {
    return (
        <div className={styles.header}>
            <Link className={styles.logo} to="/"><img src="/Logo.png" alt="Home" /></Link>
            <Link className={styles.fname} to="/">Aleks-M</Link>
            <UserNav />
            <Nav winSize={winSize} />
        </div>
    );
}