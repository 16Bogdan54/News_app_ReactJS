import { Navbar } from "@/components/navbar/Navbar";
import axios from "axios";
import { AnimatedRoutes } from "@/routes/AnimatedRoutes";
import { MotionContainer } from "@/components/motionContainer/MotionContainer";

function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;

  return (
    <MotionContainer>
      <Navbar />
      <AnimatedRoutes />
    </MotionContainer>
  );
}

export default App;
