import { MotionContainer } from "@/components/motionContainer/MotionContainer";
import UserForm from "@/components/userForm/userForm";

const SignUp = () => {
  return (
    <MotionContainer>
      <div className="flex flex-col my-10 items-center w-full">
        <UserForm isSignUp />
      </div>
    </MotionContainer>
  );
};

export default SignUp;
