import { useLocation } from "react-router-dom";
import MainHeader from "../../ui/customer-page/MainHeader";
import LogIn from "../../ui/LogIn";
import SignUp from "../../ui/SignUp";

function LoginPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isSignUp = queryParams.get("signup");

  return (
    <div>
      <MainHeader />
      {isSignUp ? <SignUp /> : <LogIn />}
    </div>
  );
}

export default LoginPage;
