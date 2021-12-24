import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { categoryProducts, getNewModelProducts } from '../Api';
import Breadcrumb from '../Components/Breadcrumb';
import Layout from '../Components/Layout';

const Products = () => {
    const [pageTitle, setPageTitle] = useState('')
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getAPIData = async () => {
            const { data: productsData } = await categoryProducts(category);
            setProducts(productsData[0].attributes.products.data);
        };

        const getNewModelProductAPI = async (filtration) => {
            const { data: productsData } = await getNewModelProducts(filtration);
            setProducts(productsData);
        };

        if (category === 'new-models') {
            getNewModelProductAPI('newModel');
        }
        else if (category === 'latest-models') {
            getNewModelProductAPI('latest');
        }
        else {
            getAPIData();
        }

    }, [category]);

    return (
        <Layout>
            <Breadcrumb title={category} setPageTitle={setPageTitle} />
            <section className="my-10">
                <div className="container mx-auto">
                    <h1 className="text-gray-600 text-xl lg:text-4xl font-semibold text-center pb-10">{pageTitle}</h1>
                    <div className="grid grid-cols-1 mb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-4 sm:gap-x-4 sm:gap-y-6">
                        {products.length ? <>
                            {products.map((product, index) => (
                                <div key={product.attributes.name + index} className="item h-82 w-63 carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block lg:w-auto relative group animate__animated animate__fadeIn wow">
                                    <img
                                        className="transform scale-100 h-80 group-hover:scale-110 transition duration-150 ease-in-out"
                                        src={product.attributes.images.data[0].attributes.formats.thumbnail.url} alt={product.attributes.images.data[0].attributes.alternativeText}
                                    />

                                    <h1 className="flex absolute bottom-0 py-3 text-white w-full bg-primary text-xl justify-center items-center">
                                        {product.attributes.name}
                                    </h1>

                                    <div className="absolute inset-0 rounded-lg bg-blurBg opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in-out">
                                        <Link to={`/products/${category}/${product.attributes.code}`} className="flex items-center rounded-lg shadow-lg hover:text-white px-3 py-2 bg-primary text-white">
                                            <i className="bi bi-eye-fill text-xl px-3"></i>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </> : <>
                            {[...Array(10)].map((_, i) => (
                                <div key={'demo' + i} className="item h-82 carousel-img border rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col justify-center items-center lg:block w-full relative group animate__animated animate__fadeIn wow animate__delay-1s">
                                    <div
                                        className="transform h-72 bg-gray-300 scale-100 group-hover:scale-110 transition duration-150 ease-in-out"
                                    />

                                    <div className="p-10 animate-pulse w-full lg:w-96 bg-gray-500 text-transparent block h-10" />
                                </div>
                            ))}
                        </>}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Products
