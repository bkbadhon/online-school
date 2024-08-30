import Banner from "../component/Banner";
import Features from "../component/Features";
import News from "../component/News";
import Quiz from "../component/Quiz";
import Service from "../component/Service";
import Success from "../component/Success";
import WhyTotc from "../component/WhyTotc";

const Home = () => {
    return (
        <div className="">
        <Banner></Banner>
        <Success></Success>
        <Service></Service>
        <WhyTotc></WhyTotc>
        <Features></Features>
        <Quiz></Quiz>
        <News></News>
        </div>
    );
};

export default Home;