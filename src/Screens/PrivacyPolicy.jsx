import Layout from './../Components/Layout';
import Breadcrumb from './../Components/Breadcrumb';
import { useEffect, useState } from 'react';
import { privacyPolicy } from '../Api';

const PrivacyPolicy = () => {

    const [sections, setSections] = useState([]);

    useEffect(() => {
        const getAPIData = async () => {
            const { data: sectionData } = await privacyPolicy();
            setSections(sectionData.attributes.section);
        };
        getAPIData();
    }, [])

    return (
        <Layout>
            <Breadcrumb title="terms-&-condition" />
            <section className="mt-10 mb-20">
                <div className="container mx-auto">
                    <h1 className="text-gray-600 text-xl lg:text-4xl font-semibold text-center pb-10">Privacy Policy</h1>

                    {sections.length ? <>
                        {sections.map((section, index) => (
                            <div key={section.index} className="my-10 animate__animated animate__fadeIn wow">
                                <h1 className="text-gray-600 text-xl lg:text-2xl font-semibold pb-5">{section.title}</h1>
                                <p className="text-gray-600 text-base">
                                    {section.description}
                                </p>
                            </div>
                        ))}
                    </> : <>
                        {([...Array(10)].map((_, i) => (
                            <div key={i} className="my-10 animate__animated animate__fadeIn wow">
                                <div className="p-5 animate-pulse w-full lg:w-96 bg-gray-300 text-transparent block h-5 rounded-xl my-1" />
                                <div className="p-28 animate-pulse w-full bg-gray-300 text-transparent block h-28 rounded-xl my-1" />
                            </div>
                        )))}
                    </>}


                </div>
            </section>
        </Layout>
    )
}

export default PrivacyPolicy
