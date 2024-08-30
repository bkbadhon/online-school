import { Link, useLocation, useNavigate } from "react-router-dom";
import img from '../../public/happy-young-caucasian-female-genius-gets-good-idea-blinks-eye-holds-pencil-carries-notebooks-has-fun-indoor.jpg'
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const {logIn}= useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = e =>{
        e.preventDefault();
        const form =new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        logIn(email, password)
        .then(result =>{
            Swal.fire('Good job!','You logged in!','success')
            console.log(result.user)
            navigate(location?. state? location.state : "/" )
        })
        .catch( error =>{
            console.log(error)
        })
    }
  return (
    <div className="hero  w-11/12 mx-auto">
      <div className="py-16 md:flex gap-16 justify-center items-center">
        <div className="md:w-1/2">
            <img src={img} alt="" />
        </div>
        <div className="card md:w-1/2">
            <div className="lg:w-3/5 md:w-4/5 p-4 shadow-2xl">
            <h2 className="text-center my-4 text-3xl font-bold">Login here</h2>
          <form onSubmit={handleLogin} className="card-body">
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
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-white bg-[#11e7d9]">Login</button>
            </div>
          </form>
          <h2 className="my-4 text-center">
            Are You new ?{" "}
            <Link to={"/register"}>
              <span className="text-[#11e7d9]">Register here</span>
            </Link>
          </h2>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
