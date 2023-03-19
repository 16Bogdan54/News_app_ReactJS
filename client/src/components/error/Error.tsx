import {MotionContainer} from "@/components/motionContainer/MotionContainer";

const Error = () => {
    return (
        <MotionContainer>
            <div className="flex items-center justify-center flex-wrap">
                <h2 className="text-4xl font-extrabold dark:text-white">Oops something went wrong...</h2>
                <img className="my-2 w-full lg:w-1/2" src="/src/assets/err.png" alt="err image"/>
            </div>
        </MotionContainer>
    );
};

export default Error;
