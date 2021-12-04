import Layout from './../Components/Layout';
import Breadcrumb from './../Components/Breadcrumb';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';

const Product = () => {

    const [pageTitle, setPageTitle] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [currentImage, setCurrentImage] = useState('/images/Violet.png');
    const { product, category } = useParams();

    useEffect(() => {
        document.title = 'Bluetech | ' + pageTitle;
    }, [pageTitle]);


    let carousel3 = {
        margin: 50,
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

    return (
        <Layout>
            <Breadcrumb title={product} cateogry={category} setProductCategory={setProductCategory} setPageTitle={setPageTitle} />
            <section className="my-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="flex flex-col lg:flex-row-reverse">
                            <div className="product-img border flex justify-center items-center rounded-xl">
                                <img className="h-auto w-auto" src={currentImage} alt="Violet.png" />
                            </div>
                            <div className="flex flex-row lg:flex-col thumb-area">
                                <img
                                    onClick={(e) => setCurrentImage(e.target.src)}
                                    className="h-20 w-auto mx-2 my-1 hover:border-blue-400 hover:shadow-xl shadow transition duration-300 ease-in-out cursor-pointer rounded border"
                                    src="/images/Violet.png" alt="Violet.png"
                                />
                                <img
                                    onClick={(e) => setCurrentImage(e.target.src)}
                                    className="h-20 w-auto mx-2 my-1 hover:border-blue-400 hover:shadow-xl shadow transition duration-300 ease-in-out cursor-pointer rounded border"
                                    src="/images/Orchid.png" alt="Orchid.png"
                                />
                                <img
                                    onClick={(e) => setCurrentImage(e.target.src)}
                                    className="h-20 w-auto mx-2 my-1 hover:border-blue-400 hover:shadow-xl shadow transition duration-300 ease-in-out cursor-pointer rounded border"
                                    src="/images/Tulip.png" alt="Tulip.png"
                                />
                                <img
                                    onClick={(e) => setCurrentImage(e.target.src)}
                                    className="h-20 w-auto mx-2 my-1 hover:border-blue-400 hover:shadow-xl shadow transition duration-300 ease-in-out cursor-pointer rounded border"
                                    src="/images/Violet.png" alt="Violet.png"
                                />
                                <img
                                    onClick={(e) => setCurrentImage(e.target.src)}
                                    className="h-20 w-auto mx-2 my-1 hover:border-blue-400 hover:shadow-xl shadow transition duration-300 ease-in-out cursor-pointer rounded border"
                                    src="/images/Orchid.png" alt="Orchid.png"
                                />

                            </div>
                        </div>
                        <div className="mx-4">
                            <h1 className="text-gray-600 text-xl lg:text-3xl font-semibold text-left pb-10">
                                {productCategory} {pageTitle}
                            </h1>
                            <p className="text-base lg:text-lg text-gray-600">
                                Violet is Bluetech's Top selling water filter pitcher model by far. Everyone loves this design for it's simplicity and high capacity to hold more water. It come's in many different colors and is also compatible with most filters available in the market. It's easy to set up and use. All these features combines makes it one of the most desirable models of water filter pitchers in our catalog.
                            </p>

                            <div className="mt-7">
                                <h1 className="text-gray-600 text-xl lg:text-3xl font-semibold text-left pb-5">
                                    Specificaiton
                                </h1>
                                <ul className="list-none">
                                    <li className="text-gray-600 text-base lg:text-lg">
                                        It has a 4 Liter capacity
                                    </li>
                                    <li className="text-gray-600 text-base lg:text-lg">
                                        It comes in all colors
                                    </li>
                                    <li className="text-gray-600 text-base lg:text-lg">
                                        It is compatible with Brita classic, Brita Maxtra, Maxtra+, Bluetech filters.
                                    </li>
                                    <li className="text-gray-600 text-base lg:text-lg">
                                        For more details send us an inquiry
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* related product section */}
            <section className="my-20 bg-light-blue py-20">
                <div className="container mx-auto">
                    <h1 className="text-2xl text-gray-600 lg:text-3xl font-bold text-left">Related Products</h1>
                    <OwlCarousel {...carousel3} className="owl-theme w-full my-10">
                        <div className="item w-full carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block lg:w-auto relative group animate__animated animate__fadeInDown wow animate__delay-1s">
                            <img
                                className="transform scale-100 group-hover:scale-110 transition duration-150 ease-in-out"
                                src="/products/Violet-529.webp" alt="Violet-529.webp"
                            />

                            <h1 className="flex py-3 text-white w-full bg-primary text-xl justify-center items-center">
                                Violet-529
                            </h1>

                            <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                <Link to="/products/water-filter-pitchers/Violet-529" className="flex items-center rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                    <i className="bi bi-eye-fill text-xl px-3"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="item w-full carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block lg:w-auto relative group animate__animated animate__fadeInDown wow animate__delay-1s">
                            <img
                                className="transform scale-100 group-hover:scale-110 transition duration-150 ease-in-out"
                                src="/products/Orchid-530.webp" alt="Orchid-530.webp"
                            />

                            <h1 className="flex py-3 w-full text-white bg-primary text-xl justify-center items-center">
                                Orchid-530
                            </h1>

                            <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                <Link to="/products/water-filter-pitchers/Violet-529" className="flex items-center rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                    <i className="bi bi-eye-fill text-xl px-3"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="item w-full carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block lg:w-auto relative group animate__animated animate__fadeInDown wow animate__delay-1s">
                            <img
                                className="transform scale-100 group-hover:scale-110 transition duration-150 ease-in-out"
                                src="/products/Tulip -528.webp" alt="Tulip -528.webp"
                            />

                            <h1 className="flex py-3 w-full text-white bg-primary text-xl justify-center items-center">
                                Tulip-528
                            </h1>

                            <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                <Link to="/products/water-filter-pitchers/Violet-529" className="flex items-center rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                    <i className="bi bi-eye-fill text-xl px-3"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="item w-full carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block lg:w-auto relative group animate__animated animate__fadeInDown wow animate__delay-1s">
                            <img
                                className="transform scale-100 group-hover:scale-110 transition duration-150 ease-in-out"
                                src="/products/Jasmine-523.webp" alt="Jasmine-523.webp"
                            />

                            <h1 className="flex py-3 w-full text-white bg-primary text-xl justify-center items-center">
                                Jasmine-523
                            </h1>

                            <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                <Link to="/products/water-filter-pitchers/Violet-529" className="flex items-center rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                    <i className="bi bi-eye-fill text-xl px-3"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="item w-full carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block lg:w-auto relative group animate__animated animate__fadeInDown wow animate__delay-1s">
                            <img
                                className="transform scale-100 group-hover:scale-110 transition duration-150 ease-in-out"
                                src="/products/Daisy-524.webp" alt="Daisy-524.webp"
                            />

                            <h1 className="flex py-3 w-full text-white bg-primary text-xl justify-center items-center">
                                Daisy-524
                            </h1>

                            <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                <Link to="/products/water-filter-pitchers/Violet-529" className="flex items-center rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                    <i className="bi bi-eye-fill text-xl px-3"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="item w-full carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block lg:w-auto relative group animate__animated animate__fadeInDown wow animate__delay-1s">
                            <img
                                className="transform scale-100 group-hover:scale-110 transition duration-150 ease-in-out"
                                src="/products/Daisy-524.webp" alt="Daisy-524.webp"
                            />

                            <h1 className="flex py-3 w-full text-white bg-primary text-xl justify-center items-center">
                                Daisy-524
                            </h1>

                            <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                <Link to="/products/water-filter-pitchers/Violet-529" className="flex items-center rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                    <i className="bi bi-eye-fill text-xl px-3"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="item w-full carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block lg:w-auto relative group animate__animated animate__fadeInDown wow animate__delay-1s">
                            <img
                                className="transform scale-100 group-hover:scale-110 transition duration-150 ease-in-out"
                                src="/products/Lotus-531.webp" alt="Lotus-531.webp"
                            />

                            <h1 className="flex py-3 w-full text-white bg-primary text-xl justify-center items-center">
                                Lotus-531
                            </h1>

                            <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                <Link to="/products/water-filter-pitchers/Violet-529" className="flex items-center rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                    <i className="bi bi-eye-fill text-xl px-3"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="item w-full carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block lg:w-auto relative group animate__animated animate__fadeInDown wow animate__delay-1s">
                            <img
                                className="transform scale-100 group-hover:scale-110 transition duration-150 ease-in-out"
                                src="/products/Agave-525.webp" alt="Agave-525.webp"
                            />

                            <h1 className="flex py-3 w-full text-white bg-primary text-xl justify-center items-center">
                                Agave-525
                            </h1>

                            <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                <Link to="/products/water-filter-pitchers/Violet-529" className="flex items-center rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                    <i className="bi bi-eye-fill text-xl px-3"></i>
                                </Link>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </section>
        </Layout>
    )
}

export default Product
