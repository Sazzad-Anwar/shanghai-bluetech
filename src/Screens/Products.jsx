import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '../Components/Breadcrumb';
import Layout from '../Components/Layout';

const Products = () => {
    const [pageTitle, setPageTitle] = useState('')
    const { category } = useParams();

    useEffect(() => {
        document.title = 'Bluetech | ' + pageTitle;
    }, [pageTitle])

    return (
        <Layout>
            <Breadcrumb title={category} setPageTitle={setPageTitle} />
            <section className="my-10">
                <div className="container mx-auto">
                    <h1 className="text-gray-600 text-xl lg:text-4xl font-semibold text-center pb-10">{pageTitle}</h1>
                    <div className="grid grid-cols-1 mb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-4 gap-y-4 sm:gap-x-4 sm:gap-y-6">
                        <div className="item w-full h-80 carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block lg:w-auto relative group animate__animated animate__fadeInDown wow animate__delay-1s">
                            <img
                                className="transform scale-100 h-72 group-hover:scale-110 transition duration-150 ease-in-out"
                                src="/products/Violet-529.webp" alt="Violet-529.webp"
                            />

                            <h1 className="flex absolute bottom-0 py-3 text-white w-full bg-primary text-xl justify-center items-center">
                                Violet-529
                            </h1>

                            <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                <Link to="/products/water-filter-pitchers/Violet-529" className="flex items-center rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                    <i className="bi bi-eye-fill text-xl px-3"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="item w-full h-80 carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block lg:w-auto relative group animate__animated animate__fadeInDown wow animate__delay-1s">
                            <img
                                className="transform h-72 scale-100 group-hover:scale-110 transition duration-150 ease-in-out"
                                src="/products/Orchid-530.webp" alt="Orchid-530.webp"
                            />

                            <h1 className="flex absolute bottom-0 py-3 w-full text-white bg-primary text-xl justify-center items-center">
                                Orchid-530
                            </h1>

                            <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                <Link to="/products/water-filter-pitchers/Violet-529" className="flex items-center rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                    <i className="bi bi-eye-fill text-xl px-3"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="item w-full h-80 carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block lg:w-auto relative group animate__animated animate__fadeInDown wow animate__delay-1s">
                            <img
                                className="transform h-72 scale-100 group-hover:scale-110 transition duration-150 ease-in-out"
                                src="/products/Tulip-528.webp" alt="Tulip -528.webp"
                            />

                            <h1 className="flex absolute bottom-0 py-3 w-full text-white bg-primary text-xl justify-center items-center">
                                Tulip-528
                            </h1>

                            <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                <Link to="/products/water-filter-pitchers/Violet-529" className="flex items-center rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                    <i className="bi bi-eye-fill text-xl px-3"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="item w-full h-80 carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block lg:w-auto relative group animate__animated animate__fadeInDown wow animate__delay-1s">
                            <img
                                className="transform h-72 scale-100 group-hover:scale-110 transition duration-150 ease-in-out"
                                src="/products/Jasmine-523.webp" alt="Jasmine-523.webp"
                            />

                            <h1 className="flex absolute bottom-0 py-3 w-full text-white bg-primary text-xl justify-center items-center">
                                Jasmine-523
                            </h1>

                            <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                <Link to="/products/water-filter-pitchers/Violet-529" className="flex items-center rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                    <i className="bi bi-eye-fill text-xl px-3"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="item w-full h-80 carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block lg:w-auto relative group animate__animated animate__fadeInDown wow animate__delay-1s">
                            <img
                                className="transform h-72 scale-100 group-hover:scale-110 transition duration-150 ease-in-out"
                                src="/products/Daisy-524.webp" alt="Daisy-524.webp"
                            />

                            <h1 className="flex absolute bottom-0 py-3 w-full text-white bg-primary text-xl justify-center items-center">
                                Daisy-524
                            </h1>

                            <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                <Link to="/products/water-filter-pitchers/Violet-529" className="flex items-center rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                    <i className="bi bi-eye-fill text-xl px-3"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="item w-full h-80 carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block lg:w-auto relative group animate__animated animate__fadeInDown wow animate__delay-1s">
                            <img
                                className="transform h-72 scale-100 group-hover:scale-110 transition duration-150 ease-in-out"
                                src="/products/Daisy-524.webp" alt="Daisy-524.webp"
                            />

                            <h1 className="flex absolute bottom-0 py-3 w-full text-white bg-primary text-xl justify-center items-center">
                                Daisy-524
                            </h1>

                            <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                <Link to="/products/water-filter-pitchers/Violet-529" className="flex items-center rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                    <i className="bi bi-eye-fill text-xl px-3"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="item w-full h-80 carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block lg:w-auto relative group animate__animated animate__fadeInDown wow animate__delay-1s">
                            <img
                                className="transform h-72 scale-100 group-hover:scale-110 transition duration-150 ease-in-out"
                                src="/products/Lotus-531.webp" alt="Lotus-531.webp"
                            />

                            <h1 className="flex absolute bottom-0 py-3 w-full text-white bg-primary text-xl justify-center items-center">
                                Lotus-531
                            </h1>

                            <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                <Link to="/products/water-filter-pitchers/Violet-529" className="flex items-center rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                    <i className="bi bi-eye-fill text-xl px-3"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="item w-full h-80 carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block lg:w-auto relative group animate__animated animate__fadeInDown wow animate__delay-1s">
                            <img
                                className="transform h-72 scale-100 group-hover:scale-110 transition duration-150 ease-in-out"
                                src="/products/Agave-525.webp" alt="Agave-525.webp"
                            />

                            <h1 className="flex absolute bottom-0 py-3 w-full text-white bg-primary text-xl justify-center items-center">
                                Agave-525
                            </h1>

                            <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                <Link to="/products/water-filter-pitchers/Violet-529" className="flex items-center rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                    <i className="bi bi-eye-fill text-xl px-3"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="item w-full h-80 carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block lg:w-auto relative group animate__animated animate__fadeInDown wow animate__delay-1s">
                            <img
                                className="transform h-72 scale-100 group-hover:scale-110 transition duration-150 ease-in-out"
                                src="/products/Azalea-526.webp" alt="Azalea-526.webp"
                            />

                            <h1 className="flex absolute bottom-0 py-3 w-full text-white bg-primary text-xl justify-center items-center">
                                Azalea-526
                            </h1>

                            <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                <Link to="/products/water-filter-pitchers/Violet-529" className="flex items-center rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                    <i className="bi bi-eye-fill text-xl px-3"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="item w-full h-80 carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block lg:w-auto relative group animate__animated animate__fadeInDown wow animate__delay-1s">
                            <img
                                className="transform h-72 scale-100 group-hover:scale-110 transition duration-150 ease-in-out"
                                src="/products/IRIS-527.webp" alt="IRIS-527.webp"
                            />

                            <h1 className="flex absolute bottom-0 py-3 w-full text-white bg-primary text-xl justify-center items-center">
                                IRIS-527
                            </h1>

                            <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                <Link to="/products/water-filter-pitchers/Violet-529" className="flex items-center rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                    <i className="bi bi-eye-fill text-xl px-3"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="item w-full h-80 carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block lg:w-auto relative group animate__animated animate__fadeInDown wow animate__delay-1s">
                            <img
                                className="transform h-72 scale-100 group-hover:scale-110 transition duration-150 ease-in-out"
                                src="/products/Rose-528.webp" alt="Rose-528.webp"
                            />

                            <h1 className="flex absolute bottom-0 py-3 w-full text-white bg-primary text-xl justify-center items-center">
                                Rose-528
                            </h1>

                            <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                <Link to="/products/water-filter-pitchers/Violet-529" className="flex items-center rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                    <i className="bi bi-eye-fill text-xl px-3"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="item w-full h-80 carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block lg:w-auto relative group animate__animated animate__fadeInDown wow animate__delay-1s">
                            <img
                                className="transform h-72 scale-100 group-hover:scale-110 transition duration-150 ease-in-out"
                                src="/products/Iris-Mini-527-2.webp" alt="Iris Mini-527-2.webp"
                            />

                            <h1 className="flex absolute bottom-0 py-3 w-full text-white bg-primary text-xl justify-center items-center">
                                Iris Mini-527-2
                            </h1>

                            <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                <Link to="/products/water-filter-pitchers/Violet-529" className="flex items-center rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                    <i className="bi bi-eye-fill text-xl px-3"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="item w-full h-80 carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block lg:w-auto relative group animate__animated animate__fadeInDown wow animate__delay-1s">
                            <img
                                className="transform h-72 scale-100 group-hover:scale-110 transition duration-150 ease-in-out"
                                src="/products/Violetslim-529-2.webp" alt="Violetslim-529-2.webp"
                            />

                            <h1 className="flex absolute bottom-0 py-3 w-full text-white bg-primary text-xl justify-center items-center">
                                Violetslim-529-2
                            </h1>

                            <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                <Link to="/products/water-filter-pitchers/Violet-529" className="flex items-center rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                    <i className="bi bi-eye-fill text-xl px-3"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <h1 className="px-6 py-3 border rounded-lg shadow-lg text-white font-semibold cursor-pointer bg-primary text-center mx-auto">View More</h1>
                    </div>

                </div>
            </section>
        </Layout>
    )
}

export default Products
