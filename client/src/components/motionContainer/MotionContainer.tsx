import { motion } from 'framer-motion';
import {ReactNode} from "react";

type Props = {
    children: ReactNode
}


export const MotionContainer = ({children}:Props) => {
    return (
        <motion.div
            className="mt-8 p-3 min-h-[95vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    );
};
