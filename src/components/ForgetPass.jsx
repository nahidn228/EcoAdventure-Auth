import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const ForgetPass = () => {
  const { sendEmail, resetPassword } = useContext(AuthContext);
  console.log(sendEmail);

  const handleResetPass = (e) => {
    e.preventDefault();

    const emailField = e.target.email.value;

    resetPassword(emailField)
      .then(() => {
        alert("Password reset email sent!");
        // ..
      })
      .catch((error) => {
        alert(error.code);
      });
  };
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen mt-10">
        <div className="card  w-full max-w-lg shrink-0 ">
          <form onSubmit={handleResetPass} className="card-body border-2 p-10">
            <h2 className="text-2xl font-bold mb-6">Update your password</h2>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Email
                </span>
              </label>
              <input
                type="text"
                name="email"
                defaultValue={sendEmail}
                placeholder="Enter your  Email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-2 px-6 shadow-lg transform transition-transform hover:scale-105">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
