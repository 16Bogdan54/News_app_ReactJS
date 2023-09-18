import { NavLink } from "react-router-dom";
import { ReactNode } from "react";
import style from "@/components/navbar/styles/style.module.css";

type LinkProps = {
  to: string;
  children: ReactNode;
};

// `${({isActive}) => isActive ? "bg-blue-700" : "bg-white" }

const CustomNavlink = ({ to, children }: LinkProps) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? style.nav_link_active : style.nav_link
        }
        end
      >
        {children}
      </NavLink>
    </li>
  );
};

export const NavLinks = () => {
  return (
    <ul className={style.nav_links}>
      <CustomNavlink to="/">Articles</CustomNavlink>
      <CustomNavlink to="/most-popular">Most Popular</CustomNavlink>
      <CustomNavlink to="/top-stories">Top Stories</CustomNavlink>
    </ul>
  );
};
