import {Link} from "react-router-dom";

export const Logo = () => {
    return (
        <Link to="/" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo"/>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Real News</span>
        </Link>
    );
};

