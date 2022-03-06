import Layout from './../Components/Layout';
import Breadcrumb from './../Components/Breadcrumb';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import { categoryProducts, getProductDetails } from '../Api';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import InquiryModal from '../Components/InquiryModal';

const Product = () => {

    const [pageTitle, setPageTitle] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [currentImage, setCurrentImage] = useState('');
    const { product, category } = useParams();
    const [productDetails, setProductDetails] = useState({});
    const [images, setImages] = useState([]);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [popUpData, setPopUpData] = useState({});

    useEffect(() => {
        const getAPIdata = async () => {
            const { data: productDetailsData } = await getProductDetails(product);
            const { data: relatedProductsData } = await categoryProducts(category);
            setRelatedProducts(relatedProductsData[0].attributes.products.data);
            setProductDetails(productDetailsData[0].attributes);
            setCurrentImage(productDetailsData[0].attributes.images.data[0].attributes.url);
            setImages(productDetailsData[0].attributes.images.data);
        }
        getAPIdata();
    }, [product, category]);

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
                items: 4,
                loop: true
            },
            1600: {
                items: 6,
                loop: true
            }
        }
    }

    return (
        <Layout>
            <Breadcrumb title={product} cateogry={category} setProductCategory={setProductCategory} setPageTitle={setPageTitle} />
            <InquiryModal
                setShowModal={setShowModal}
                showModal={showModal}
                popUpData={popUpData}
            />
            <section className="my-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="flex flex-col lg:flex-row-reverse">
                            <div className="product-img border flex justify-center items-center rounded-xl">
                                {productDetails?.images?.data ? <img className="h-auto w-auto" src={currentImage} alt="Violet.png" /> :
                                    <div className="h-full w-full bg-gray-300 animate-pulse" />
                                }

                            </div>
                            <div className="flex flex-row lg:flex-col thumb-area">
                                {images.length ?
                                    <>
                                        {
                                            images.map((image) => (
                                                <img
                                                    key={image.attributes.name}
                                                    onClick={() => setCurrentImage(image.attributes.url)}
                                                    className="h-20 w-auto mx-2 my-1 hover:border-blue-400 hover:shadow-xl shadow transition duration-300 ease-in-out cursor-pointer rounded border"
                                                    src={image.attributes.formats.thumbnail.url} alt={image.attributes.name}
                                                />
                                            ))
                                        }
                                    </>
                                    : <>
                                        {[...Array(5)].map((_, index) => (
                                            <div key={'item' + index} className="p-20 animate-pulse mx-2 my-1 h-20 w-14 bg-gray-500 text-transparent" />
                                        ))}
                                    </>

                                }
                            </div>
                        </div>
                        <div className="lg:mx-4">
                            <h1 className="text-gray-600 text-xl lg:text-3xl font-semibold text-left pb-10">
                                {productCategory} {pageTitle}
                            </h1>

                            {productDetails?.description ? <p className="text-base lg:text-lg text-gray-600"> {productDetails?.description} </p> :
                                <div className="h-40 w-full bg-gray-300 animate-pulse rounded-xl" />
                            }


                            <div className="mt-20">
                                <h1 className="text-gray-600 text-xl lg:text-3xl font-semibold text-left pb-5">
                                    Specificaiton
                                </h1>
                                {productDetails?.specification ?
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{productDetails.specification}</ReactMarkdown> :
                                    <div className="h-40 w-full bg-gray-300 animate-pulse rounded-xl" />
                                }
                            </div>

                            <div className='mt-10'>
                                <button onClick={() => {
                                    setShowModal(true);
                                    setPopUpData(productDetails && productDetails)
                                }} className='px-4 py-4 bg-[#66c6dc] text-white rounded-lg hover:shadow-xl transition duration-200 ease-in'>
                                    Inquiry about this product
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* related product section */}
            <section className="mt-20 bg-light-blue py-20">
                <div className="container mx-auto">
                    <h1 className="text-2xl text-gray-600 lg:text-3xl font-bold text-left">Related Products</h1>
                    {relatedProducts.length ? <>
                        <OwlCarousel {...carousel3} className="owl-theme w-full my-10">
                            {relatedProducts.map((product) => (
                                <div key={product.attributes.name} className="item h-82 w-63 carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block lg:w-auto relative group animate__animated animate__fadeIn wow">
                                    {product.attributes.images.data ?
                                        <img
                                            className="transform scale-100 h-80 group-hover:scale-110 transition duration-150 ease-in-out"
                                            src={product.attributes.images.data[0].attributes.url} alt={product.attributes.name}
                                        /> :
                                        <img
                                            className="transform scale-100 h-80 group-hover:scale-110 transition duration-150 ease-in-out"
                                            src='/images/image-error.png' alt='error'
                                        />
                                    }

                                    <h1 className="flex px-4 py-4 custom-line-clamp-2 absolute bottom-0 text-white w-full bg-primary text-sm justify-center items-center">
                                        {product.attributes.name}
                                    </h1>

                                    <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                        <Link to={`/products/${category}/${product.attributes.code}`} className="flex items-center rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                            <i className="bi bi-eye-fill text-xl px-3"></i>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </OwlCarousel>
                    </> : <OwlCarousel {...carousel3} className="owl-theme w-full my-10">
                        {[...Array(10)].map((_, i) => (
                            <div key={'demo' + i} className="item h-82 w-63 carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block lg:w-auto relative group animate__animated animate__fadeIn wow animate__delay-1s">
                                <div
                                    className="transform h-72 bg-gray-300 scale-100 group-hover:scale-110 transition duration-150 ease-in-out"
                                />

                                <div className="p-10 animate-pulse w-full lg:w-96 bg-gray-500 text-transparent block h-full" />
                            </div>
                        ))}
                    </OwlCarousel>}

                </div>
            </section>
        </Layout>
    )
}

export default Product