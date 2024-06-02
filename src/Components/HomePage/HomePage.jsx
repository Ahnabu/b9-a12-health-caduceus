import PopularCards from "./Popular/PopularCards";
import Slider from "./Slider/Slider";


const HomePage = () => {

    return (
        <div className=" bg-primary bg-opacity-60 mx-auto">
            <div className="min-h-screen bg-no-repeat bg-cover pt-20 " >
                <Slider></Slider>
            </div>
            <PopularCards></PopularCards>
        </div>

    );
};

export default HomePage;