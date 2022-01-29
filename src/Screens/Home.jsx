import Layout from './../Components/Layout';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import { Tabs } from 'antd';
import { useEffect, useState } from 'react';
import { getBulletCard, getHomePageSections, getLatestFilters, getMarketingImage, getNewModelProducts, getTestimonials } from '../Api';
import Loader from '../Components/Loader';
const { TabPane } = Tabs;

const Home = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [sliders, setSliders] = useState([]);
    const [marketingImages, setMarketingImages] = useState([]);
    const [bulletCards, setBulletCards] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [sections, setSections] = useState([]);
    const [latestFilters, setLatestFilters] = useState([]);
    const [newModelProducts, setNewModelProducts] = useState([]);

    useEffect(() => {
        document.title = 'Bluetech | Home'

        let getSliderData = async () => {
            const { data: images } = await getMarketingImage();
            const { data: cards } = await getBulletCard();
            const { data: testimonialData } = await getTestimonials();
            const { data: sectionsData } = await getHomePageSections();
            const { data: filtersData } = await getLatestFilters();
            const { data: newModels } = await getNewModelProducts('newModel');

            setNewModelProducts(newModels);
            setLatestFilters(filtersData[0]);
            setSections(sectionsData.attributes.sections.sort());
            setTestimonials(testimonialData);
            setBulletCards(cards);
            setMarketingImages(images)
            setSliders(sectionsData.attributes.banner.data);
        }

        getSliderData();

        if (window.innerWidth < 992) {
            setIsMobile(true);
        }

        document.addEventListener('resize', () => {
            if (window.innerWidth < 992) {
                setIsMobile(true);
            }
        })

    }, []);

    let carousel1 = {
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        dots: false,
        animateOut: 'animate__fadeOut',
        animateIn: 'animate__fadeIn',
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
                items: 2,
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
                items: 5,
                loop: true
            }
        }
    }

    return (
        <Layout>
            <main>
                <section className="relative">
                    {sliders && sliders.length ?
                        <OwlCarousel className='owl-theme' {...carousel1}>
                            {sliders.map((slider) => (
                                <div key={slider.attributes.formats.large.url} className='item'>
                                    <img src={slider.attributes.formats.large.url} alt={slider.attributes.alternativeText} className="h-screen w-auto" width="100%" />
                                </div>
                            ))}
                        </OwlCarousel>
                        : <div className='h-screen w-auto flex justify-center items-center bg-gray-300 animate-pulse'>
                            <Loader />
                        </div>}

                    <div className="custom-shape-divider-bottom-1638813914 z-10">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                        </svg>
                    </div>

                    <div className="absolute inset-0 z-10 lg:block hidden">
                        <div className="flex justify-center items-end lg:ml-40 lg:mr-40 xl:ml-80 xl:mr-80 w-full lg:w-auto h-full">
                            {bulletCards && bulletCards.length ?
                                <OwlCarousel {...carousel2} className="owl-theme">
                                    {bulletCards.map(card => (
                                        <div key={card.attributes.icon.data.attributes.url} className="bg-primary mx-3 lg:w-80 w-auto border rounded-tl-2xl py-5 lg:py-11 px-3 lg:px-7 rounded-br-2xl flex flex-row justify-between items-center transform scale-100 hover:scale-105 transition duration-200 ease-in-out mb-3 animate__animated animate__fadeInDown wow">
                                            <div>
                                                <img className="h-20" src={card.attributes.icon.data.attributes.url} alt={card.attributes.icon.data.attributes.alternativeText} />
                                            </div>
                                            <h1 className="text-lg font-bold text-center text-white uppercase">{card.attributes.title}</h1>
                                        </div>
                                    ))}

                                </OwlCarousel>
                                : <OwlCarousel {...carousel2} className="owl-theme">
                                    <div className="bg-primary mx-3 lg:w-80 w-auto border rounded-tl-2xl py-5 lg:py-11 px-3 lg:px-7 rounded-br-2xl flex flex-row items-center transform scale-100 hover:scale-105 transition duration-200 h-40 ease-in-out mb-3 animate__animated animate__fadeInDown wow">
                                        <div className="h-16 w-16 mr-3 rounded-full bg-secondary animate-pulse">
                                            <span />
                                        </div>
                                        <h1 className="text-lg font-bold text-center text-secondary uppercase h-6 w-auto bg-secondary animate-pulse">Lorem ipsum dolor.</h1>
                                    </div>
                                    <div className="bg-primary mx-3 lg:w-80 w-auto border rounded-tl-2xl py-5 lg:py-11 px-3 lg:px-7 rounded-br-2xl flex flex-row items-center transform scale-100 hover:scale-105 transition duration-200 h-40 ease-in-out mb-3 animate__animated animate__fadeInDown wow">
                                        <div className="h-16 w-16 mr-3 rounded-full bg-secondary animate-pulse">
                                            <span />
                                        </div>
                                        <h1 className="text-lg font-bold text-center text-secondary uppercase h-6 w-auto bg-secondary animate-pulse">Lorem ipsum dolor.</h1>
                                    </div>
                                    <div className="bg-primary mx-3 lg:w-80 w-auto border rounded-tl-2xl py-5 lg:py-11 px-3 lg:px-7 rounded-br-2xl flex flex-row items-center transform scale-100 hover:scale-105 transition duration-200 h-40 ease-in-out mb-3 animate__animated animate__fadeInDown wow">
                                        <div className="h-16 w-16 mr-3 rounded-full bg-secondary animate-pulse">
                                            <span />
                                        </div>
                                        <h1 className="text-lg font-bold text-center text-secondary uppercase h-6 w-auto bg-secondary animate-pulse">Lorem ipsum dolor.</h1>
                                    </div>
                                </OwlCarousel>}

                        </div>
                    </div>
                </section>

                {/* all products section */}
                <section className="my-20">
                    <div className="container mx-auto">
                        {sections && sections.filter(section => section.index === 1)[0]?.title ?
                            <h1 className="text-2xl text-gray-600 lg:text-4xl font-bold text-center">
                                {sections && sections.filter(section => section.index === 1)[0]?.title}
                            </h1> :
                            <div className="h-6 lg:w-1/3 lg:mx-auto rounded-xl bg-gray-300 lg:h-9 animate-pulse text-center"></div>
                        }

                        {sections && sections.filter(section => section.index === 1)[0]?.description ?
                            <p className='text-base lg:w-2/3 lg:mx-auto text-gray-600 lg:text-lg font-semibold text-center mt-3'>
                                {sections && sections.filter(section => section.index === 1)[0]?.description}
                            </p> :
                            <div className="h-4 lg:w-2/3 lg:mx-auto rounded-xl bg-gray-300 lg:h-5 animate-pulse text-center mt-3"></div>
                        }

                        {marketingImages && marketingImages.length ?
                            <OwlCarousel {...carousel3} className="owl-theme mt-14 w-full animate__animated animate__fadeIn wow">
                                {marketingImages.map(marketingImage => (
                                    <div key={marketingImage.attributes.image.data.attributes.url} className="item carousel-img h-82 w-63 mx-auto flex justify-center items-center lg:block lg:w-auto">
                                        <img className="shadow-lg border h-80 rounded-2xl" src={marketingImage.attributes.image.data.attributes.url} alt={marketingImage.attributes.image.data.attributes.alternativeText} />
                                    </div>
                                ))}
                            </OwlCarousel>
                            : <OwlCarousel {...carousel3} className="owl-theme mt-14 w-full">
                                <div className="item h-82 carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block w-full relative group animate__animated animate__fadeIn wow animate__delay-1s">
                                    <div
                                        className="transform h-72 bg-gray-300 scale-100 group-hover:scale-110 transition duration-150 ease-in-out"
                                    />
                                    <div className="p-10 animate-pulse w-full lg:w-96 bg-gray-500 text-transparent block h-10" />
                                </div>
                            </OwlCarousel>
                        }
                    </div>
                </section>

                {/* latest product section */}
                <section className="my-20 bg-light-blue py-20">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row justify-between items-center">
                            <div>
                                {sections && sections.filter(section => section.index === 2)[0]?.title ?
                                    <h1 className="text-2xl text-gray-600 lg:text-4xl font-bold text-left">
                                        {sections && sections.filter(section => section.index === 2)[0]?.title}
                                    </h1> :
                                    <div className="h-6 lg:w-1/3 lg:mx-auto rounded-xl bg-gray-300 lg:h-9 animate-pulse text-center"></div>
                                }
                                {sections && sections.filter(section => section.index === 2)[0]?.description ?
                                    <p className='text-base lg:w-2/3 lg:mr-auto text-gray-600 lg:text-lg font-semibold text-left mt-3'>
                                        {sections && sections.filter(section => section.index === 2)[0]?.description}
                                    </p> :
                                    <div className="h-4 lg:w-2/3 lg:mx-auto rounded-xl bg-gray-300 lg:h-5 animate-pulse text-center mt-3"></div>
                                }
                            </div>
                            <Link className="text-base lg:text-lg font-bold text-center w-24" to='/category/filter-cartridges'>View all</Link>

                        </div>

                        {latestFilters.attributes?.products?.data && latestFilters.attributes?.products?.data.length ? <>
                            <OwlCarousel {...carousel3} className="owl-theme w-full my-10">
                                {latestFilters.attributes?.products?.data.map((item) => (
                                    <div key={item.id} className="item h-82 w-63 carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block lg:w-auto relative group animate__animated animate__fadeIn wow">
                                        {item.attributes.images.data ?
                                            <img
                                                className="transform scale-100 h-80 group-hover:scale-110 transition duration-150 ease-in-out"
                                                src={item.attributes.images.data[0].attributes.url} alt={item.attributes.name}
                                            /> :
                                            <img
                                                className="transform scale-100 h-80 group-hover:scale-110 transition duration-150 ease-in-out"
                                                src='/images/image-error.png' alt='error'
                                            />
                                        }

                                        <h1 className="flex px-4 py-4 custom-line-clamp-2 absolute bottom-0 text-white w-full bg-primary text-sm justify-center items-center">
                                            {item.attributes.name}
                                        </h1>

                                        <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                            <Link to={`/products/${latestFilters.attributes?.link}/${item.attributes.code}`} className="flex items-center rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                                <i className="bi bi-eye-fill text-xl px-3"></i>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </OwlCarousel>
                        </> :
                            <OwlCarousel {...carousel3} className="owl-theme mt-14 w-full">
                                <div className="item h-82 carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block w-full relative group animate__animated animate__fadeIn wow animate__delay-1s">
                                    <div
                                        className="transform h-72 bg-gray-300 scale-100 group-hover:scale-110 transition duration-150 ease-in-out"
                                    />

                                    <div className="p-10 animate-pulse w-full lg:w-96 bg-gray-500 text-transparent block h-10" />
                                </div>
                            </OwlCarousel>
                        }
                    </div>
                </section>

                {/* testimonial section */}
                <section className="my-20">
                    <div className="container mx-auto">
                        {sections && sections.filter(section => section.index === 3)[0]?.title ?
                            <h1 className="text-2xl text-gray-600 lg:text-4xl font-bold text-center">
                                {sections && sections.filter(section => section.index === 3)[0]?.title}
                            </h1> :
                            <div className="h-6 lg:w-1/3 lg:mx-auto rounded-xl bg-gray-300 lg:h-9 animate-pulse text-center"></div>
                        }

                        {sections && sections.filter(section => section.index === 3)[0]?.description ?
                            <p className='text-base lg:w-2/3 lg:mx-auto text-gray-600 lg:text-lg font-semibold text-center mt-3'>
                                {sections && sections.filter(section => section.index === 3)[0]?.description}
                            </p> :
                            <div className="h-4 lg:w-2/3 lg:mx-auto rounded-xl bg-gray-300 lg:h-5 animate-pulse text-center mt-3"></div>
                        }
                        <div className="my-6 sm:mx-6 md:mx-12 lg:22 xl:mx-44 lg:my-10">
                            {testimonials && testimonials.length ?
                                <Tabs size='large' tabPosition={isMobile ? 'top' : 'left'} className="shadow-lg border rounded-lg p-2 lg:px-6 lg:py-20">
                                    {testimonials.map(testimonial => (
                                        <TabPane tab={testimonial.attributes.name} className="text-center" key={testimonial.attributes.name}>
                                            <div className="py-4">
                                                <h1 className="text-xl lg:text-2xl font-bold">{testimonial.attributes.title}</h1>
                                                <p className="text-lg pt-4 px-2 lg:px-10">
                                                    {testimonial.attributes.description}
                                                </p>
                                            </div>
                                        </TabPane>
                                    ))}
                                </Tabs>
                                : <div className='h-96 flex justify-center items-center w-full bg-gray-300 animate-pulse border rounded-lg text-center'>
                                    <Loader />
                                </div>
                            }
                        </div>
                    </div>
                </section>

                {/* a product for every occation */}
                <section className="mt-20 bg-light-blue py-20">
                    <div className="container mx-auto">
                        <div className="flex lg:flex-row flex-col justify-between items-center">
                            <div>
                                {sections && sections.filter(section => section.index === 4)[0]?.title ?
                                    <h1 className="text-2xl text-gray-600 lg:text-4xl font-bold text-left">
                                        {sections && sections.filter(section => section.index === 4)[0]?.title}
                                    </h1> :
                                    <div className="h-6 lg:w-1/3 lg:ml-auto rounded-xl bg-gray-300 lg:h-9 animate-pulse text-left"></div>
                                }

                                {sections && sections.filter(section => section.index === 4)[0]?.description ?
                                    <p className='text-base lg:w-2/3 lg:mr-auto text-gray-600 lg:text-lg font-semibold text-left mt-3'>
                                        {sections && sections.filter(section => section.index === 4)[0]?.description}
                                    </p> :
                                    <div className="h-4 lg:w-2/3 lg:mr-auto rounded-xl bg-gray-300 lg:h-5 animate-pulse text-left mt-3"></div>
                                }
                            </div>
                            <Link className="text-base lg:text-lg font-bold text-center w-24" to='/category/new-models'>View all</Link>
                        </div>

                        {newModelProducts && newModelProducts.length ? <>
                            <OwlCarousel {...carousel3} className="owl-theme w-full my-10">
                                {newModelProducts.map((item) => (
                                    <div key={item.id} className="item h-82 w-63 carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block lg:w-auto relative group animate__animated animate__fadeIn wow">
                                        {item.attributes.images.data ?
                                            <img
                                                className="transform scale-100 h-80 group-hover:scale-110 transition duration-150 ease-in-out"
                                                src={item.attributes.images.data[0].attributes.url} alt={item.attributes.name}
                                            /> :
                                            <img
                                                className="transform scale-100 h-80 group-hover:scale-110 transition duration-150 ease-in-out"
                                                src='/images/image-error.png' alt='error'
                                            />
                                        }

                                        <h1 className="flex px-4 py-4 custom-line-clamp-2 absolute bottom-0 text-white w-full bg-primary text-sm justify-center items-center">
                                            {item.attributes.name}
                                        </h1>

                                        <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                            <Link to={`/products/${item.attributes.caetgories?.data[0]?.attributes.link}/${item.attributes.code}`} className="flex items-center rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                                <i className="bi bi-eye-fill text-xl px-3"></i>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </OwlCarousel>
                        </> :
                            <OwlCarousel {...carousel3} className="owl-theme mt-14 w-full">
                                <div className="item h-82 carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block w-full relative group animate__animated animate__fadeIn wow animate__delay-1s">
                                    <div
                                        className="transform h-72 bg-gray-300 scale-100 group-hover:scale-110 transition duration-150 ease-in-out"
                                    />
                                    <div className="p-10 animate-pulse w-full lg:w-96 bg-gray-500 text-transparent block h-10" />
                                </div>
                            </OwlCarousel>
                        }
                    </div>
                </section>
            </main>
        </Layout >
    );
};

export default Home;
