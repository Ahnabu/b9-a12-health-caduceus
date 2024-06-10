
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';


// import required modules
import { EffectCreative } from 'swiper/modules';

export default function App() {
    return (
        <>
            <div className='text-secondary mx-auto text-center'>
                <h1 className='text-secondary mt-6 mb-2 '>
                    Health Tips
                </h1>
                <p>Here is some health tips for you</p>
            </div>
            <Swiper
                grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ['-20%', 0, -1],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                modules={[EffectCreative]}
                className="w-80 md:w-[500px] md:h-[500px] lg:w-[900px] lg:h-700px rounded my-6"
            >

                <SwiperSlide id="001" className='  item-end element flex items-center justify-center text-xl flex-col md:flex-row'>
                    <img src="https://i.ibb.co/CQMsCfT/image.png" alt="" />

                    <div className=' text-secondary z-20' >
                        <h1 className='text-white font-bold text-2xl'> Stay Hydrated</h1>
                        <p className=' text-white mt-4 md:mt-8 p-4 md:p-6 lg:p-8'>Drink plenty of water throughout the day to maintain good health.</p>

                    </div>
                </SwiperSlide>
                <SwiperSlide  id="002" className='item-end element item-end element flex items-center justify-center text-xl flex-col md:flex-row'>
                    <img src="https://i.ibb.co/qDhwQ9w/image.png" alt="" />
                    <div className=' text-secondary z-20' >
                        <h1 className='text-white font-bold text-2xl'>Get Enough Sleep</h1>
                        <p className=' text-white mt-4 md:mt-8 p-4 md:p-6 lg:p-8'>Aim for 7-9 hours of quality sleep each night to support overall well-being.</p>


                    </div>
                </SwiperSlide>
                <SwiperSlide  id="003" className='item-end element item-end element flex items-center justify-center text-xl flex-col md:flex-row'>
                    <img src="https://i.ibb.co/7Kw5LRZ/image.png" alt="" />
                    <div className=' text-secondary z-20' >
                        <h1 className='text-white font-bold text-2xl'>Eat Balanced Meals</h1>
                        <p className=' text-white mt-4 md:mt-8 p-4 md:p-6 lg:p-8'>Include a variety of fruits, vegetables, whole grains, and lean proteins in your diet.</p>


                    </div>
                </SwiperSlide>
                <SwiperSlide id="004" className='item-end element item-end element flex items-center justify-center text-xl flex-col md:flex-row'>
                    <img src="https://i.ibb.co/DLmZddM/image.png" alt="" />
                    <div className=' text-secondary z-20' >
                        <h1 className='text-white font-bold text-2xl'>Exercise Regularly</h1>
                        <p className=' text-white mt-4 md:mt-8 p-4 md:p-6 lg:p-8'>Engage in physical activity to boost energy, improve mood, and maintain a healthy weight.</p>


                    </div>
                </SwiperSlide>
                <SwiperSlide id="001" className='item-end element item-end element flex items-center justify-center text-xl flex-col md:flex-row'>
                    <img src="https://i.ibb.co/GsSrMKc/image.png" alt="" />
                    <div className=' text-secondary z-20' >
                        <h1 className='text-white font-bold text-2xl'>Prioritize Mental Health</h1>
                        <p className=' text-white mt-4 md:mt-8 p-4 md:p-6 lg:p-8'>Seek professional help if needed and prioritize self-care for mental well-being.</p>


                    </div>
                </SwiperSlide>

            </Swiper>



        </>
    );
}
