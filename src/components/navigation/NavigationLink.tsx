import Link from 'next/link';
import React from 'react';
import styles from './navigation.module.scss';

interface LinkProps {
    item: {
        path: string;
        name: string;
    };
    isActive: boolean;
}

const NavigationLink: React.FC<LinkProps> = ({ item, isActive }) => {
    const { path, name } = item;

    return (
        <Link
            className={`${styles.navItem} ${isActive ? styles.active : ''}`}
            href={path}
        >
            {name}
        </Link>
    );
};

export default NavigationLink;
