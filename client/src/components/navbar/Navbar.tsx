import {Logo} from "@/components/navbar/logo/Logo";
import style from '@/components/navbar/styles/style.module.css';
import { AiOutlineMenu } from "react-icons/ai";


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
                    <ul className={style.nav_links}>
                        <li>
                            <a href="#"
                               className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                               aria-current="page">Home
                            </a>
                        </li>
                        <li>
                            <a href="#"
                               className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                        </li>
                        <li>
                            <a href="#"
                               className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                        </li>
                        <li>
                            <a href="#"
                               className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};