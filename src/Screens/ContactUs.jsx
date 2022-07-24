import Layout from './../Components/Layout';
import Breadcrumb from './../Components/Breadcrumb';
import { useEffect, useState } from 'react';
import { getContacts, contactUsSection } from '../Api';

const ContactUs = () => {

    const [contacts, setContacts] = useState([]);
    const [section, setSection] = useState({});
    const [banner, setBanner] = useState('')

    useEffect(() => {
        const getApiData = async () => {
            const { data: contactsData } = await getContacts();
            const { data: sectionsData } = await contactUsSection();
            setSection(sectionsData.attributes.section);
            setContacts(contactsData);
            setBanner(sectionsData.attributes.banner.data.attributes.url)
        }
        getApiData();
    }, [])

    return (
        <Layout>
            <Breadcrumb title="contact-us" bgImage={banner} />
            <section className="my-10">
                <div className="container mx-auto">
                    {section?.title ?
                        <h1 className="text-2xl text-gray-600 lg:text-4xl font-bold text-center">
                            {section.title}
                        </h1> :
                        <div className="h-6 lg:w-1/3 lg:mx-auto rounded-xl bg-gray-300 lg:h-9 animate-pulse text-center"></div>
                    }

                    {section?.description ?
                        <p className='text-base lg:w-2/3 lg:mx-auto text-gray-600 lg:text-lg font-semibold text-center mt-3 mb-3'>
                            {section.description}
                        </p> :
                        <div className="h-4 lg:w-2/3 lg:mx-auto rounded-xl bg-gray-300 lg:h-5 animate-pulse text-center mt-3 mb-3"></div>
                    }
                </div>
            </section>
            <section className="mt-5 mb-20">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                        {contacts.length ? contacts.map(contact => (
                            <div key={contact.id} className="flex w-auto lg:w-96 p-4 border shadow-lg hover:shadow-2xl rounded-xl transition duration-300 ease-in-out animate__animated animate__fadeIn wow">
                                <img className="h-32" src={contact.attributes.image.data.attributes.url} alt={contact.attributes.image.data.attributes.alternativeText} />
                                <div className="ml-3 mt-5">
                                    <h1
                                        className="text-gray-600 text-xl lg:text-2xl font-semibold animate__animated animate__fadeIn wow animate__delay-1s"
                                    >
                                        {contact.attributes.name}
                                    </h1>
                                    <hr className="bg-gray-600 h-0.5 w-full" />
                                    <p className="text-gray-600 text-lg mt-2 animate__animated animate__fadeIn wow animate__delay-2s">
                                        {contact.attributes.designation}
                                    </p>
                                    <p className="text-gray-600 flex items-center text-base mt-2 animate__animated animate__fadeIn wow animate__delay-3s">
                                        <span className="material-icons-outlined mr-2 text-xs">
                                            email
                                        </span>
                                        <span>
                                            {contact.attributes.email}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        )) : <>
                            {[1, 2, 3, 4, 5, 6].map(contact => (
                                <div key={contact} className="flex w-auto lg:w-96 p-4 border shadow-lg hover:shadow-2xl rounded-xl transition duration-300 ease-in-out animate__animated animate__fadeIn wow">
                                    <div className="h-32 w-full bg-gray-300 rounded-xl" />
                                    <div className="ml-3 mt-5">
                                        <div
                                            className="text-bg-300 w-40 text-xl lg:text-2xl font-semibold animate__animated animate__fadeInDown wow animate__delay-1s"
                                        >
                                        </div>
                                        <hr className="bg-gray-300 h-0.5 w-full" />
                                        <div className="bg-gray-300 my-2 rounded-md text-lg mt-2 animate__animated animate__fadeIn wow animate__delay-2s w-40">
                                        </div>
                                        <div className="bg-gray-300 w-40 flex rounded-md items-center text-base mt-2 animate__animated animate__fadeIn wow animate__delay-3s">
                                        </div>
                                    </div>
                                </div>))}
                        </>}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ContactUs
