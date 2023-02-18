import React, { useEffect, useState } from 'react';
import NavigationLink from './NavigationLink';
import Hamburger from '../hamburger/Hamburger';
import styles from './navigation.module.scss';

const menuItems = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'About Us',
        path: '/about',
    },
    {
        name: 'Our Services',
        path: '/services',
    },
    {
        name: 'Contact Us',
        path: '/contact',
    },
];

const Navigation: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [locationPath, setLocationPath] = useState<string>();

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }
        setLocationPath(location.pathname);
    }, []);

    const handleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <nav className={styles.navbar}>
            <Hamburger toggleMenu={handleMenu} isActive={menuOpen} />

            <ul className={`${styles.navList} ${menuOpen ? styles.open : ''}`}>
                {menuItems.map((item) => {
                    return (
                        <NavigationLink
                            key={item.name}
                            item={item}
                            isActive={locationPath === item.path}
                        />
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navigation;
