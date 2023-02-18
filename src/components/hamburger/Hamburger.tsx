import React from 'react';
import styles from './Hamburger.module.scss';

interface HamburgerProps {
    toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
    isActive: boolean;
}

const Hamburger: React.FC<HamburgerProps> = ({ toggleMenu, isActive }) => {
    return (
        <button
            onClick={toggleMenu}
            className={`${styles.burger} ${isActive ? styles.active : ''}`}
        >
            <div className={styles.burgerLine} />
            <div className={styles.burgerLine} />
            <div className={styles.burgerLine} />
        </button>
    );
};

export default Hamburger;
