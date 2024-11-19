import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const UpdateInfo = () => {
  const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleUpdateProfile = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;

    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        //clear form
        e.target.reset();

        navigate("/myProfile");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen mt-10">
        <div className="card  w-full max-w-lg shrink-0 ">
          <form
            onSubmit={handleUpdateProfile}
            className="card-body border-2 p-10"
          >
            <h2 className="text-2xl font-bold mb-6">Update Information</h2>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Photo URL
                </span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your  Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Update Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-2 px-6 shadow-lg transform transition-transform hover:scale-105">
                Update Information
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateInfo;
