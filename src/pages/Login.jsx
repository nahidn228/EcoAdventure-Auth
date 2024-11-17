import { useContext, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { signInUser, setUser } = useContext(AuthContext);
  const [err, setErr] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signInUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        setErr(null);
        navigate(location?.state ? location.state : "/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        setErr(errorCode);
        setUser(null);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen mt-10">
      <div className="card  w-full max-w-lg shrink-0 ">
        <form onSubmit={handleSignIn} className="card-body border-2 p-10">
          <h2 className="text-2xl font-bold mb-6">Login</h2>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base"> Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your  Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base">
                Password
              </span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              className="input input-bordered"
              required
            />
            {err && (
              <p className="text-sm font-medium text-red-600 mt-1">{err}</p>
            )}
            <div className="flex justify-between mt-4">
              <div className="form-control">
                <label className="cursor-pointer justify-start gap-2 label font-semibold text-base">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-warning"
                  />
                  <span className="label-text">Remember me</span>
                </label>
              </div>
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover font-semibold text-sm"
                >
                  Forgot password?
                </a>
              </label>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#F9A51A]">Login</button>
          </div>

          <p className="mt-4 font-medium text-center">
            Don’t have an account?{" "}
            <Link className="underline font-normal text-[#F9A51A]" to="/signUp">
              Create an account
            </Link>
          </p>
        </form>
        <div className="p-10">
          <div className="divider font-semibold my-6">Or</div>
          <button className="btn btn-outline btn-circle w-full mb-6 flex">
            <FcGoogle />
            Continue with Google
          </button>
          <button className="btn btn-outline btn-circle w-full">
            <FaGithub /> Continue with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
