import Feedback from "./Feedback/Feedback";
import PopularCards from "./Popular/PopularCards";
import Slider from "./Slider/Slider";


const HomePage = () => {

    return (
        <div className=" bg-primary bg-opacity-60 mx-auto">
            <div className="min-h-screen bg-no-repeat bg-cover pt-20 " >
                <Slider></Slider>
            </div>
            <PopularCards></PopularCards>
            <Feedback></Feedback>
        </div>

    );
};

export default HomePage;