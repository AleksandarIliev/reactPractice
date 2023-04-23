import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { UserNav } from "./UserNav";


export const Nav = ({ winSize }) => {
    const [isExpanded, setExpanded] = useState(false);

    return (
        <>
            {winSize[0] < 600 ?
                <>
                    <button className={styles.navBtn} onClick={() => { setExpanded(!isExpanded) }}>
                        {/* get from heroicons.com */}
                        {!isExpanded ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                    </button>

                    {isExpanded ? <div>
                        <Link className={styles.resNav} to="/">Home</Link>
                        <Link className={styles.resNav} to="/products">Products</Link>
                        <Link className={styles.resNav} to="/photoCollection">Photo</Link>
                        <Link className={styles.resNav} to="/rotateBand">Rotate</Link>
                        <Link className={styles.resNav} to="/trafficLight">Traffic</Link>
                        <Link className={styles.resNav} to="/contact">Contact</Link>
                    </div> : []}
                </>
                :
                    <div>
                        <Link className={styles.nav} to="/">Home</Link>
                        <Link className={styles.nav} to="/products">Products</Link>
                        <Link className={styles.nav} to="/photoCollection">Photo</Link>
                        <Link className={styles.nav} to="/rotateBand">Rotate</Link>
                        <Link className={styles.nav} to="/trafficLight">Traffic</Link>
                        <Link className={styles.nav} to="/contact">Contact</Link>
                    </div>
            }
        </>
    );
}