import { motion } from 'framer-motion';
import {ReactNode} from "react";

type Props = {
    children: ReactNode
}


export const MotionContainer = ({children}:Props) => {
    return (
        <motion.div
            className="container mt-10 p-3 mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    );
};
