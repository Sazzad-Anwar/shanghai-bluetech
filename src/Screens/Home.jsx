import Layout from './../Components/Layout';
import OwlCarousel from 'react-owl-carousel';


const Home = () => {

    let options = {
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
    return (
        <Layout>
            <main>
                <section className="relative">
                    <OwlCarousel className='owl-theme' {...options}>
                        <div className='item'>
                            <img src="/images/banner-1.png" alt="banner-1" className="h-screen" width="100%" />
                        </div>
                        <div className='item'>
                            <img src="/images/banner-2.png" alt="banner-2" className="h-screen" width="100%" />
                        </div>
                        <div className='item'>
                            <img src="/images/banner-3.png" alt="banner-3" className="h-screen" width="100%" />
                        </div>
                    </OwlCarousel>

                    <div className="custom-shape-divider-bottom-1638383354 z-10">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                        </svg>
                    </div>
                </section>

                <section className="relative py-7">
                    <div class="custom-shape-divider-top-1638392466">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                        </svg>
                    </div>
                    <div className="absolute inset-0 z-10">
                        <div className="flex flex-col lg:flex-row justify-center items-center">
                            <div className="bg-pink mx-3 w-60 border rounded-tl-2xl py-11 px-7 rounded-br-2xl flex flex-col justify-start items-center transform scale-100 hover:scale-105 transition duration-200 ease-in-out mb-3 animate__animated animate__fadeInDown wow">
                                <img src="/images/filter_icon.svg" alt="filter-icon" />
                                <h1 className="text-lg font-bold text-center text-white mt-5">BUY REPLACEMENT FILTERS</h1>
                            </div>
                            <div className="bg-ash mx-3 w-60 border rounded-tl-2xl py-11 px-7 rounded-br-2xl flex flex-col justify-start items-center transform scale-100 hover:scale-105 transition duration-200 ease-in-out mb-3 animate__animated animate__fadeInDown animate__delay-1s wow">
                                <img src="/images/setup_brita_icon.svg" alt="filter-icon" />
                                <h1 className="text-lg font-bold text-center text-white mt-5">BUY REPLACEMENT FILTERS</h1>
                            </div>
                            <div className="bg-olive mx-3 w-60 border rounded-tl-2xl py-11 px-7 rounded-br-2xl flex flex-col justify-start items-center transform scale-100 hover:scale-105 transition duration-200 ease-in-out mb-3 animate__animated animate__fadeInDown animate__delay-2s wow">
                                <img src="/images/compare_icon.svg" alt="filter-icon" />
                                <h1 className="text-lg font-bold text-center text-white mt-5">BUY REPLACEMENT FILTERS</h1>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default Home;
