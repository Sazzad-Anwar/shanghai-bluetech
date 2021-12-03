import Layout from './../Components/Layout';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import { Tabs, Input } from 'antd';
import { useEffect, useState } from 'react';
const { TabPane } = Tabs;
const { TextArea } = Input;

const Home = () => {

    const [isMobile, setIsMobile] = useState(false);

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
                items: 1,
                loop: true,
            },
            1280: {
                items: 3,
                loop: false
            }
        }
    }

    let carousel3 = {
        margin: 10,
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
                items: 1,
                loop: true,
            },
            1280: {
                items: 4,
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

                    <div className="custom-shape-divider-bottom-1638383354 z-10">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                        </svg>
                    </div>

                    <div className="absolute inset-0 z-10">
                        <div className="flex justify-center items-end lg:ml-80 lg:mr-80 w-full lg:w-auto h-full">
                            <OwlCarousel {...carousel2} className="owl-theme">
                                <div className="bg-pink  mx-3 lg:w-80 w-auto border rounded-tl-2xl py-5 lg:py-11 px-3 lg:px-7 rounded-br-2xl flex flex-row justify-between items-center transform scale-100 hover:scale-105 transition duration-200 ease-in-out mb-3 animate__animated animate__fadeInDown wow">
                                    <div>
                                        <img className="h-20" src="/images/filter_icon.svg" alt="filter-icon" />
                                    </div>
                                    <h1 className="text-lg font-bold text-center text-white">BUY REPLACEMENT FILTERS</h1>
                                </div>
                                <div className="bg-ash  mx-3 lg:w-80 w-auto border rounded-tl-2xl py-5 lg:py-11 px-3 lg:px-7 rounded-br-2xl flex flex-row justify-between items-center transform scale-100 hover:scale-105 transition duration-200 ease-in-out mb-3 animate__animated animate__fadeInDown animate__delay-1s wow">
                                    <div>
                                        <img className="h-20" src="/images/setup_brita_icon.svg" alt="filter-icon" />
                                    </div>
                                    <h1 className="text-lg font-bold text-center text-white">BUY REPLACEMENT FILTERS</h1>
                                </div>
                                <div className="bg-olive  mx-3 lg:w-80 w-auto border rounded-tl-2xl py-5 lg:py-11 px-3 lg:px-7 rounded-br-2xl flex flex-row justify-between items-center transform scale-100 hover:scale-105 transition duration-200 ease-in-out mb-3 animate__animated animate__fadeInDown animate__delay-2s wow">
                                    <div>
                                        <img className="h-20" src="/images/compare_icon.svg" alt="filter-icon" />
                                    </div>
                                    <h1 className="text-lg font-bold text-center text-white">BUY REPLACEMENT FILTERS</h1>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </section>

                {/* all products section */}
                <section className="my-20">
                    <div className="container mx-auto">
                        <h1 className="text-2xl lg:text-4xl font-bold text-center">Already know what you are looking for?</h1>
                        <OwlCarousel {...carousel3} className="owl-theme mt-14 w-full">
                            <div className="item carousel-img w-full mx-auto flex justify-center items-center lg:block lg:w-auto">
                                <img src="/images/p-1.webp" alt="p-1" />
                            </div>
                            <div className="item carousel-img w-full mx-auto flex justify-center items-center lg:block lg:w-auto">
                                <img src="/images/p-2.webp" alt="p-2" />
                            </div>
                            <div className="item carousel-img w-full mx-auto flex justify-center items-center lg:block lg:w-auto">
                                <img src="/images/p-3.webp" alt="p-3" />
                            </div>
                            <div className="item carousel-img w-full mx-auto flex justify-center items-center lg:block lg:w-auto">
                                <img src="/images/p-4.webp" alt="p-4" />
                            </div>
                            <div className="item carousel-img w-full mx-auto flex justify-center items-center lg:block lg:w-auto">
                                <img src="/images/p-5.webp" alt="p-5" />
                            </div>
                        </OwlCarousel>
                    </div>
                </section>

                {/* latest product section */}
                <section className="my-20 bg-light-blue py-20">
                    <div className="container mx-auto">
                        <div className="flex justify-between items-center">
                            <h1 className="text-xl lg:text-4xl font-bold text-left">Checkout Our latest filters</h1>
                            <Link className="text-base lg:text-lg font-bold text-center" to='/products'>View all</Link>
                        </div>
                        <OwlCarousel {...carousel3} className="owl-theme w-full">
                            <div className="item carousel-img w-full mx-auto flex justify-center items-center">
                                <img className="shadow-lg border rounded-2xl" src="/images/p-6.webp" alt="p-6" />
                            </div>
                            <div className="item carousel-img w-full mx-auto flex justify-center items-center">
                                <img className="shadow-lg border rounded-2xl" src="/images/p-7.webp" alt="p-7" />
                            </div>
                            <div className="item carousel-img w-full mx-auto flex justify-center items-center">
                                <img className="shadow-lg border rounded-2xl" src="/images/p-8.webp" alt="p-8" />
                            </div>
                            <div className="item carousel-img w-full mx-auto flex justify-center items-center">
                                <img className="shadow-lg border rounded-2xl" src="/images/p-9.webp" alt="p-9" />
                            </div>
                            <div className="item carousel-img w-full mx-auto flex justify-center items-center">
                                <img className="shadow-lg border rounded-2xl" src="/images/p-10.webp" alt="p-10" />
                            </div>
                            <div className="item carousel-img w-full mx-auto flex justify-center items-center">
                                <img className="shadow-lg border rounded-2xl" src="/images/p-11.webp" alt="p-11" />
                            </div>
                        </OwlCarousel>
                    </div>
                </section>

                {/* testimonial section */}
                <section className="my-20">
                    <div className="container mx-auto">
                        <h1 className="text-xl lg:text-4xl font-bold text-center">Testimonials</h1>
                        <div className="my-6 lg:my-20">
                            <Tabs tabPosition={isMobile ? 'top' : 'left'} className="shadow-lg border rounded-lg p-0 lg:px-6 lg:py-20">
                                <TabPane tab="Massive Production" className="text-center" key="1">
                                    <div className="py-8">
                                        <h1 className="text-lg lg:text-2xl font-bold">Big Production Capacity</h1>
                                        <p className="text-base pt-8 px-2 lg:px-10">
                                            Shanghai Bluetech has one of the highest production capacities in the world in the industry of water filter
                                            pitchers. Worlds most advance testing equipment paired with the massive production facility produces the best
                                            products with lowest possible time with uncompromised production quality.
                                        </p>
                                    </div>
                                </TabPane>
                                <TabPane tab="Best Customer Support" className="text-center" key="2">
                                    <div className="py-8">
                                        <h1 className="text-lg lg:text-2xl font-bold">Fantastic After Sales Support</h1>
                                        <p className="text-base pt-8 px-2 lg:px-10">
                                            Sales support is one the things that other companies forget to give emphasis on.
                                            But Shanghai Bluetech is different in this regard. After sales support team will
                                            work very hard to ensure customer satisfaction all the way.
                                        </p>
                                    </div>
                                </TabPane>
                                <TabPane tab="Fastest Supply Chain" className="text-center" key="3">
                                    <div className="py-8">
                                        <h1 className="text-lg lg:text-2xl font-bold">ON-TIME SHIPPING</h1>
                                        <p className="text-base pt-8 px-2 lg:px-10">
                                            Because our factory is located in Shanghai. Our shipment times are faster than most other companies based
                                            in China. On-Time shipping is our first priority to maintain customer satisfaction. No Production delay,
                                            Always get the best quality production on time with Bluetech.
                                        </p>
                                    </div>
                                </TabPane>
                                <TabPane tab="Completely Customizable" className="text-center" key="4">
                                    <div className="py-8">
                                        <h1 className="text-lg lg:text-2xl font-bold">OEM and ODM, Completely Customizable.</h1>
                                        <p className="text-base pt-8 px-2 lg:px-10">
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
                            <h1 className="text-xl lg:text-4xl font-bold text-left">A Product For Every Occassion</h1>
                            <Link className="text-base lg:text-lg font-bold text-center" to='/products'>View all</Link>
                        </div>
                        <OwlCarousel {...carousel3} className="owl-theme mt-7 w-full">
                            <div className="item w-full carousel-img border rounded-2xl shadow-xl overflow-hidden mx-auto flex justify-center items-center lg:block lg:w-auto relative group">
                                <img
                                    className="transform scale-100 group-hover:scale-110 transition duration-150 ease-in-out"
                                    src="/images/p-12.webp" alt="p-12"
                                />
                                <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                    <Link to="/" className="flex items-center rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                        <i className="bi bi-eye-fill text-xl pl-3 pr-1"></i> <span className="text-lg px-3">View</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="item w-full carousel-img border rounded-2xl shadow-xl overflow-hidden mx-auto flex justify-center items-center lg:block lg:w-auto relative group">
                                <img
                                    className="transform scale-100 group-hover:scale-110 transition duration-150 ease-in-out"
                                    src="/images/p-13.webp" alt="p-12"
                                />
                                <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                    <Link to="/" className="flex items-center rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                        <i className="bi bi-eye-fill text-xl pl-3 pr-1"></i> <span className="text-lg px-3">View</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="item w-full carousel-img border rounded-2xl shadow-xl overflow-hidden mx-auto flex justify-center items-center lg:block lg:w-auto relative group">
                                <img
                                    className="transform scale-100 group-hover:scale-110 transition duration-150 ease-in-out"
                                    src="/images/p-14.webp" alt="p-12"
                                />
                                <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                    <Link to="/" className="flex items-center rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                        <i className="bi bi-eye-fill text-xl pl-3 pr-1"></i> <span className="text-lg px-3">View</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="item w-full carousel-img border rounded-2xl shadow-xl overflow-hidden mx-auto flex justify-center items-center lg:block lg:w-auto relative group">
                                <img
                                    className="transform scale-100 group-hover:scale-110 transition duration-150 ease-in-out"
                                    src="/images/p-15.webp" alt="p-12"
                                />
                                <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                    <Link to="/" className="flex items-center rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                        <i className="bi bi-eye-fill text-xl pl-3 pr-1"></i> <span className="text-lg px-3">View</span>
                                    </Link>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </section>

                {/* email to supplier */}
                <section className="py-20 backdrop-blur-lg relative" style={{
                    background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/banner-2.png) no-repeat center center',
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed'
                }}>
                    <div className="container mx-auto">
                        <h1 className="text-xl lg:text-4xl font-bold text-center text-white">Send Message To Supplier</h1>
                        <div className="flex justify-center items-center mb-10">
                            <form className="bg-white my-6 lg:my-20 p-4 lg:p-8 shadow-xl border rounded-xl">
                                <Input className="my-3 py-3" placeholder="Name" />
                                <Input className="my-3 py-3" placeholder="Email" />
                                <TextArea className="my-3 py-3" placeholder="Please inform us about your question" autoSize />
                                <button type="submit" className="my-3 py-2 px-3 text-base text-white bg-primary hover:bg-blue-400 outline-none shadow transition duration-300 ease-in-out">
                                    Send <i className="bi bi-send-fill pl-2"></i>
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="custom-shape-divider-bottom-1638556171">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                        </svg>
                    </div>
                </section>

                {/* footer */}
                <footer className="bg-dark-blue">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 border-b border-white pb-10">
                            <div>
                                <img src="/images/logo-white.png" alt="logo" />
                                <p className="text-base text-white mt-5 lg:pr-10">
                                    OEM/ODM manufacturer company of water filter products.
                                    Follow us on following Links & SEO Learner.
                                </p>
                                <div className="flex items-center py-3">
                                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                        <i className="bi bi-facebook pr-3 text-3xl text-white hover:text-blue-800 transition duration-200 ease-in-out"></i>
                                    </a>
                                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                        <i className="bi bi-twitter pr-3 text-3xl text-white hover:text-blue-800 transition duration-200 ease-in-out"></i>
                                    </a>
                                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                        <i className="bi bi-instagram pr-3 text-3xl text-white hover:text-blue-800 transition duration-200 ease-in-out"></i>
                                    </a>
                                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                        <i className="bi bi-youtube pr-3 text-3xl text-white hover:text-blue-800 transition duration-200 ease-in-out"></i>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-white text-2xl font-semibold bottom-underline">Company</h1>
                                <ul className="list-none mt-8">
                                    <li className="py-2.5">
                                        <Link to="/" className="text-white text-lg footer-link transition duration-200 ease-in-out hover:text-white">About Us</Link>
                                    </li>
                                    <li className="py-2.5">
                                        <Link to="/" className="text-white text-lg footer-link transition duration-200 ease-in-out hover:text-white">Contact Us</Link>
                                    </li>
                                    <li className="py-2.5">
                                        <Link to="/" className="text-white text-lg footer-link transition duration-200 ease-in-out hover:text-white">Support</Link>
                                    </li>
                                    <li className="py-2.5">
                                        <Link to="/" className="text-white text-lg footer-link transition duration-200 ease-in-out hover:text-white">Privacy Policy</Link>
                                    </li>
                                    <li className="py-2.5">
                                        <Link to="/" className="text-white text-lg footer-link transition duration-200 ease-in-out hover:text-white">Terms & Condition</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h1 className="text-white text-2xl font-semibold bottom-underline">Categories</h1>
                                <ul className="list-none mt-8">
                                    <li className="py-2.5">
                                        <Link to="/" className="text-white text-lg footer-link transition duration-200 ease-in-out hover:text-white">Water Filter  Pitchers</Link>
                                    </li>
                                    <li className="py-2.5">
                                        <Link to="/" className="text-white text-lg footer-link transition duration-200 ease-in-out hover:text-white">Faucet Mounted Filters</Link>
                                    </li>
                                    <li className="py-2.5">
                                        <Link to="/" className="text-white text-lg footer-link transition duration-200 ease-in-out hover:text-white">Water Filter Bottles</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h1 className="text-white text-2xl font-semibold bottom-underline">Address</h1>
                                <ul className="list-none mt-8">
                                    <li className="py-2.5 flex items-center">
                                        <i className="bi bi-geo-alt-fill text-white text-xl px-3 py-2 bg-primary rounded-full"></i>
                                        <span className="ml-2 text-base text-white">
                                            333 Huasong Street <br />
                                            Xidu, Fengxian, Shanghai, China.
                                        </span>
                                    </li>
                                    <li className="py-2.5 flex items-center">
                                        <i className="bi bi-telephone-fill text-white text-xl px-3 py-2 bg-primary rounded-full"></i>
                                        <a href="tel:+8615005826317" className="ml-2 text-base hover:text-white text-white">
                                            +8615005826317
                                        </a>
                                    </li>
                                    <li className="py-2.5 flex items-center">
                                        <i className="bi bi-envelope-fill text-white text-xl px-3 py-2 bg-primary rounded-full"></i>
                                        <a href="mailto:info@cn-bluetech.com" className="ml-2 hover:text-white text-base text-white">
                                            info@cn-bluetech.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center h-20">
                        <p className="text-base text-white font-semibold">SHANGHAI BLUETECH © 2021</p>
                    </div>
                </footer>
            </main>
        </Layout>
    );
};

export default Home;
