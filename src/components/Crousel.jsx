// components/DemoCarousel.js
"use client";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the styles
import './DemoCarousel.css'; // Import custom CSS

const DemoCarousel = () => {
    // Event handler functions
    const onChange = (index) => {
        console.log(`Slide changed to: ${index}`);
    };

    const onClickItem = (index) => {
        console.log(`Clicked item: ${index}`);
    };

    return (
        <div className="carouselContainer">
            <Carousel
                showArrows={true}
                showThumbs={false}
                onChange={onChange}
                onClickItem={onClickItem}
                infiniteLoop
                autoPlay
                interval={4000}
                showStatus={false}
                dynamicHeight={false}
                swipeable
                className="carousel"
            >
                <div className="CustomDiv w-full h-full flex">
                    <div className="leftSideSlide w-[50%] h-full">
                        <div className="w-[90%] flex flex-col justify-center gap-5  items-start py-5 px-12 h-[90vh]">
                            <div className="text  flex flex-col justify-center gap-2  items-start  text-left">
                                <div className="">
                                    <h1 className='text-[3vw] fontawesome'>Hihi Digitizing Services</h1>
                                    <h1 className='text-[65px] poppinEbold'>
                                        3D Puff <br /> Logos
                                    </h1>
                                </div>
                                <p className='fontawesome text-gray-700 text-[16px]' >
                                    Transform your designs into stunning, high-quality appliques with Hihi Digitizing! Our skilled team Specializes in preceise and vibrant applique Digitizing, ensuring your creations stand out with sharp details and flawless execution.
                                </p>
                            </div>
                            <div className="btnDiv w-full gap-5   flex justify-start  items-start ">
                                <button className='w-[150px] text-[16px] font-medium h-[50px] border border-black/75'>Order Now</button>
                                <button className='w-[150px] text-[16px] font-medium h-[50px] border border-black/75'>Contact Us</button>
                            </div>
                        </div>
                    </div>
                    <div className="rightSideSlide    w-[50%] h-full">
                        <div className="w-full h-[75vh]  flex justify-center items-end ">
                            <div className="bgImage w-[80%] flex items-end h-[60vh]">

                            </div>
                        </div>
                    </div>
                </div>


                <div className="CustomDiv w-full h-full flex">
                    <div className="leftSideSlide w-[50%] h-full">
                        <div className="w-[90%] flex flex-col justify-center gap-5  items-start px-12 h-[90vh]">
                            <div className="text  flex flex-col justify-center gap-2  items-start  text-left">
                                <div className="">
                                    <h1 className='text-[3vw] fontawesome'>Hihi Digitizing Services</h1>
                                    <h1 className='text-[65px] poppinEbold'>
                                        3D Puff <br /> Logos
                                    </h1>
                                </div>
                                <p className='fontawesome text-gray-700 text-[16px]' >
                                    Transform your designs into stunning, high-quality appliques with Hihi Digitizing! Our skilled team Specializes in preceise and vibrant applique Digitizing, ensuring your creations stand out with sharp details and flawless execution.
                                </p>
                            </div>
                            <div className="btnDiv w-full gap-5   flex justify-start  items-start ">
                                <button className='w-[150px] text-[16px] font-medium h-[50px] border border-black/75'>Order Now</button>
                                <button className='w-[150px] text-[16px] font-medium h-[50px] border border-black/75'>Contact Us</button>
                            </div>
                        </div>
                    </div>
                    <div className="rightSideSlide    w-[50%] h-full">
                        <div className="w-full h-[75vh]  flex justify-center items-end ">
                            <div className="bgImage w-[80%] flex items-end h-[60vh]">

                            </div>
                        </div>
                    </div>
                </div>



                <div className="CustomDiv w-full h-full flex">
                    <div className="leftSideSlide w-[50%] h-full">
                        <div className="w-[90%] flex flex-col justify-center gap-5  items-start px-12 h-[90vh]">
                            <div className="text  flex flex-col justify-center gap-2  items-start  text-left">
                                <div className="">
                                    <h1 className='text-[3vw] fontawesome'>Hihi Digitizing Services</h1>
                                    <h1 className='text-[65px] poppinEbold'>
                                        3D Puff <br /> Logos
                                    </h1>
                                </div>
                                <p className='fontawesome text-gray-700 text-[16px]' >
                                    Transform your designs into stunning, high-quality appliques with Hihi Digitizing! Our skilled team Specializes in preceise and vibrant applique Digitizing, ensuring your creations stand out with sharp details and flawless execution.
                                </p>
                            </div>
                            <div className="btnDiv w-full gap-5   flex justify-start  items-start ">
                                <button className='w-[150px] text-[16px] font-medium h-[50px] border border-black/75'>Order Now</button>
                                <button className='w-[150px] text-[16px] font-medium h-[50px] border border-black/75'>Contact Us</button>
                            </div>
                        </div>
                    </div>
                    <div className="rightSideSlide    w-[50%] h-full">
                        <div className="w-full h-[75vh]  flex justify-center items-end ">
                            <div className="bgImage w-[80%] flex items-end h-[60vh]">

                            </div>
                        </div>
                    </div>
                </div>




                <div className="CustomDiv w-full h-full flex">
                    <div className="leftSideSlide w-[50%] h-full">
                        <div className="w-[90%] flex flex-col justify-center gap-5  items-start px-12 h-[90vh]">
                            <div className="text  flex flex-col justify-center gap-2  items-start  text-left">
                                <div className="">
                                    <h1 className='text-[3vw] fontawesome'>Hihi Digitizing Services</h1>
                                    <h1 className='text-[65px] poppinEbold'>
                                        3D Puff <br /> Logos
                                    </h1>
                                </div>
                                <p className='fontawesome text-gray-700 text-[16px]' >
                                    Transform your designs into stunning, high-quality appliques with Hihi Digitizing! Our skilled team Specializes in preceise and vibrant applique Digitizing, ensuring your creations stand out with sharp details and flawless execution.
                                </p>
                            </div>
                            <div className="btnDiv w-full gap-5   flex justify-start  items-start ">
                                <button className='w-[150px] text-[16px] font-medium h-[50px] border border-black/75'>Order Now</button>
                                <button className='w-[150px] text-[16px] font-medium h-[50px] border border-black/75'>Contact Us</button>
                            </div>
                        </div>
                    </div>
                    <div className="rightSideSlide    w-[50%] h-full">
                        <div className="w-full h-[75vh]  flex justify-center items-end ">
                            <div className="bgImage w-[80%] flex items-end h-[60vh]">

                            </div>
                        </div>
                    </div>
                </div>



                <div className="CustomDiv w-full h-full flex">
                    <div className="leftSideSlide w-[50%] h-full">
                        <div className="w-[90%] flex flex-col justify-center gap-5  items-start px-12 h-[90vh]">
                            <div className="text  flex flex-col justify-center gap-2  items-start  text-left">
                                <div className="">
                                    <h1 className='text-[3vw] fontawesome'>Hihi Digitizing Services</h1>
                                    <h1 className='text-[65px] poppinEbold'>
                                        3D Puff <br /> Logos
                                    </h1>
                                </div>
                                <p className='fontawesome text-gray-700 text-[16px]' >
                                    Transform your designs into stunning, high-quality appliques with Hihi Digitizing! Our skilled team Specializes in preceise and vibrant applique Digitizing, ensuring your creations stand out with sharp details and flawless execution.
                                </p>
                            </div>
                            <div className="btnDiv w-full gap-5   flex justify-start  items-start ">
                                <button className='w-[150px] text-[16px] font-medium h-[50px] border border-black/75'>Order Now</button>
                                <button className='w-[150px] text-[16px] font-medium h-[50px] border border-black/75'>Contact Us</button>
                            </div>
                        </div>
                    </div>
                    <div className="rightSideSlide    w-[50%] h-full">
                        <div className="w-full h-[75vh]  flex justify-center items-end ">
                            <div className="bgImage w-[80%] flex items-end h-[60vh]">

                            </div>
                        </div>
                    </div>
                </div>


                <div className="CustomDiv w-full h-full flex">
                    <div className="leftSideSlide w-[50%] h-full">
                        <div className="w-[90%] flex flex-col justify-center gap-5  items-start px-12 h-[90vh]">
                            <div className="text  flex flex-col justify-center gap-2  items-start  text-left">
                                <div className="">
                                    <h1 className='text-[3vw] fontawesome'>Hihi Digitizing Services</h1>
                                    <h1 className='text-[65px] poppinEbold'>
                                        3D Puff <br /> Logos
                                    </h1>
                                </div>
                                <p className='fontawesome text-gray-700 text-[16px]' >
                                    Transform your designs into stunning, high-quality appliques with Hihi Digitizing! Our skilled team Specializes in preceise and vibrant applique Digitizing, ensuring your creations stand out with sharp details and flawless execution.
                                </p>
                            </div>
                            <div className="btnDiv w-full gap-5   flex justify-start  items-start ">
                                <button className='w-[150px] text-[16px] font-medium h-[50px] border border-black/75'>Order Now</button>
                                <button className='w-[150px] text-[16px] font-medium h-[50px] border border-black/75'>Contact Us</button>
                            </div>
                        </div>
                    </div>
                    <div className="rightSideSlide    w-[50%] h-full">
                        <div className="w-full h-[75vh]  flex justify-center items-end ">
                            <div className="bgImage w-[80%] flex items-end h-[60vh]">

                            </div>
                        </div>
                    </div>
                </div>


            </Carousel>
        </div>
    );
};

export default DemoCarousel;
