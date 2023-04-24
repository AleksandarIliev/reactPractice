import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const UserNav = () => {
    const [isClick, setClick] = useState(false);

    return (
                <>
                    <button className={styles.userNavBtn} onClick={() => { setClick(!isClick) }}>
                        {!isClick ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                            </svg>
                        )}
                    </button>

                    {isClick ? (
                        <div>
                            <Link className={styles.userNav} to="/form/login">Login</Link>
                            <Link className={styles.userNav} to="/form/register">Register</Link>
                            <Link className={styles.userNav} to="/logout">Logout</Link>
                        </div>
                    ) : []}
                </>
    );
}