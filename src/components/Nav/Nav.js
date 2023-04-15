import styles from './Nav.module.css'
import { Link } from "react-router-dom";

export const Nav = ({ winSize }) => {

    return (
        <>
            {winSize[0] < 800 && winSize[1] < 800 ?
                <> 
                    <img src="data:image/png;base64,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" alt="" />
                    
                </>
            : 
            <>
                <Link className={styles.nav} to="/">Home</Link>
                <Link className={styles.nav} to="/products">Products</Link>
                <Link className={styles.nav} to="/photoCollection">Photo</Link>
                <Link className={styles.nav} to="/rotateBand">Rotate</Link>
                <Link className={styles.nav} to="/trafficLight">Traffic</Link>
                <Link className={styles.nav} to="/contact">Contact</Link>
                
            </>
            }
            
        </>
    );
}