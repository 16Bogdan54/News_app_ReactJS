import {NavLink} from "react-router-dom";
import {ReactNode} from "react";
import style from '@/components/navbar/styles/style.module.css'

type LinkProps = {
    to: string,
    child: ReactNode
}

type LinksProps = {
    child: ReactNode
}

const CustomNavlink = ({to, child}:LinkProps) => {
    return (
        <li>
            <NavLink to={to} className={`${style.nav_link}`}>
                {child}
            </NavLink>
        </li>
    );
};

export const NavLinks = ({child}: LinksProps) => {
    return (
        <ul className={style.nav_links}></ul>
    )
}

