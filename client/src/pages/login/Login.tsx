import { MotionContainer } from "@/components/motionContainer/MotionContainer";
import UserForm from "@/components/userForm/userForm";

const Login = () => {
  return (
    <MotionContainer>
      <div className="flex flex-col my-10 items-center w-full">
        <UserForm />
      </div>
    </MotionContainer>
  );
};

export default Login;
