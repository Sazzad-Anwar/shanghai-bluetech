import Layout from './../Components/Layout';
import Breadcrumb from './../Components/Breadcrumb';
import OwlCarousel from 'react-owl-carousel';
import { Tabs, Steps, Image } from 'antd';

const { TabPane } = Tabs;
const { Step } = Steps;

const AboutUs = () => {

    let carousel = {
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
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
                loop: true
            },
            1400: {
                items: 4,
                loop: true
            }
        }
    }

    let carousel2 = {

        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        dots: false,
        animateOut: 'animate__backOutLeft',
        animateIn: 'animate__fadeInRight',
        responsive: {
            0: {
                items: 1,
                loop: true,
                margin: 50
            },
            600: {
                items: 1,
                loop: true,
            },
            1024: {
                items: 2,
                loop: true,
                margin: 10,
            },
            1280: {
                items: 3,
                loop: true,
                margin: 10,
            },
            1400: {
                items: 4,
                loop: true,
                margin: 10,
            }
        }
    }

    let carousel3 = {

        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        dots: false,
        animateOut: 'animate__backOutLeft',
        animateIn: 'animate__fadeInRight',
        responsive: {
            0: {
                items: 1,
                margin: 50
            },
            600: {
                items: 1,
            },
            1024: {
                items: 2,
                margin: 10,
            },
            1280: {
                items: 3,
                margin: 10,
            },
            1400: {
                items: 5,
                margin: 10,
            }
        }
    }


    return (
        <Layout>
            <Breadcrumb title="about-us" bgImage="/images/about-bluetech.jpg" />

            <section className="my-10">
                <div className="container mx-auto">
                    <h1 className="text-gray-600 text-2xl lg:text-4xl font-semibold text-center pb-3">
                        BLUETECH WATER TREATMENT TECHNOLOGY
                    </h1>
                </div>
            </section>

            {/* video introduction */}
            <section className="my-20">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="text-right overflow-hidden">
                            <iframe className="border rounded-xl shadow-lg" width="560" height="315" src="https://www.youtube.com/embed/TsImAOX6lqc" title="Shanghai Bluetech" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div>
                            <h1 className="text-xl lg:text-3xl text-gray-600 text-center lg:text-left font-semibold mb-6">
                                Shanghai Bluetech Co.Ltd
                            </h1>
                            <p className="text-lg text-gray-600 block mt-6">
                                Shanghai Bluetech Co., Ltd. was founded in 2003 and mainly undertakes research and development of water purification technologies and the production of water purification technologies and the production of drinking water filtration systems. Our company upholds the ideals of marking more healthy purified water with greater taste and care for the public's health. Our company was located in Nanqiao Town, Fengxian District in Shanghai with convenient transportation. It is 35km from Pudong international airport, 25km from Hongqiao airport and 25km from Luchao Deepwater port.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* company profile */}
            <section className="my-20 py-20">
                <div className="container mx-auto">
                    <h1 className="text-gray-600 text-2xl lg:text-4xl font-semibold text-center pb-3">
                        Company Profile
                    </h1>
                    <OwlCarousel className='owl-theme' {...carousel}>
                        <div className="item my-5">
                            <div className="bg-white border rounded-xl shadow-xl overflow-hidden group">
                                <img className="w-auto block h-auto card-image" src="/images/OEM.png" alt="oem" />
                                <p className="text-base p-6 text-gray-600 block h-52">
                                    Factory automation is used in our factory to ensure the precise accuracy of our products and as well as improve the yield of our products. this dramatically removes human errors and strengthens our production capability.
                                </p>
                            </div>
                        </div>

                        <div className="item my-5">
                            <div className="bg-white border rounded-xl shadow-xl overflow-hidden group">
                                <img className="w-auto block h-auto card-image" src="/images/OEM.png" alt="oem" />
                                <p className="text-base p-6 text-gray-600 block h-52">
                                    Every product produced in Shanghai Bluetech CO.LTD is precisely engineered to be perfect. The products Produced in Shanghai Bluetech CO.LTD has always maintained the highest standard of quality and will continue to do so in the prolonged future. Shanghai Bluetech promises to improve its quality cont
                                </p>
                            </div>
                        </div>

                        <div className="item my-5">
                            <div className="bg-white border rounded-xl shadow-xl overflow-hidden group">
                                <img className="w-auto block h-auto card-image" src="/images/OEM.png" alt="oem" />
                                <p className="text-base p-6 text-gray-600 block h-52">
                                    With highly skilled trained workers and production units, Bluetech is able to deliver the best possible quality products in the least amount of time. Bluetech also ensures the quality of life of the workers and the production team.
                                </p>
                            </div>
                        </div>

                        <div className="item my-5">
                            <div className="bg-white border rounded-xl shadow-xl overflow-hidden group">
                                <img className="w-auto block h-auto card-image" src="/images/OEM.png" alt="oem" />
                                <p className="text-base p-6 text-gray-600 block h-52">
                                    Unmatched charismatic labor of workers and brilliant development team behind it ensures the best production process responsible for making the product safe for everyone including the consumers and the producers.
                                </p>
                            </div>
                        </div>

                        <div className="item my-5">
                            <div className="bg-white border rounded-xl shadow-xl overflow-hidden group">
                                <img className="w-auto block h-auto card-image" src="/images/OEM.png" alt="oem" />
                                <p className="text-base p-6 text-gray-600 block h-52">
                                    Unmatched charismatic labor of workers and brilliant development team behind it ensures the best production process responsible for making the product safe for everyone including the consumers and the producers.
                                </p>
                            </div>
                        </div>

                    </OwlCarousel>
                </div>
            </section>

            {/* company timeline */}
            <section className="my-20">
                <div className="container mx-auto">
                    <h1 className="text-gray-600 text-2xl lg:text-4xl font-semibold text-center my-10">
                        Timeline
                    </h1>
                    <Tabs tabPosition='left' size="large">
                        <TabPane tab="2012-01" key="2012-01">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <img className="rounded-xl" src="/images/time-line-1.png" alt="time-line-1" />
                                <div className="p-0 lg:p-8 flex flex-col justify-center">
                                    <p className="text-base text-tertiary font-semibold my-2">2012-01</p>
                                    <h1 className="text-xl lg:text-2xl font-bold">German TUV food grade certificate</h1>
                                    <p className="text-base my-4">This year Shanghai Bluetech passed the German TUV food-grade certification program. that allows Bluetech to have an impactful business on the EU filter market.</p>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="2003-01" key="2003-01">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <img className="rounded-xl" src="/images/time-line-2.png" alt="time-line-1" />
                                <div className="p-0 lg:p-8 flex flex-col justify-center">
                                    <p className="text-base text-tertiary font-semibold my-2">2003-01</p>
                                    <h1 className="text-xl lg:text-2xl font-bold">Company formation</h1>
                                    <p className="text-base my-4">Shanghai Bluetech was founded in 2003</p>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="2008-01" key="2008-01">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <img className="rounded-xl" src="/images/time-line-3.png" alt="time-line-1" />
                                <div className="p-0 lg:p-8 flex flex-col justify-center">
                                    <p className="text-base text-tertiary font-semibold my-2">2008-01</p>
                                    <h1 className="text-xl lg:text-2xl font-bold">Bluetech became a high-tech company</h1>
                                    <p className="text-base my-4">Shanghai Bluetech CO.LTD first time became the high-tech company in this field of industry. This is a big event for the Company.</p>
                                </div>
                            </div>
                        </TabPane>
                    </Tabs>
                </div>
            </section>

            {/* what can we do */}
            <section className="my-20 py-20 bg-light-blue">
                <div className="container mx-auto">
                    <h1 className="text-gray-600 text-2xl lg:text-4xl font-semibold text-center my-10">
                        What can we do?
                    </h1>

                    <OwlCarousel {...carousel2} className="owl-theme mx-auto">
                        <div className="w-full sm:w-80 shadow-xl rounded-xl overflow-hidden bg-transparent border-2 border-white my-5">
                            <div className='p-5 text-center flex justify-center items-center'>
                                <div className="h-12 w-12">
                                    <img className='p-3 rounded-full bg-dark-blue' src="/images/design.png" alt="design" />
                                </div>
                            </div>
                            <div className="h-20">
                                <p className='px-3 text-lg font-semibold text-center'>
                                    OEM production of available designs
                                </p>
                            </div>
                        </div>

                        <div className="w-full sm:w-80 shadow-xl rounded-xl overflow-hidden bg-transparent border-2 border-white my-5">
                            <div className='p-5 text-center flex justify-center items-center'>
                                <div className="h-12 w-12">
                                    <img className='p-3 rounded-full bg-dark-blue' src="/images/time.png" alt="time" />
                                </div>
                            </div>
                            <div className="h-20">
                                <p className='px-3 text-lg font-semibold text-center'>
                                    Production in required time and quantity
                                </p>
                            </div>
                        </div>

                        <div className="w-full sm:w-80 shadow-xl rounded-xl overflow-hidden bg-transparent border-2 border-white my-5">
                            <div className='p-5 text-center flex justify-center items-center'>
                                <div className="h-12 w-12">
                                    <img className='p-3 rounded-full bg-dark-blue' src="/images/flight.png" alt="flight" />
                                </div>
                            </div>
                            <div className="h-20">
                                <p className='px-3 text-lg font-semibold text-center'>
                                    Ensure production and shipment quality
                                </p>
                            </div>
                        </div>

                        <div className="w-full sm:w-80 shadow-xl rounded-xl overflow-hidden bg-transparent border-2 border-white my-5">
                            <div className='p-5 text-center flex justify-center items-center'>
                                <div className="h-12 w-12">
                                    <img className='p-3 rounded-full bg-dark-blue' src="/images/place.png" alt="place" />
                                </div>
                            </div>
                            <div className="h-20">
                                <p className='px-3 text-lg font-semibold text-center'>
                                    Keep track of the product for the customer during shipment
                                </p>
                            </div>
                        </div>

                        <div className="w-full sm:w-80 shadow-xl rounded-xl overflow-hidden bg-transparent border-2 border-white my-5">
                            <div className='p-5 text-center flex justify-center items-center'>
                                <div className="h-12 w-12">
                                    <img className='p-3 rounded-full bg-dark-blue' src="/images/support_agent.png" alt="support_agent" />
                                </div>
                            </div>
                            <div className="h-20">
                                <p className='px-3 text-lg font-semibold text-center'>
                                    Provide technical support for customers after sales
                                </p>
                            </div>
                        </div>
                    </OwlCarousel>

                    <div className='my-10 p-5 shadow-xl border-2 border-white rounded-xl text-center'>
                        <Steps size="small" current={8}>
                            <Step title={<span className='font-semibold'>Choose Your design</span>} />
                            <Step title={<span className='font-semibold'>Cost estimation</span>} />
                            <Step title={<span className='font-semibold'>Design confirmation</span>} />
                            <Step title={<span className='font-semibold'>Orders and payment</span>} />
                            <Step title={<span className='font-semibold'>Transaction completion</span>} />
                            <Step title={<span className='font-semibold'>Sales and logistic operation</span>} />
                            <Step title={<span className='font-semibold'>Shipment arrived</span>} />
                            <Step title={<span className='font-semibold'>Enjoy cleaner water</span>} />
                        </Steps>
                    </div>
                </div>
            </section>

            {/* what can we do */}
            <section className="my-20">
                <div className="container mx-auto">
                    <h1 className="text-gray-600 text-2xl lg:text-4xl font-semibold text-center my-10">
                        Partners
                    </h1>

                    <OwlCarousel {...carousel2} className="owl-theme mx-auto">
                        <div className="w-full sm:w-80 h-36 flex justify-center items-center p-4 shadow-xl rounded-xl overflow-hidden bg-transparent border-2 my-5">
                            <img className='h-auto flex rounded-lg' src="/images/amazon.png" alt="amazon" />
                        </div>
                        <div className="w-full sm:w-80 h-36 flex justify-center items-center p-4 shadow-xl rounded-xl overflow-hidden bg-transparent border-2 my-5">
                            <img className='h-auto flex rounded-lg' src="/images/walmart.png" alt="walmart" />
                        </div>
                        <div className="w-full sm:w-80 h-36 flex justify-center items-center p-4 shadow-xl rounded-xl overflow-hidden bg-transparent border-2 my-5">
                            <img className='h-auto flex rounded-lg' src="/images/alibaba.svg" alt="alibaba" />
                        </div>
                        <div className="w-full sm:w-80 h-36 flex justify-center items-center p-4 shadow-xl rounded-xl overflow-hidden bg-transparent border-2 my-5">
                            <img className='h-auto flex rounded-lg' src="/images/PayPal.svg" alt="paypal" />
                        </div>
                    </OwlCarousel>
                </div>
            </section>

            {/* what can we do */}
            <section className="my-20 py-20 bg-light-blue">
                <div className="container mx-auto">
                    <h1 className="text-gray-600 text-2xl lg:text-4xl font-semibold text-center my-10">
                        Company's Achievement and Certifiacations
                    </h1>

                    <OwlCarousel {...carousel3} className="owl-theme md:mx-auto">
                        <div className="shadow-xl w-auto sm:w-64 p-0 flex justify-center items-center rounded-xl overflow-hidden bg-transparent border-4 border-blue-900 my-5">
                            <Image className='h-96 w-full rounded-lg' src="/images/cert-1.png" alt="cert-1" />
                        </div>
                        <div className="shadow-xl w-auto sm:w-64 p-0 flex justify-center items-center rounded-xl overflow-hidden bg-transparent border-4 border-blue-900 my-5">
                            <Image className='h-96 w-full rounded-lg' src="/images/cert-2.png" alt="cert-2" />
                        </div>
                        <div className="shadow-xl w-auto sm:w-64 p-0 flex justify-center items-center rounded-xl overflow-hidden bg-transparent border-4 border-blue-900 my-5">
                            <Image className='h-96 w-full rounded-lg' src="/images/cert-3.png" alt="cert-3" />
                        </div>
                        <div className="shadow-xl w-auto sm:w-64 p-0 flex justify-center items-center rounded-xl overflow-hidden bg-transparent border-4 border-blue-900 my-5">
                            <Image className='h-96 w-full rounded-lg' src="/images/cert-4.png" alt="cert-4" />
                        </div>
                        <div className="shadow-xl w-auto sm:w-64 p-0 flex justify-center items-center rounded-xl overflow-hidden bg-transparent border-4 border-blue-900 my-5">
                            <Image className='h-96 w-full rounded-lg' src="/images/cert-5.png" alt="cert-5" />
                        </div>
                        <div className="shadow-xl w-auto sm:w-64 p-0 flex justify-center items-center rounded-xl overflow-hidden bg-transparent border-4 border-blue-900 my-5">
                            <Image className='h-96 w-full rounded-lg' src="/images/cert-6.png" alt="cert-6" />
                        </div>
                    </OwlCarousel>
                </div>
            </section>
        </Layout>
    )
}

export default AboutUs
