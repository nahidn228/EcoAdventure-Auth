import { useContext, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const SignUp = () => {
  const navigate = useNavigate();
  const { createNewUser, setUser, updateUser } = useContext(AuthContext);

  const [err, setErr] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (name.length < 5) {
      setErr({
        ...err,
        name: "Name should be more than 5 character or grater",
      });

      return;
    }
    if (!(password === confirmPassword)) {
      setErr({ ...err, password: "Password did not match" });
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        setUser(result.user);

        updateUser({ displayName: name, photoURL: photoUrl })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });

        console.log(result.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // setUser(errorCode);
        alert(errorCode);
      });

    console.log({ name, photoUrl, email, password, confirmPassword });
  };
  return (
    <div className="flex items-center justify-center min-h-screen mt-10">
      <div className="card  w-full max-w-lg shrink-0 ">
        <form onSubmit={handleSubmit} className="card-body border-2 p-10">
          <h2 className="text-2xl font-bold mb-6">Create an account</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base"> Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
            {err.name && (
              <p className="text-sm text-red-600 mt-1 font-medium">
                {err.name}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base">
                {" "}
                Photo URL
              </span>
            </label>
            <input
              type="text"
              name="photoUrl"
              placeholder="Enter your photo Url"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
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
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="input input-bordered"
              required
            />
            {err.password && (
              <p className="text-sm text-red-600 mt-1 font-medium">
                {err.password}
              </p>
            )}
          </div>

          <div className="form-control mt-6">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-2 px-6 shadow-lg transform transition-transform hover:scale-105">
              Create an account
            </button>
          </div>
          {/* {user && (
            <p className="text-red-600 text-sm font-medium text-center">
              {user}
            </p>
          )} */}

          <p className="mt-4 font-medium text-center">
            Already have an account?{" "}
            <Link
              type="button"
              className="underline font-normal text-blue-800"
              to="/login"
            >
              Login
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

export default SignUp;
