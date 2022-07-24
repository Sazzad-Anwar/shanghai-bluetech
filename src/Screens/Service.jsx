import Layout from './../Components/Layout';
import Breadcrumb from './../Components/Breadcrumb';
import { Timeline } from 'antd';
import { useEffect, useState } from 'react';
import { getServices, servicePageSection } from '../Api';

const Service = () => {

    const [services, setServices] = useState([]);
    const [section, setSection] = useState({});
    const [banner, setBanner] = useState('')


    useEffect(() => {
        const getApiData = async () => {
            const { data: serviceData } = await getServices();
            const { data: sectionsData } = await servicePageSection();
            setSection(sectionsData.attributes.section[0]);
            setServices(serviceData);
            setBanner(sectionsData.attributes.banner.data.attributes.url)
        }
        getApiData();
    }, [])

    console.log(section);

    return (
        <Layout>
            <Breadcrumb title="Services" bgImage={banner} />
            <section className="my-10">
                <div className="container mx-auto">
                    {section.title ?
                        <h1 className="text-2xl text-gray-600 lg:text-4xl font-bold text-center">
                            {section.title}
                        </h1> :
                        <div className="h-6 lg:w-1/3 lg:mx-auto rounded-xl bg-gray-300 lg:h-9 animate-pulse text-center"></div>
                    }

                    {section.description ?
                        <p className='text-base lg:w-2/3 lg:mx-auto text-gray-600 lg:text-lg font-semibold text-center mt-3 mb-3'>
                            {section.description}
                        </p> :
                        <div className="h-4 lg:w-2/3 lg:mx-auto rounded-xl bg-gray-300 lg:h-5 animate-pulse text-center mt-3 mb-3"></div>
                    }
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {services.length ? services.map(service => (
                            <div key={service.id} className="animate__animated animate__fadeIn wow">
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 shadow-lg p-4 rounded-xl border '>
                                    <img className="h-72 w-auto border rounded-xl" src={service.attributes.images.data[0].attributes.formats.medium.url} alt={service.attributes.title} />
                                    <div className="ml-4">
                                        <h1 className="lg:text-4xl text-xl text-gray-600 font-bold mb-7">{service.attributes.title}</h1>
                                        <p className="text-xl text-gray-600">
                                            {service.attributes.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="my-20 flex justify-center items-center">
                                    <Timeline>
                                        {service.attributes.steps.map(step => (
                                            <Timeline.Item key={step} className="text-2xl text-gray-600">{step}</Timeline.Item>
                                        ))}
                                    </Timeline>
                                </div>
                            </div>
                        )) : <>
                            <div className="animate__animated animate__fadeIn wow">
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 shadow-lg p-4 rounded-xl border '>
                                    <div className="h-72 w-auto border rounded-xl bg-gray-300" />
                                    <div className="ml-4">
                                        <h1 className="h-10 bg-gray-300 rounded-xl font-bold mb-7 text-gray-300">hello</h1>
                                        <p className="h-40 bg-gray-300 rounded-xl"></p>
                                    </div>
                                </div>
                                <div className="my-20 flex justify-center items-center">
                                    <Timeline>
                                        <Timeline.Item className="text-2xl text-gray-300">
                                            <div className="h-6 bg-gray-300 w-40 rounded-xl font-bold mb-7 text-gray-300"></div>
                                        </Timeline.Item>
                                        <Timeline.Item className="text-2xl text-gray-600">
                                            <div className="h-6 bg-gray-300 w-40 rounded-xl font-bold mb-7 text-gray-300"></div>
                                        </Timeline.Item>
                                        <Timeline.Item className="text-2xl text-gray-300">
                                            <div className="h-6 bg-gray-300 w-40 rounded-xl font-bold mb-7"></div>
                                        </Timeline.Item>
                                    </Timeline>
                                </div>
                            </div>
                            <div className="animate__animated animate__fadeIn wow">
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 shadow-lg p-4 rounded-xl border '>
                                    <div className="h-72 w-auto border rounded-xl bg-gray-600" />
                                    <div className="ml-4">
                                        <h1 className="h-10 bg-gray-600 rounded-xl font-bold mb-7 text-gray-600">hello</h1>
                                        <p className="h-40 bg-gray-600 rounded-xl"></p>
                                    </div>
                                </div>
                                <div className="my-20 flex justify-center items-center">
                                    <Timeline>
                                        <Timeline.Item className="text-2xl text-gray-600">
                                            <div className="h-6 bg-gray-600 w-40 rounded-xl font-bold mb-7 text-gray-600"></div>
                                        </Timeline.Item>
                                        <Timeline.Item className="text-2xl text-gray-600">
                                            <div className="h-6 bg-gray-600 w-40 rounded-xl font-bold mb-7 text-gray-600"></div>
                                        </Timeline.Item>
                                        <Timeline.Item className="text-2xl text-gray-600">
                                            <div className="h-6 bg-gray-600 w-40 rounded-xl font-bold mb-7"></div>
                                        </Timeline.Item>
                                    </Timeline>
                                </div>
                            </div>
                        </>}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Service
