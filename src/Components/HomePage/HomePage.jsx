import Feedback from "./Feedback/Feedback";
import PopularCards from "./Popular/PopularCards";
import Slider from "./Slider/Slider";
import Tips from "./Tips/Tips";


const HomePage = () => {

    return (
        <div className=" bg-primary bg-opacity-60 mb-6 md:pb-12 pb-4 mx-auto">
            <div className="min-h-screen bg-no-repeat bg-cover pt-20 " >
                <Slider></Slider>
            </div>
            <PopularCards></PopularCards>
            <div>
                <Tips></Tips>
            </div>
            <Feedback></Feedback>
            
        </div>

    );
};

export default HomePage;