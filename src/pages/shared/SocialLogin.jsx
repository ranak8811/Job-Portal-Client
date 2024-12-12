import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log("Google login error: " + err.message);
      });
  };
  return (
    <div>
      <div className="divider">OR</div>
      <button onClick={handleGoogleLogin} className="btn bg-green-500">
        Google login
      </button>
    </div>
  );
};

export default SocialLogin;
