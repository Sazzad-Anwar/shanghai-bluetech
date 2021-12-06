import Layout from './../Components/Layout';
import Breadcrumb from './../Components/Breadcrumb';
import { Timeline } from 'antd';

const Service = () => {

    return (
        <Layout>
            <Breadcrumb title="Services" bgImage={'/images/service-bg.webp'} />
            <section className="my-10">
                <div className="container mx-auto">
                    <h1 className="text-gray-600 text-xl lg:text-4xl font-semibold text-center mb-10">Services</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 shadow-lg p-4 rounded-xl border animate__animated animate__fadeInDown wow">
                            <img className="h-72 w-auto border rounded-xl" src="/images/oem.png" alt="oem" />
                            <div className="ml-4">
                                <h1 className="lg:text-4xl text-xl text-gray-600 font-bold mb-7">OEM</h1>
                                <p className="text-xl text-gray-600">
                                    Shanghai Bluetech proudly provides OEM
                                    services to more than 50 renowned companies
                                    worldwide. It produces water filter pitchers,
                                    water jug filters, fast filters, filter papers and
                                    many more.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 shadow-lg p-4 rounded-xl border animate__animated animate__fadeInDown animate__delay-1s wow">
                            <img className="h-72 w-auto border rounded-xl" src="/images/service-breadcrumb-bg.png" alt="odm" />
                            <div className="ml-4">
                                <h1 className="lg:text-4xl text-xl text-gray-600 font-bold mb-7">ODM</h1>
                                <p className="text-xl text-gray-600">
                                    Shanghai Bluetech CO.LTD can also provide user-specific orders. That is a dream come true for many entrepreneurs. Shanghai Bluetech proudly provides ODM services in the US and EU currently. And hopes to broaden the market in the future.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="my-20 flex justify-center items-center">
                        <Timeline>
                            <Timeline.Item className="text-2xl text-gray-600">Demand customization</Timeline.Item>
                            <Timeline.Item className="text-2xl text-gray-600">Confirm sample</Timeline.Item>
                            <Timeline.Item className="text-2xl text-gray-600">Cargo shipment</Timeline.Item>
                        </Timeline>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Service
