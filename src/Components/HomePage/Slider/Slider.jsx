import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



function Slider() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };


    return (
        <>

            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper   rounded-3xl h-[500px] w-[310px] md:h-[600px] md:w-[720px] lg:h-[600px] lg:w-[1280px] mx-auto overflow-hidden pt-4"
            >


                

                <SwiperSlide id="001" className='items-center element'>
                    <div className='items-center element  flex lg:flex-row flex-col-reverse justify-center p-4'>
                        <div className=' text-start p-4 md:p-6 lg:p-8 z-20 lg:w-1/2 ' >
                            <h1 className='text-white font-bold text-2xl pl-4 md:pl-6 lg:p-8 md:text-3xl lg:text-5xl'>Hope Restored</h1>
                            <p className='lg:text-xl text-white p-2 md:p-6 pt-0 lg:p-8'> At our medical center, we believe in healing through compassion. Our image captures the joy of a patient, young or old, holding hands with a caring doctor. The subtle cyan light emanating from the doctor’s hand symbolizes hope and renewal. Together, we restore lives and inspire optimism.</p>
                            
                        </div>
                        <div className='lg:w-1/2 rounded-xl'>
                            <img src="https://i.ibb.co/TrF81Gn/image.png" className="rounded-xl" alt="" />
                        </div>
                    </div>


                </SwiperSlide>

                <SwiperSlide id="002" className='items-center element'>
                    <div className='items-center element  flex lg:flex-row flex-col-reverse justify-center p-4'>
                        <div className=' text-start p-4 md:p-6 pt-0 lg:p-8 z-20 lg:w-1/2 ' >
                            <h1 className='text-white font-bold text-2xl pl-4 md:pl-6 lg:p-8 md:text-3xl lg:text-5xl'>Helping Hands</h1>
                            <p className=' lg:text-xl text-white p-2 md:p-6 lg:p-8'>Our dedicated team of doctors and healthcare professionals come together to provide essential medical services. From eye care to general health check-ups, we extend healing hands to those in need. Together, we make a positive impact on the community.</p>
                            
                        </div>
                        <div className='lg:w-1/2 rounded-xl'>
                            <img src="https://i.ibb.co/PY6Zs97/image.png" className="rounded-xl" alt="" />
                        </div>
                    </div>


                </SwiperSlide>
              
                <SwiperSlide id="002" className='items-center element'>
                    <div className='items-center element  flex lg:flex-row flex-col-reverse justify-center p-4'>
                        <div className=' text-start p-4 md:p-6 pt-0 lg:p-8 z-20 lg:w-1/2 ' >
                            <h1 className='text-white font-bold text-2xl pl-4 md:pl-6 lg:p-8 md:text-3xl lg:text-5xl'>Community Connection </h1>
                            <p className=' lg:text-xl text-white p-2 md:p-6 lg:p-8'>Our medical campaign bridges hearts and health. Through compassionate care, we link patients, doctors, and hope. Together, we build a stronger, healthier community. </p>
                            
                        </div>
                        <div className='lg:w-1/2 rounded-xl'>
                            <img src="https://i.ibb.co/GWYDf3m/image.png" className="rounded-xl" alt="" />
                        </div>
                    </div>


                </SwiperSlide>
              


                <div className="autoplay-progress" slot="container-center">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>

                </div>



            </Swiper>


        </>
    );
}


export default Slider;