import {Logo} from "@/components/navbar/logo/Logo";
import style from '@/components/navbar/styles/style.module.css';
import { AiOutlineMenu } from "react-icons/ai";
import {NavLinks} from "@/components/navbar/navLinks/NavLinks";


export const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Logo/>
                <div className="flex md:order-2">
                    <button type="button" className={`bg-blue-700 ${style.cta}`}>Login</button>

                    <button data-collapse-toggle="navbar-cta" type="button" className={style.menu_btn}>
                        <AiOutlineMenu className="w-6 h-6"/>
                    </button>

                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <NavLinks/>
                </div>
            </div>
        </nav>
    );
};