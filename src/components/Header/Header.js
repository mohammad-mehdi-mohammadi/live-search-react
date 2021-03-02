import * as React from "react";
import styles from './Header.module.sass'
import {NavLink} from "react-router-dom";
import logo from './../../assets/img/naria-logo.png'
const Header = () => {

    return (
        <>


            <div className={styles.headerArea}>
                <div className={styles.introArea}>
                    <img src={logo} />
                    <h5>Naria</h5>
                    <div>Live Search</div>
                </div>
                <NavLink to="/home" activeClassName={styles.active}>
                    Home
                </NavLink>
                <NavLink to="/live-search" activeClassName={styles.active}>
                    Live Search
                </NavLink>
            </div>

        </>
    );
}

export default Header;
