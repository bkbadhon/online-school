import WhyTotc from "./WhyTotc";
import img from '../../public/test.jpg'

const About = () => {
  return (
    <div>
      <div className="py-24">
        <WhyTotc></WhyTotc>
      </div>
      <div className="w-11/12 mx-auto">
          <div className="text-center" data-aos="fade-down" data-aos-duration="2000">
            <h2 className="text-3xl mb-3 font-bold">
              <span className="text-[#11e7d9]">Subscribe For</span> Get New
              Update
            </h2>
            <p>
              These phones are celebrated for their innovation, performance,{" "}
              <br /> and user satisfaction, making them popular choices in the
              market.
            </p>
          </div>
          <div className="my-5 md:flex items-center gap-12">
            <div
              className="w-full"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <img className="" src={img} alt="" />
            </div>
            <div
              className="w-full"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Name:</span>
                </div>
                <input
                  type="text"
                  placeholder="Type Your Name"
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Email:</span>
                </div>
                <input
                  type="email"
                  placeholder="Type Your Email"
                  className="input input-bordered w-full "
                />
              </label>
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-semibold">Message:</span>
                </div>
                <textarea
                  className="textarea textarea-success"
                  placeholder="Type Your Message"
                ></textarea>
              </label>
              <button className="btn flex justify-start mt-2 btn-outline hover:bg-[#11e7d9]">
                Send
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default About;
