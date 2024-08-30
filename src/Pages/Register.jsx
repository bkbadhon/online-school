import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../public/portrait-modern-woman-working-with-laptop.jpg";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { app } from "../Firebase/firebase.config";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();

  const { createUser } = useContext(AuthContext);

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        Swal.fire("Good job!", "You logged in!", "success");
        navigate(location?.state ? location.state : "/");
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const data = e.target;
    const email = data.email.value;
    const name = data.name.value;
    const photo = data.photo.value;
    const password = data.password.value;
    console.log(email, password, name, photo);

    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      setRegisterError("Password must be 6 character");
      return;
    }
    createUser(email, password, name, photo)
      .then((result) => {
        Swal.fire("Good job!", "You logged in!", "success");
        navigate(location?.state ? location.state : "/");
        console.log(result)
        setSuccess("Register Successfull");
      })

      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });

    console.log(createUser);
  };
  return (
    <div className="hero  w-11/12 mx-auto">
      <div className="py-16 md:flex gap-16 justify-center items-center">
        <div className="md:w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card md:w-1/2">
          <div className="lg:w-3/5 md:w-4/5 p-4 shadow-2xl">
            <h2 className="text-center my-4 text-3xl font-bold">
              Register here
            </h2>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="photo"
                  name="photo"
                  placeholder="photo url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  {registerError && (
                    <p className="text-red-500">{registerError}</p>
                  )}
                  {success && <p className="text-[#11e7d9]">{success}</p>}
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn text-white bg-[#11e7d9]">
                  Register
                </button>
              </div>
            </form>
            <div className="">
              <button
                onClick={handleGoogle}
                className="btn bg-[#11e7d9] w-full text-white"
              >
                Sign in with Google
              </button>
            </div>
            <h2 className="my-4 text-center">
              Already have an account ?{" "}
              <Link to={"/login"}>
                <span className="text-[#11e7d9]">Login here</span>
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
