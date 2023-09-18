import { Logo } from "@/components/navbar/logo/Logo";
import style from "@/components/navbar/styles/style.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLinks } from "@/components/navbar/navLinks/NavLinks";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Logo />
        <div className="flex md:order-2">
          <div className="flex gap-2 items-center justify-center">
            <Link className={`bg-blue-700 ${style.cta}`} to="/signup">
              Sign Up
            </Link>
            <Link className={`bg-white ${style.alternative}`} to="/login">
              Login
            </Link>
          </div>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className={style.menu_btn}
            aria-controls="navbar-sticky"
          >
            <AiOutlineMenu className="w-6 h-6" />
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};
