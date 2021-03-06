import { Input, Tooltip, Select, message } from 'antd';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { CopyrightOutlined, LoadingOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react';
import { getCategories, getCompanyAddress, getMetaTags, sendMsg } from '../Api';
import { Helmet } from "react-helmet";
import { countryCode } from './CountryCode';
import InquiryModal from './InquiryModal';
const { Option } = Select;

const { TextArea } = Input;

const Layout = ({ children, className, showPopUp }) => {
    const [categories, setCategories] = useState([]);
    const [companyAddress, setCompanyAddress] = useState({})
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companySite, setCompanySite] = useState('');
    const [selectedCountryCode, setSelectedCountryCode] = useState('');
    const [country, setCountry] = useState('');
    const [interestedProducts, setInterestedProducts] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [metaTags, setMetaTags] = useState([]);
    const [showModal, setShowModal] = useState(showPopUp ?? false);

    const selectCountryCode = value => {
        setSelectedCountryCode(value);
        setCountry(countryCode.filter(item => item.dial_code === value)[0].name);
    }

    let goTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        const getAPIdata = async () => {
            const { data: categoriesData } = await getCategories();
            const { data: address } = await getCompanyAddress();
            const { data: metaData } = await getMetaTags();
            setMetaTags(metaData);
            setCompanyAddress(address[0].attributes)
            setCategories(categoriesData);
        }

        getAPIdata();

        window.scrollTo({ top: 0, behavior: 'smooth' });


        if (!localStorage.getItem('popupClosed')) {

            let showPopup = setTimeout(() => {
                setShowModal(true)
            }, 30 * 1000)

            return () => {
                clearTimeout(showPopup);
            }
        }
    }, [])

    const sendMessage = (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            phone: selectedCountryCode + phone,
            Country: country,
            CompanyName: companyName,
            CompanySite: companySite,
            InterestedProducts: interestedProducts,
        }
        setIsDisabled(true);
        if (name && email && phone) {
            sendMsg(data).then(() => {
                setName('');
                setEmail('');
                setPhone('');
                setCountry('');
                setCompanyName('');
                setCompanySite('');
                setInterestedProducts('');
                setIsDisabled(false);
                success();
            })
        }

    }

    const success = () => {
        message.success('Message is sent to supplier.');
    };

    return (
        <div className={className}>
            <Helmet>
                <meta name="author" content='Mohammad Sazzad Bin Anwar' />
                {metaTags && metaTags.map(metaTag => (
                    <meta key={metaTag.id} name={metaTag.attributes.name} content={metaTag.attributes.content} />
                ))}
            </Helmet>
            <Nav />
            <InquiryModal setShowModal={setShowModal} showModal={showModal} />
            {children}

            {/* email to supplier */}
            <section className="pt-20 pb-32 backdrop-blur-lg relative" style={{
                background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/banner-2.png) no-repeat center center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed'
            }}>
                <div className="container mx-auto">
                    <h1 className="text-xl lg:text-3xl font-bold text-center mb-5 text-white animate__animated animate__fadeIn wow">Send Message To Supplier</h1>
                    <div className="flex justify-center items-center mb-10 animate__animated animate__fadeIn wow animate__delay-1s">
                        <form onSubmit={sendMessage} className="bg-white p-4 lg:p-8 shadow-xl rounded-xl w-[37.5rem] mx-auto px-8">
                            <Input value={name} onChange={e => setName(e.target.value)} required type='text' className="my-3 py-3" placeholder="Name" />
                            <Input value={email} onChange={e => setEmail(e.target.value)} required type="email" className="my-3 py-3" placeholder="Email" />
                            <div className='flex items-center w-full'>
                                <Select size='large' placeholder="Country Code" className='my-3 py-3' style={{ width: 200, borderRight: 'none' }} onChange={selectCountryCode}>
                                    {countryCode && countryCode.map(country => (
                                        <Option key={country.dial_code} value={country.dial_code}>{country.name}</Option>
                                    ))}
                                </Select>
                                <Input type='tel' size='large' required value={phone} onChange={e => setPhone(e.target.value)} className='' style={{
                                    borderLeft: 'none',
                                }} placeholder="Phone Number" />
                            </div>
                            <Input value={country} onChange={e => setCountry(e.target.value)} type="text" className="my-3 py-3" placeholder="Country" />
                            <Input value={companyName} onChange={e => setCompanyName(e.target.value)} type="text" className="my-3 py-3" placeholder="Company Name" />
                            <Input value={companySite} onChange={e => setCompanySite(e.target.value)} type="url" className="my-3 py-3" placeholder="Company Website" />
                            <TextArea value={interestedProducts} onChange={e => setInterestedProducts(e.target.value)} className="my-3 py-3" placeholder="Please inform us about your question or query" autoSize />
                            <button disabled={isDisabled} type="submit" className="my-3 py-2 px-3 text-base text-white bg-primary hover:bg-blue-400 outline-none shadow transition duration-300 ease-in-out">
                                {isDisabled ? <> <LoadingOutlined /> Sending...</> : <>Send <i className="bi bi-send-fill pl-2"></i></>}
                            </button>
                        </form>
                    </div>
                </div>

                <div className="custom-shape-divider-bottom-1638556171">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>

            {/* footer */}
            <footer className="bg-dark-blue">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 border-b border-white pb-10">
                        <div>
                            <img src="/images/logo-white.png" alt="logo" />
                            <p className="text-base text-white mt-5 lg:pr-10">
                                {companyAddress.shortDescription}
                            </p>
                            <div className="flex items-center py-3">
                                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                    <i className="bi bi-facebook pr-3 text-3xl text-white hover:text-blue-800 transition duration-200 ease-in-out"></i>
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                    <i className="bi bi-twitter pr-3 text-3xl text-white hover:text-blue-800 transition duration-200 ease-in-out"></i>
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                    <i className="bi bi-instagram pr-3 text-3xl text-white hover:text-blue-800 transition duration-200 ease-in-out"></i>
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                    <i className="bi bi-youtube pr-3 text-3xl text-white hover:text-blue-800 transition duration-200 ease-in-out"></i>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-white text-2xl font-semibold bottom-underline">Company</h1>
                            <ul className="list-none mt-8">
                                <li className="py-2.5">
                                    <Link to="/" className="text-white text-lg footer-link transition duration-200 ease-in-out hover:text-white">About Us</Link>
                                </li>
                                <li className="py-2.5">
                                    <Link to="/contact-us" className="text-white text-lg footer-link transition duration-200 ease-in-out hover:text-white">Contact Us</Link>
                                </li>
                                <li className="py-2.5">
                                    <Link to="/services" className="text-white text-lg footer-link transition duration-200 ease-in-out hover:text-white">Services</Link>
                                </li>
                                <li className="py-2.5">
                                    <Link to="/privacy-policy" className="text-white text-lg footer-link transition duration-200 ease-in-out hover:text-white">Privacy Policy</Link>
                                </li>
                                <li className="py-2.5">
                                    <Link to="/terms-&-condition" className="text-white text-lg footer-link transition duration-200 ease-in-out hover:text-white">Terms & Condition</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h1 className="text-white text-2xl font-semibold bottom-underline">Categories</h1>
                            <ul className="list-none mt-8" style={{ columnCount: 2 }}>
                                {categories && categories.map((category) => (
                                    <li key={category.id} className="py-2.5 clear-both">
                                        <Link to={`/category/${(category.attributes.name.toLowerCase()).split(' ').join('-')}`} className="text-white text-base footer-link transition duration-200 ease-in-out hover:text-white">{category.attributes.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h1 className="text-white text-2xl font-semibold bottom-underline">Address</h1>
                            <ul className="list-none mt-8">
                                <li className="py-2.5 flex items-center">
                                    <i className="bi bi-geo-alt-fill text-white text-xl px-3 py-2 bg-primary rounded-full"></i>
                                    <span className="ml-2 text-base text-white">
                                        {companyAddress.street}
                                    </span>
                                </li>
                                <li className="py-2.5 flex items-center">
                                    <i className="bi bi-telephone-fill text-white text-xl px-3 py-2 bg-primary rounded-full"></i>
                                    <a href={`tel:${companyAddress.phone}`} className="ml-2 text-base hover:text-white text-white">
                                        {companyAddress.phone}
                                    </a>
                                </li>
                                <li className="py-2.5 flex items-center">
                                    <i className="bi bi-envelope-fill text-white text-xl px-3 py-2 bg-primary rounded-full"></i>
                                    <a href={`mailto:${companyAddress.email}`} className="ml-2 hover:text-white text-base text-white">
                                        {companyAddress.email}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center h-20 w-full">
                    <p className="text-base text-white font-semibold">SHANGHAI BLUETECH <CopyrightOutlined className="text-lg" /> {new Date().getFullYear()}</p>
                    <Tooltip title="Go Top">
                        <span
                            className="bg-white text-primary ml-5 px-3 py-2 cursor-pointer rounded-full"
                            onClick={goTop}
                        >
                            <i className="bi bi-chevron-up"></i>
                        </span>
                    </Tooltip>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
