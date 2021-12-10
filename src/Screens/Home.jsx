import Layout from './../Components/Layout';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import { Tabs } from 'antd';
import { useEffect, useState } from 'react';
const { TabPane } = Tabs;

const Home = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        document.title = 'Bluetech | Home'
    }, [])

    let carousel1 = {
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        dots: false,
        animateOut: 'animate__backOutLeft',
        animateIn: 'animate__fadeInRight',
    }

    let carousel2 = {
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        dots: false,
        animateOut: 'animate__backOutLeft',
        animateIn: 'animate__fadeInRight',
        responsive: {
            0: {
                items: 1,
                loop: true,
            },
            600: {
                items: 2,
                loop: true,
            },
            1280: {
                items: 3,
                loop: false
            }
        }
    }

    let carousel3 = {
        margin: 15,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        dots: false,
        animateOut: 'animate__backOutLeft',
        animateIn: 'animate__zoomIn',
        responsive: {
            0: {
                items: 1,
                loop: true,
            },
            600: {
                items: 2,
                margin: 50,
                loop: true,
            },
            1024: {
                items: 3,
                loop: true
            },
            1280: {
                items: 4,
                loop: true
            },
            1300: {
                items: 5,
                loop: true
            },
            1600: {
                items: 6,
                loop: true
            }
        }
    }

    useEffect(() => {

        if (window.innerWidth < 992) {
            setIsMobile(true);
        }

        document.addEventListener('resize', () => {
            if (window.innerWidth < 992) {
                setIsMobile(true);
            }
        })
    }, [])

    return (
        <Layout>
            <main>
                <section className="relative">
                    <OwlCarousel className='owl-theme' {...carousel1}>
                        <div className='item'>
                            <img src="/images/banner-1.png" alt="banner-1" className="h-screen w-auto" width="100%" />
                        </div>
                        <div className='item'>
                            <img src="/images/banner-2.png" alt="banner-2" className="h-screen w-auto" width="100%" />
                        </div>
                        <div className='item'>
                            <img src="/images/banner-3.png" alt="banner-3" className="h-screen w-auto" width="100%" />
                        </div>
                    </OwlCarousel>

                    <div class="custom-shape-divider-bottom-1638813914 z-10">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                        </svg>
                    </div>

                    <div className="absolute inset-0 z-10 lg:block hidden">
                        <div className="flex justify-center items-end lg:ml-80 lg:mr-80 w-full lg:w-auto h-full">
                            <OwlCarousel {...carousel2} className="owl-theme">
                                <div className="bg-primary mx-3 lg:w-80 w-auto border rounded-tl-2xl py-5 lg:py-11 px-3 lg:px-7 rounded-br-2xl flex flex-row justify-between items-center transform scale-100 hover:scale-105 transition duration-200 ease-in-out mb-3 animate__animated animate__fadeInDown wow">
                                    <div>
                                        <img className="h-20" src="/images/filter_icon.svg" alt="filter-icon" />
                                    </div>
                                    <h1 className="text-lg font-bold text-center text-white uppercase">Replacement filter cartridges </h1>
                                </div>
                                <div className="bg-primary  mx-3 lg:w-80 w-auto border rounded-tl-2xl py-5 lg:py-11 px-3 lg:px-7 rounded-br-2xl flex flex-row justify-between items-center transform scale-100 hover:scale-105 transition duration-200 ease-in-out mb-3 animate__animated animate__fadeInDown animate__delay-1s wow">
                                    <div>
                                        <img className="h-20" src="/images/setup_brita_icon.svg" alt="filter-icon" />
                                    </div>
                                    <h1 className="text-lg font-bold text-center text-white uppercase">Water filter pitchers </h1>
                                </div>
                                <div className="bg-primary  mx-3 lg:w-80 w-auto border rounded-tl-2xl py-5 lg:py-11 px-3 lg:px-7 rounded-br-2xl flex flex-row justify-between items-center transform scale-100 hover:scale-105 transition duration-200 ease-in-out mb-3 animate__animated animate__fadeInDown animate__delay-2s wow">
                                    <div>
                                        <img className="h-20" src="/images/compare_icon.svg" alt="filter-icon" />
                                    </div>
                                    <h1 className="text-lg font-bold text-center text-white uppercase">Other Bluetech products</h1>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </section>

                {/* all products section */}
                <section className="my-20">
                    <div className="container mx-auto">
                        <h1 className="text-2xl text-gray-600 lg:text-4xl font-bold text-center">Already know what you are looking for?</h1>
                        <OwlCarousel {...carousel3} className="owl-theme mt-14 w-full">
                            <div className="item carousel-img w-full mx-auto flex justify-center items-center lg:block lg:w-auto">
                                <img className="shadow-lg border rounded-2xl" src="/images/p-1.webp" alt="p-1" />
                            </div>
                            <div className="item carousel-img w-full mx-auto flex justify-center items-center lg:block lg:w-auto">
                                <img className="shadow-lg border rounded-2xl" src="/images/p-2.webp" alt="p-2" />
                            </div>
                            <div className="item carousel-img w-full mx-auto flex justify-center items-center lg:block lg:w-auto">
                                <img className="shadow-lg border rounded-2xl" src="/images/p-3.webp" alt="p-3" />
                            </div>
                            <div className="item carousel-img w-full mx-auto flex justify-center items-center lg:block lg:w-auto">
                                <img className="shadow-lg border rounded-2xl" src="/images/p-4.webp" alt="p-4" />
                            </div>
                            <div className="item carousel-img w-full mx-auto flex justify-center items-center lg:block lg:w-auto">
                                <img className="shadow-lg border rounded-2xl" src="/images/p-5.webp" alt="p-5" />
                            </div>
                        </OwlCarousel>
                    </div>
                </section>

                {/* latest product section */}
                <section className="my-20 bg-light-blue py-20">
                    <div className="container mx-auto">
                        <div className="flex justify-between items-center">
                            <h1 className="text-xl lg:text-3xl text-gray-600 font-bold text-left">Checkout Our latest filters</h1>
                            <Link className="text-base lg:text-lg font-bold text-center" to='/products/water-filter-pitchers'>View all</Link>
                        </div>
                        <OwlCarousel {...carousel3} className="owl-theme w-full my-10">
                            {[6, 7, 8, 9, 10, 12].map((item, index) => (
                                <div className="item w-full h-80 carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block lg:w-auto relative group animate__animated animate__fadeInDown wow animate__delay-1s">
                                    <img
                                        className="transform scale-100  h-72 group-hover:scale-110 transition duration-150 ease-in-out"
                                        src={`/images/p-${item}.webp`} alt={`p-${item}`}
                                    />

                                    <h1 className="flex absolute bottom-0 py-3 text-white w-full bg-primary text-xl justify-center items-center">
                                        Filter {item}
                                    </h1>

                                    <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                        <Link to="/products/water-filter-pitchers/Violet-529" className="flex items-center rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                            <i className="bi bi-eye-fill text-xl px-3"></i>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </OwlCarousel>
                    </div>
                </section>

                {/* testimonial section */}
                <section className="my-20">
                    <div className="container mx-auto">
                        <h1 className="text-xl lg:text-3xl text-gray-600 font-bold text-center">Testimonials</h1>
                        <div className="my-6 sm:mx-6 md:mx-12 lg:22 xl:mx-44 lg:my-20">
                            <Tabs size='large' tabPosition={isMobile ? 'top' : 'left'} className="shadow-lg border rounded-lg p-2 lg:px-6 lg:py-20">
                                <TabPane tab="Massive Production" className="text-center" key="1">
                                    <div className="py-4">
                                        <h1 className="text-xl lg:text-2xl font-bold">Big Production Capacity</h1>
                                        <p className="text-lg pt-4 px-2 lg:px-10">
                                            Shanghai Bluetech has one of the highest production capacities in the world in the industry of water filter
                                            pitchers. Worlds most advance testing equipment paired with the massive production facility produces the best
                                            products with lowest possible time with uncompromised production quality.
                                        </p>
                                    </div>
                                </TabPane>
                                <TabPane tab="Best Customer Support" className="text-center" key="2">
                                    <div className="py-4">
                                        <h1 className="text-xl lg:text-2xl font-bold">Fantastic After Sales Support</h1>
                                        <p className="text-lg pt-4 px-2 lg:px-10">
                                            Sales support is one the things that other companies forget to give emphasis on.
                                            But Shanghai Bluetech is different in this regard. After sales support team will
                                            work very hard to ensure customer satisfaction all the way.
                                        </p>
                                    </div>
                                </TabPane>
                                <TabPane tab="Fastest Supply Chain" className="text-center" key="3">
                                    <div className="py-4">
                                        <h1 className="text-xl lg:text-2xl font-bold">ON-TIME SHIPPING</h1>
                                        <p className="text-lg pt-4 px-2 lg:px-10">
                                            Because our factory is located in Shanghai. Our shipment times are faster than most other companies based
                                            in China. On-Time shipping is our first priority to maintain customer satisfaction. No Production delay,
                                            Always get the best quality production on time with Bluetech.
                                        </p>
                                    </div>
                                </TabPane>
                                <TabPane tab="Completely Customizable" className="text-center" key="4">
                                    <div className="py-4">
                                        <h1 className="text-xl lg:text-2xl font-bold">OEM and ODM, Completely Customizable.</h1>
                                        <p className="text-lg pt-4 px-2 lg:px-10">
                                            Bluetech has a dedicated team of designers and engineers tasked to meet customer demands during
                                            Production period. You can completely design your own customer product and we will deliver the
                                            best possible production quality with Our expertise and experience.
                                        </p>
                                    </div>
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                </section>

                {/* a product for every occation */}
                <section className="mt-20 bg-light-blue py-20">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row justify-between items-center">
                            <h1 className="text-xl lg:text-3xl text-gray-600 font-bold text-left">A Product For Every Occassion</h1>
                            <Link className="text-base lg:text-lg font-bold text-center" to='/products/water-filter-pitchers'>View all</Link>
                        </div>
                        <OwlCarousel {...carousel3} className="owl-theme mt-7 w-full">
                            {[12, 13, 14, 15].map((item, index) => (
                                <div className="item w-full h-80 carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block lg:w-auto relative group animate__animated animate__fadeInDown wow animate__delay-1s">
                                    <img
                                        className="transform scale-100 w- h-72 group-hover:scale-110 transition duration-150 ease-in-out"
                                        src={`/images/p-${item}.webp`} alt={`p-${item}`}
                                    />

                                    <h1 className="flex absolute bottom-0 py-3 text-white w-full bg-primary text-xl justify-center items-center">
                                        Filter {item}
                                    </h1>

                                    <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                        <Link to="/products/water-filter-pitchers/Violet-529" className="flex items-center rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                            <i className="bi bi-eye-fill text-xl px-3"></i>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </OwlCarousel>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default Home;
