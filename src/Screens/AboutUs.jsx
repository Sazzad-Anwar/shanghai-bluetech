import Layout from './../Components/Layout';
import Breadcrumb from './../Components/Breadcrumb';
import OwlCarousel from 'react-owl-carousel';
import { Tabs, Steps, Image } from 'antd';
import { useState, useEffect } from 'react';
import { aboutUsSection, getCertificates, getCompanyDescription, getCompanyProfile, getCompanyTimeline, getPartners, getWorkingProcess, getWorkingSteps } from '../Api';

const { TabPane } = Tabs;
const { Step } = Steps;

const AboutUs = () => {

    const [sections, setSections] = useState([]);
    const [companyDescription, setCompanyDescription] = useState({});
    const [companyProfiles, setCompanyProfiles] = useState([]);
    const [timeLines, setTimeLines] = useState([]);
    const [workingProcesses, setWorkingProcesses] = useState([]);
    const [workingSteps, setWorkingSteps] = useState([]);
    const [partners, setPartners] = useState([]);
    const [certificates, setCertificates] = useState([]);

    useEffect(() => {
        const getApiData = async () => {
            const { data: sectionData } = await aboutUsSection();
            const { data: companyDescriptionData } = await getCompanyDescription();
            const { data: companyProfileData } = await getCompanyProfile();
            const { data: timeLineData } = await getCompanyTimeline();
            const { data: workingProcessData } = await getWorkingProcess();
            const { data: workingStepData } = await getWorkingSteps();
            const { data: partnerData } = await getPartners();
            const { data: certificateData } = await getCertificates();

            setCertificates(certificateData);
            setPartners(partnerData);
            setWorkingSteps(workingStepData);
            setWorkingProcesses(workingProcessData);
            setTimeLines(timeLineData);
            setCompanyProfiles(companyProfileData);
            setCompanyDescription(companyDescriptionData[0].attributes);
            setSections(sectionData.attributes.section);
        }

        getApiData();
    }, []);

    const iframe = () => {
        return { __html: companyDescription.youtubeLink }
    }

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
                    {sections && sections.filter(section => section.index === 1)[0]?.title ?
                        <h1 className="text-2xl text-gray-600 lg:text-4xl font-bold text-center">
                            {sections && sections.filter(section => section.index === 1)[0]?.title}
                        </h1> :
                        <div className="h-6 lg:w-1/3 lg:mx-auto rounded-xl bg-gray-300 lg:h-9 animate-pulse text-center"></div>
                    }

                    {sections && sections.filter(section => section.index === 1)[0]?.description ?
                        <p className='text-base lg:w-2/3 lg:mx-auto text-gray-600 lg:text-lg font-semibold text-center my-5'>
                            {sections && sections.filter(section => section.index === 1)[0]?.description}
                        </p> :
                        <div className="h-4 lg:w-2/3 lg:mx-auto rounded-xl bg-gray-300 lg:h-5 animate-pulse text-center my-5"></div>
                    }
                </div>
            </section>

            {/* video introduction */}
            <section className="my-20">
                <div className="container mx-auto">
                    {companyDescription.title ? <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="text-right overflow-hidden youtube-video">
                            <div dangerouslySetInnerHTML={iframe()}></div>
                        </div>
                        <div>
                            <h1 className="text-xl lg:text-3xl text-gray-600 text-center lg:text-left font-semibold mb-6">
                                {companyDescription.title}
                            </h1>
                            <p className="text-lg text-gray-600 block mt-6">
                                {companyDescription.description}
                            </p>
                        </div>
                    </div> : <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="text-right overflow-hidden">
                            <div className='w-full animate-pulse h-80 bg-gray-300 rounded-lg'></div>
                        </div>
                        <div>
                            <div className="h-7 w-full animate-pulse bg-gray-300 rounded-xl text-center mb-6" />

                            <div className="h-36 animate-pulse bg-gray-300 rounded-xl mt-6" />
                        </div>
                    </div>}

                </div>
            </section>

            {/* company profile */}
            <section className="my-20 py-20">
                <div className="container mx-auto">
                    {sections && sections.filter(section => section.index === 2)[0]?.title ?
                        <h1 className="text-2xl text-gray-600 lg:text-4xl font-bold text-center">
                            {sections && sections.filter(section => section.index === 2)[0]?.title}
                        </h1> :
                        <div className="h-6 lg:w-1/3 lg:mx-auto rounded-xl bg-gray-300 lg:h-9 animate-pulse text-center"></div>
                    }

                    {sections && sections.filter(section => section.index === 2)[0]?.description ?
                        <p className='text-base lg:w-2/3 lg:mx-auto text-gray-600 lg:text-lg font-semibold text-center my-5'>
                            {sections && sections.filter(section => section.index === 2)[0]?.description}
                        </p> :
                        <div className="h-4 lg:w-2/3 lg:mx-auto rounded-xl bg-gray-300 lg:h-5 animate-pulse text-center my-5"></div>
                    }
                    {companyProfiles.length ? <>
                        <OwlCarousel className='owl-theme' {...carousel}>
                            {companyProfiles.map((companyProfile) => (
                                <div key={companyProfile.attributes.createdAt} className="item my-5">
                                    <div className="bg-white border rounded-xl shadow-xl overflow-hidden group">
                                        <img className="w-auto block h-auto card-image" src={companyProfile.attributes.image.data[0].attributes.url} alt={companyProfile.attributes.image.data[0].attributes.alternativeText} />
                                        <p className="text-base p-6 text-gray-600 block h-52">
                                            {companyProfile.attributes.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </OwlCarousel>
                    </> : <OwlCarousel className='owl-theme' {...carousel}>

                        {[1, 2, 3, 4, 5].map((item, index) => (
                            <div key={item + ' ' + index} className="item my-5">
                                <div className="bg-white animate-pulse border rounded-xl shadow-xl overflow-hidden group">
                                    <div className="w-auto bg-gray-300 block h-52 card-image" />
                                    <div className='p-6'>
                                        <div className="p-2 animate-pulse  bg-gray-300 text-transparent block h-2 w-full rounded-xl my-1" />
                                        <div className="p-2 animate-pulse  bg-gray-300 text-transparent block h-2 w-full rounded-xl my-1" />
                                        <div className="p-2 animate-pulse  bg-gray-300 text-transparent block h-2 w-full rounded-xl my-1" />
                                        <div className="p-2 animate-pulse  bg-gray-300 text-transparent block h-2 w-full rounded-xl my-1" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>}
                </div>
            </section>

            {/* company timeline */}
            <section className="my-20">
                <div className="container mx-auto">
                    {sections && sections.filter(section => section.index === 3)[0]?.title ?
                        <h1 className="text-2xl text-gray-600 lg:text-4xl font-bold text-center">
                            {sections && sections.filter(section => section.index === 3)[0]?.title}
                        </h1> :
                        <div className="h-6 lg:w-1/3 lg:mx-auto rounded-xl bg-gray-300 lg:h-9 animate-pulse text-center"></div>
                    }

                    {sections && sections.filter(section => section.index === 3)[0]?.description ?
                        <p className='text-base lg:w-2/3 lg:mx-auto text-gray-600 lg:text-lg font-semibold text-center my-5'>
                            {sections && sections.filter(section => section.index === 3)[0]?.description}
                        </p> :
                        <div className="h-4 lg:w-2/3 lg:mx-auto rounded-xl bg-gray-300 lg:h-5 animate-pulse text-center my-5"></div>
                    }
                    <Tabs tabPosition='left' size="large">
                        {timeLines.length ? <>
                            {timeLines.map((timeLine) => (
                                <TabPane tab={timeLine.attributes.time} key={timeLine.attributes.time}>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                        <img className="rounded-xl" src={timeLine.attributes.image.data.attributes.url} alt="time-line-1" />
                                        <div className="p-0 lg:p-8 flex flex-col justify-center">
                                            <p className="text-base text-tertiary font-semibold my-2">{timeLine.attributes.time}</p>
                                            <h1 className="text-xl lg:text-2xl font-bold">{timeLine.attributes.title}</h1>
                                            <p className="text-base my-4">{timeLine.attributes.description}</p>
                                        </div>
                                    </div>
                                </TabPane>
                            ))}
                        </> : <>
                            {['01', '02', '03'].map((item, index) => (
                                <TabPane tab={item + index} key={item + index}>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                        <div className="rounded-xl animate-pulse h-44 lg:h-96 bg-gray-300" />
                                        <div className="p-0 lg:p-8 flex flex-col justify-center">
                                            <div className="p-2 animate-pulse w-full lg:w-96 bg-gray-300 text-transparent block h-1 rounded-xl my-1" />
                                            <div className="p-3 animate-pulse w-full lg:w-96 bg-gray-300 text-transparent block h-3 rounded-xl my-1" />
                                            <div className="p-2 animate-pulse w-full lg:w-96 bg-gray-300 text-transparent block h-2 rounded-xl my-1" />
                                        </div>
                                    </div>
                                </TabPane>
                            ))}
                        </>}
                    </Tabs>
                </div>
            </section>

            {/* what can we do */}
            <section className="my-20 py-20 bg-light-blue">
                <div className="container mx-auto">
                    {sections && sections.filter(section => section.index === 4)[0]?.title ?
                        <h1 className="text-2xl text-gray-600 lg:text-4xl font-bold text-center">
                            {sections && sections.filter(section => section.index === 4)[0]?.title}
                        </h1> :
                        <div className="h-6 lg:w-1/3 lg:mx-auto rounded-xl bg-gray-300 lg:h-9 animate-pulse text-center"></div>
                    }

                    {sections && sections.filter(section => section.index === 4)[0]?.description ?
                        <p className='text-base lg:w-2/3 lg:mx-auto text-gray-600 lg:text-lg font-semibold text-center my-5'>
                            {sections && sections.filter(section => section.index === 4)[0]?.description}
                        </p> :
                        <div className="h-4 lg:w-2/3 lg:mx-auto rounded-xl bg-gray-300 lg:h-5 animate-pulse text-center my-5"></div>
                    }

                    {workingProcesses.length ? <>
                        <OwlCarousel {...carousel2} className="owl-theme mx-auto">
                            {workingProcesses.map((workingProcess) => (
                                <div key={workingProcess.attributes.createdAt} className="w-full sm:w-80 shadow-xl rounded-xl overflow-hidden bg-transparent border-2 border-white my-5">
                                    <div className='p-5 text-center flex justify-center items-center'>
                                        <div className="h-12 w-12">
                                            <img className='p-3 rounded-full bg-dark-blue' src={workingProcess.attributes.icon.data.attributes.url} alt={workingProcess.attributes.icon.data.attributes.name} />
                                        </div>
                                    </div>
                                    <div className="h-20">
                                        <p className='px-3 text-lg font-semibold text-center'>
                                            {workingProcess.attributes.title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </OwlCarousel>

                    </> :
                        <OwlCarousel {...carousel2} className="owl-theme mx-auto">
                            {['01', '02', '03', '04', '05'].map((item, index) => (
                                <div key={index + item} className="w-full sm:w-80 shadow-xl rounded-xl overflow-hidden bg-transparent border-2 border-white my-5">
                                    <div className='p-5 text-center flex justify-center items-center'>
                                        <div className='h-12 w-12 animate-pulse rounded-full bg-gray-300' />
                                    </div>
                                    <div className="h-20 p-3">
                                        <div className="w-full p-3 animate-pulse bg-gray-300 text-transparent block h-3 rounded-xl my-1" />
                                    </div>
                                </div>
                            ))}
                        </OwlCarousel>
                    }

                    {workingSteps.length ? <>
                        {workingSteps.map((workingStep) => (
                            <div key={workingStep.attributes.title} className='my-10'>
                                <h1 className="text-2xl text-gray-600 lg:text-4xl font-bold text-center my-5">
                                    {workingStep.attributes.title}
                                </h1>
                                <div className='p-5 shadow-xl border-2 border-white rounded-xl text-center'>
                                    <Steps size="small" current={workingStep.attributes.steps.length + 1}>
                                        {workingStep.attributes.steps.map((step) => (
                                            <Step key={step} title={<span className='font-semibold'>{step}</span>} />
                                        ))}
                                    </Steps>
                                </div>
                            </div>
                        ))}
                    </> : <div className='my-10'>
                        <div className="h-6 lg:w-1/3 lg:mx-auto rounded-xl bg-gray-300 lg:h-9 animate-pulse text-center my-5" />
                        <div className='p-5 shadow-xl border-2 border-white rounded-xl text-center'>
                            <Steps size="small" current={8}>
                                <Step title={<span className='font-semibold'>
                                    <div className="w-full p-3 animate-pulse bg-gray-300 text-transparent block h-3 rounded-xl my-1" />
                                </span>} />
                                <Step title={<span className='font-semibold'>
                                    <div className="w-full p-3 animate-pulse bg-gray-300 text-transparent block h-3 rounded-xl my-1" />
                                </span>} />
                                <Step title={<span className='font-semibold'>
                                    <div className="w-full p-3 animate-pulse bg-gray-300 text-transparent block h-3 rounded-xl my-1" />
                                </span>} />
                                <Step title={<span className='font-semibold'>
                                    <div className="w-full p-3 animate-pulse bg-gray-300 text-transparent block h-3 rounded-xl my-1" />
                                </span>} />
                                <Step title={<span className='font-semibold'>
                                    <div className="w-full p-3 animate-pulse bg-gray-300 text-transparent block h-3 rounded-xl my-1" />
                                </span>} />
                                <Step title={<span className='font-semibold'>
                                    <div className="w-full p-3 animate-pulse bg-gray-300 text-transparent block h-3 rounded-xl my-1" />
                                </span>} />
                                <Step title={<span className='font-semibold'>
                                    <div className="w-full p-3 animate-pulse bg-gray-300 text-transparent block h-3 rounded-xl my-1" />
                                </span>} />
                            </Steps>
                        </div>
                    </div>}

                </div>
            </section>

            {/* Partners */}
            <section className="my-20">
                <div className="container mx-auto">
                    {sections && sections.filter(section => section.index === 5)[0]?.title ?
                        <h1 className="text-2xl text-gray-600 lg:text-4xl font-bold text-center">
                            {sections && sections.filter(section => section.index === 5)[0]?.title}
                        </h1> :
                        <div className="h-6 lg:w-1/3 lg:mx-auto rounded-xl bg-gray-300 lg:h-9 animate-pulse text-center"></div>
                    }

                    {sections && sections.filter(section => section.index === 5)[0]?.description ?
                        <p className='text-base lg:w-2/3 lg:mx-auto text-gray-600 lg:text-lg font-semibold text-center my-5'>
                            {sections && sections.filter(section => section.index === 5)[0]?.description}
                        </p> :
                        <div className="h-4 lg:w-2/3 lg:mx-auto rounded-xl bg-gray-300 lg:h-5 animate-pulse text-center my-5"></div>
                    }

                    {partners.length ? <>
                        <OwlCarousel {...carousel2} className="owl-theme mx-auto">
                            {partners.map((partner) => (
                                <div key={partner.attributes.name} className="w-full sm:w-80 h-36 flex justify-center items-center p-4 shadow-xl rounded-xl overflow-hidden bg-transparent border-2 my-5">
                                    <img className='h-auto flex rounded-lg' src={partner.attributes.image.data.attributes.url} alt={partner.attributes.name} />
                                </div>
                            ))}
                        </OwlCarousel>
                    </> : <>
                        <OwlCarousel {...carousel2} className="owl-theme mx-auto">
                            {['01partner', '0201partner', '0301partner', '0401partner', '0501partner'].map((item, index) => (
                                <div key={item + index} className="w-full sm:w-80 h-36 flex justify-center items-center p-4 shadow-xl rounded-xl overflow-hidden bg-transparent border-2 my-5">
                                    <div className='h-full w-full bg-gray-300 animate-pulse flex rounded-lg' />
                                </div>
                            ))}
                        </OwlCarousel>
                    </>}
                </div>
            </section>

            {/* what can we do */}
            <section className="py-20 bg-light-blue">
                <div className="container mx-auto">
                    {sections && sections.filter(section => section.index === 6)[0]?.title ?
                        <h1 className="text-2xl text-gray-600 lg:text-4xl font-bold text-center">
                            {sections && sections.filter(section => section.index === 6)[0]?.title}
                        </h1> :
                        <div className="h-6 lg:w-1/3 lg:mx-auto rounded-xl bg-gray-300 lg:h-9 animate-pulse text-center"></div>
                    }

                    {sections && sections.filter(section => section.index === 6)[0]?.description ?
                        <p className='text-base lg:w-2/3 lg:mx-auto text-gray-600 lg:text-lg font-semibold text-center my-5'>
                            {sections && sections.filter(section => section.index === 6)[0]?.description}
                        </p> :
                        <div className="h-4 lg:w-2/3 lg:mx-auto rounded-xl bg-gray-300 lg:h-5 animate-pulse text-center my-5"></div>
                    }

                    {certificates.length ? <>
                        <OwlCarousel {...carousel3} className="owl-theme md:mx-auto">
                            {certificates.map((certificate) => (
                                <div key={certificate.attributes.name} className="shadow-xl w-auto sm:w-64 p-0 flex justify-center items-center rounded-xl overflow-hidden bg-transparent border-4 border-blue-900 my-5">
                                    <Image className='h-96 w-full rounded-lg' src={certificate.attributes.image.data.attributes.url} alt={certificate.attributes.name} />
                                </div>
                            ))}
                        </OwlCarousel>
                    </> : <>
                        <OwlCarousel {...carousel2} className="owl-theme mx-auto">
                            {['c', '02c', '03c', '04c', '05c'].map((item, index) => (
                                <div key={item + index} className="shadow-xl w-auto sm:w-64 p-0 flex justify-center items-center rounded-xl overflow-hidden bg-transparent border-4 border-blue-900 my-5">
                                    <div className='h-96 bg-gray-300 animate-pulse w-full rounded-lg' />
                                </div>
                            ))}
                        </OwlCarousel>
                    </>}
                </div>
            </section>
        </Layout >
    )
}

export default AboutUs
